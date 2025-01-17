import { useEffect, useState } from 'react';
import { Header } from '../components/Header';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { url } from '../const';
import { useNavigate, useParams } from 'react-router-dom';
import './editTask.scss';
import { SetLimits } from '../components/limits/SetLimits';
import GetExistLimitDate from '../components//functions/GetExistLimitDate';
import CalculateRemainingTime from '../components/functions/CalculateRemainingTime';
import GetLimitDate from '../components/functions/GetLimitDate';
import GetCurrentDate from '../components/functions/GetCurrentDate';
import CheckLimit from '../components/functions/CheckLimit';
import ToFullTime from '../components/functions/ToFullTime';
import NormalizeDate from '../components/functions/NormalizeDate';

export const EditTask = () => {
  const navigate = useNavigate();
  const { listId, taskId } = useParams();
  const [cookies] = useCookies();
  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('');
  const [isDone, setIsDone] = useState();
  const [limitToTask, setLimitToTask] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [fetchLimit, setFetchLimit] = useState('');
  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleDetailChange = (e) => setDetail(e.target.value);
  const handleIsDoneChange = (e) => setIsDone(e.target.value === 'done');
  const onUpdateTask = () => {
    const data = {
      title: title,
      detail: detail,
      done: isDone,
      limit: limitToTask
    };

    axios
      .put(`${url}/lists/${listId}/tasks/${taskId}`, data, {
        headers: {
          authorization: `Bearer ${cookies.token}`
        }
      })
      .then((res) => {
        console.log(res.data);
        navigate('/');
      })
      .catch((err) => {
        setErrorMessage(`更新に失敗しました。${err}`);
      });
  };

  const onDeleteTask = () => {
    axios
      .delete(`${url}/lists/${listId}/tasks/${taskId}`, {
        headers: {
          authorization: `Bearer ${cookies.token}`
        }
      })
      .then(() => {
        navigate('/');
      })
      .catch((err) => {
        setErrorMessage(`削除に失敗しました。${err}`);
      });
  };

  useEffect(() => {
    axios
      .get(`${url}/lists/${listId}/tasks/${taskId}`, {
        headers: {
          authorization: `Bearer ${cookies.token}`
        }
      })
      .then((res) => {
        const task = res.data;
        setTitle(task.title);
        setDetail(task.detail);
        setIsDone(task.done);
        if (task.limit != undefined) {
          setLimitToTask(task.limit);
          setFetchLimit(task.limit);
        }
      })
      .catch((err) => {
        setErrorMessage(`タスク情報の取得に失敗しました。${err}`);
      });
  }, []);

  return (
    <div>
      <Header />
      <main className="edit-task">
        <h2>タスク編集</h2>
        <p className="error-message">{errorMessage}</p>
        <form className="edit-task-form">
          <label>タイトル</label>
          <br />
          <input
            type="text"
            onChange={handleTitleChange}
            className="edit-task-title"
            value={title}
          />
          <br />
          <label>詳細</label>
          <br />
          <textarea
            type="text"
            onChange={handleDetailChange}
            className="edit-task-detail"
            value={detail}
          />
          <br />
          {fetchLimit != '' ? (
            CheckLimit(fetchLimit) ? (
              <div>
                <p>{GetExistLimitDate(fetchLimit)}</p>
                <p>{CalculateRemainingTime(fetchLimit)}</p>
              </div>
            ) : (
              <div>
                <p>{GetExistLimitDate(fetchLimit)}</p>
                <p>期限切れ</p>
              </div>
            )
          ) : (
            <p>期限は設定されていません</p>
          )}
          <br />
          <SetLimits
            setLimitToTask={setLimitToTask}
            defaultDate={
              limitToTask != '' ? limitToTask : NormalizeDate(GetCurrentDate())
            }
          />
          <br />
          <div>
            <input
              type="radio"
              id="todo"
              name="status"
              value="todo"
              onChange={handleIsDoneChange}
              checked={isDone === false ? 'checked' : ''}
            />
            未完了
            <input
              type="radio"
              id="done"
              name="status"
              value="done"
              onChange={handleIsDoneChange}
              checked={isDone === true ? 'checked' : ''}
            />
            完了
          </div>
          <button
            type="button"
            className="delete-task-button"
            onClick={onDeleteTask}
          >
            削除
          </button>
          <button
            type="button"
            className="edit-task-button"
            onClick={onUpdateTask}
          >
            更新
          </button>
        </form>
      </main>
    </div>
  );
};
