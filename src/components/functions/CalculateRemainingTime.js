export default function CalculateRemainingTime(existLimit) {
  const limitTime = new Date(existLimit.slice(0, -1)).getTime();
  const diff = limitTime - Date.now();
  if (diff < 0) return '期限切れ';
  const year = Math.floor(diff / (60 * 60 * 24 * 365 * 1000));
  const displayYear = year != 0 ? year + '年' : '';
  const day = Math.floor(diff / (60 * 60 * 24 * 1000));
  const displayDay = day != 0 ? day + '日' : '';
  const hour = Math.floor((diff / (60 * 60 * 1000)) % 24);
  const displayHour = hour != 0 ? hour + '時間' : '';
  const displayMinute = Math.floor((diff / (60 * 1000)) % 60) + '分';

  const res =
    '残り時間 : ' + displayYear + displayDay + displayHour + displayMinute;
  return res;
}
