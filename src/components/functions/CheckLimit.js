import GetCurrentDate from './GetCurrentDate';
import GetLimitDate from './GetLimitDate';
import ToFullTime from './ToFullTime';

export default function CheckLimit(limitDate) {
  const limit = ToFullTime(GetLimitDate(limitDate.split(/[^0-9]/)));
  const currentDate = ToFullTime(GetCurrentDate());
  const remainingTime = limit - currentDate;
  const res = remainingTime >= 0 ? true : false;
  return res;
}
