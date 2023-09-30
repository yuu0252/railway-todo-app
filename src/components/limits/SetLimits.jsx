import CheckLimit from '../functions/CheckLimit';
import GetLimitDate from '../functions/GetLimitDate';
import ToFullTime from '../functions/ToFullTime';
import './setLimits.scss';

export const SetLimits = ({ defaultDate, setLimitToTask }) => {
  const onChangeInput = () => {
    const time = document.getElementById('date-input').value + ':00Z';
    if (CheckLimit(time)) {
      setLimitToTask(time);
    } else {
      alert('過去の日付は登録できません。');
      return;
    }
  };

  return (
    <div id="set-limit">
      <label>期限を設定してください。</label>
      <input
        type="datetime-local"
        onChange={onChangeInput}
        value={defaultDate.slice(0, -1)}
        id="date-input"
      ></input>
    </div>
  );
};
