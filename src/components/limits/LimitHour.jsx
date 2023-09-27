import { SetSelectbox } from './SetSelectbox';

export const LimitHour = ({ selectedHour, setSelectedHour }) => {
  const hours = [...Array(24)].map((_, i) => i);

  const onChageHour = () => {
    setSelectedHour(document.getElementById('limit-hour').value);
  };

  return (
    <>
      <SetSelectbox
        id="limit-hour"
        arr={hours}
        defaultDate={selectedHour}
        onChange={onChageHour}
      />
      時
    </>
  );
};
