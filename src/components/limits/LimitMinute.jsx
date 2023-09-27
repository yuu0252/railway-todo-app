import { SetSelectbox } from './SetSelectbox';

export const LimitMinute = ({ selectedMinute, setSelectedMinute }) => {
  const minutes = [...Array(60)].map((_, i) => i);

  const onChageMinute = () => {
    setSelectedMinute(document.getElementById('limit-minute').value);
  };

  return (
    <>
      <SetSelectbox
        id="limit-minute"
        arr={minutes}
        defaultDate={selectedMinute}
        onChange={onChageMinute}
      />
      分
    </>
  );
};
