export default function ToFullTime({ year, month, date, hour, minute }) {
  const toString = (num) => {
    let res = String(num);
    if (String(num).length === 1) res = '0' + String(num);
    return res;
  };
  const res =
    toString(year) +
    toString(month) +
    toString(date) +
    toString(hour) +
    toString(minute);
  return res;
}
