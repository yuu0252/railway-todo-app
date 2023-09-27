export default function CheckLimit(currentDate, limitDate) {
  const remainingTime = limitDate - currentDate;
  const res = remainingTime >= 0 ? true : false;
  return res;
}
