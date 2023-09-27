import GetCurrentDate from './GetCurrentDate';
import GetLimitDate from './GetLimitDate';
import ToFullTime from './ToFullTime';

export default function CalculateRemainingTime(existLimit) {
  const calculateMargin = (a, b) => {
    const res = b - a;
    return String(res);
  };

  const displayedTime = (num) => {
    const str = String(num).split('');
    const obj = {
      day: '',
      hour: '',
      minute: ''
    };
    if (str.length < 3) {
      let minute = Number(str.join(''));
      obj.minute = minute + '分';
      if (minute >= 60) {
        minute -= 40;
      }
    } else if (str.length < 5) {
      let minute = Number(str.splice(str.length - 2, 2).join(''));
      let hour = Number(str.join(''));
      if (minute >= 60) {
        minute -= 40;
      }
      obj.hour = hour + '時間';
      obj.minute = (minute % 60) + '分';
    } else {
      let minute = Number(str.splice(str.length - 2, 2).join(''));
      let hour = Number(str.splice(str.length - 2, 2).join(''));
      let day = Number(str.join(''));
      if (minute >= 60) {
        minute -= 40;
      }
      if (hour >= 24) {
        hour -= 76;
      }
      obj.day = day + '日';
      obj.hour = hour + '時間';
      obj.minute = minute + '分';
    }
    return obj;
  };

  const currentDate = ToFullTime(GetCurrentDate());
  const existLimitDate = ToFullTime(GetLimitDate(existLimit.split(/[^0-9]/)));

  const remainingTime = calculateMargin(currentDate, existLimitDate);
  return '残り時間 : ' + Object.values(displayedTime(remainingTime)).join('');
}
