export default function NormalizeDate({ year, month, date, hour, minute }) {
  const toString = (num) => {
    let res = String(num);
    if (String(num).length === 1) res = '0' + String(num);
    return res;
  };
  const res =
    toString(year) +
    '-' +
    toString(month) +
    '-' +
    toString(date) +
    'T' +
    toString(hour) +
    ':' +
    toString(minute) +
    ':00Z';
  return res;
}
