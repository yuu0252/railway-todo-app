import { SetSelectbox } from './SetSelectbox';

export const LimitYear = ({ selectedYear, setSelectedYear }) => {
  const years = [...Array(5)].map((_, i) => selectedYear + i);

  const onChageYear = () => {
    setSelectedYear(document.getElementById('limit-year').value);
  };

  return (
    <>
      <SetSelectbox
        id="limit-year"
        arr={years}
        defaultDate={selectedYear}
        onChange={onChageYear}
      />
      年
    </>
  );
};
