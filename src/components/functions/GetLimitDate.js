export default function GetLimitDate(date) {
  const obj = {};
  obj.year = date[0];
  obj.month = date[1];
  obj.date = date[2];
  obj.hour = date[3];
  obj.minute = date[4];

  return obj;
}
