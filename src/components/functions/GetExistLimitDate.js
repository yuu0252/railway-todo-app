import GetLimitDate from './GetLimitDate';

export default function GetExistLimitDate(existLimit) {
  const date = GetLimitDate(existLimit.split(/[^0-9]/));
  const res = `期限 : ${date.year}年${date.month}月${date.date}日${date.hour}時${date.minute}分`;
  return res;
}
