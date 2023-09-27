import { SetSelectbox } from './SetSelectbox';

export const LimitMonth = ({ selectedMonth, setSelectedMonth }) => {
  const months = [...Array(12)].map((_, i) => i + 1);

  const onChangeMonth = () => {
    setSelectedMonth(document.getElementById('limit-month').value);
  };

  return (
    <>
      <SetSelectbox
        id="limit-month"
        arr={months}
        defaultDate={selectedMonth}
        onChange={onChangeMonth}
      />
      月
    </>
  );
};
