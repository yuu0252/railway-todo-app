export default function GetCurrentDate() {
  const obj = {};
  const date = new Date();
  obj.year = date.getFullYear();
  obj.month = date.getMonth() + 1;
  obj.date = date.getDate();
  obj.hour = date.getHours();
  obj.minute = date.getMinutes();

  return obj;
}
