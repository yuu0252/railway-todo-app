import { useEffect, useState } from 'react';
import { LimitYear } from './LimitYear';
import { LimitMonth } from './LimitMonth';
import { LimitDate } from './LimitDate';
import { LimitMinute } from './LimitMinute';
import { LimitHour } from './LimitHour';
import './setLimits.scss';

export const SetLimits = ({ defaultDate, setLimitToTask }) => {
  console.log(defaultDate);
  const [selectedYear, setSelectedYear] = useState(defaultDate.year);
  const [selectedMonth, setSelectedMonth] = useState(defaultDate.month);
  const [selectedDate, setSelectedDate] = useState(defaultDate.date);
  const [selectedHour, setSelectedHour] = useState(defaultDate.hour);
  const [selectedMinute, setSelectedMinute] = useState(defaultDate.minute);

  const toString = (num) => {
    let res = String(num);
    if (String(num).length === 1) res = '0' + String(num);
    return res;
  };

  const checkLimit = (limitDate) => {
    const date = new Date();
    const preDate =
      String(date.getFullYear()) +
      toString(date.getMonth() + 1) +
      toString(date.getDate()) +
      toString(date.getHours()) +
      toString(date.getMinutes());
    const res = Number(preDate) <= Number(limitDate) ? true : false;
    return res;
  };

  useEffect(() => {
    const limitDate =
      String(selectedYear) +
      toString(selectedMonth) +
      toString(selectedDate) +
      toString(selectedHour) +
      toString(selectedMinute);
    if (checkLimit(limitDate) === false) {
      alert('過去の日付は登録できません。');
      setLimitToTask('');
      return;
    }
    // prettier-ignore
    const res = `${String(selectedYear)}-${toString(selectedMonth)}-${toString(selectedDate)}T${toString(selectedHour)}:${toString(selectedMinute)}:00Z`;
    setLimitToTask(res);
  }, [selectedYear, selectedMonth, selectedDate, selectedHour, selectedMinute]);

  return (
    <div id="limits-container">
      <LimitYear
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear}
      />
      <LimitMonth
        selectedMonth={selectedMonth}
        setSelectedMonth={setSelectedMonth}
      />
      <LimitDate
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        selectedYear={selectedYear}
        selectedMonth={selectedMonth}
      />
      <LimitHour
        selectedHour={selectedHour}
        setSelectedHour={setSelectedHour}
      />
      <LimitMinute
        selectedMinute={selectedMinute}
        setSelectedMinute={setSelectedMinute}
      />
    </div>
  );
};
