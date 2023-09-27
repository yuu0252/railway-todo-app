import { useState, useEffect } from 'react';
import { SetSelectbox } from './SetSelectbox';

export const LimitDate = ({
  selectedDate,
  setSelectedDate,
  selectedMonth,
  selectedYear
}) => {
  const [dates, setDates] = useState([...Array(31)].map((_, i) => i + 1));
  const [datesList, setDatesList] = useState([
    31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31
  ]);
  const [leapYear, setLeapYear] = useState(false);
  const [datesOfFeb, setDatesOfFeb] = useState(28);
  useEffect(() => {
    setDatesList([31, datesOfFeb, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]);
  }, [datesOfFeb]);

  useEffect(() => {
    if (selectedMonth === '') return;
    setDates([...Array(datesList[selectedMonth - 1])].map((_, i) => i + 1));
  }, [selectedMonth]);

  useEffect(() => {
    selectedYear % 4 === 0 ? setLeapYear(true) : setLeapYear(false);
  }, [selectedYear]);

  useEffect(() => {
    leapYear === true ? setDatesOfFeb(29) : setDatesOfFeb(28);
  }, [leapYear]);

  const onChageDate = () => {
    setSelectedDate(document.getElementById('limit-day').value);
  };

  return (
    <>
      <SetSelectbox
        id="limit-day"
        arr={dates}
        defaultDate={selectedDate}
        onChange={onChageDate}
      />
      日
    </>
  );
};
