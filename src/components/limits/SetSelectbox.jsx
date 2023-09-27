export const SetSelectbox = ({ id, arr, defaultDate, onChange }) => {
  return (
    <select onChange={onChange} id={id} defaultValue={defaultDate}>
      {arr.map((element) => {
        return (
          <option key={element} value={element}>
            {element}
          </option>
        );
      })}
    </select>
  );
};
