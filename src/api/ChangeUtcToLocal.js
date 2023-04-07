export const changeUtcToLocal = (date) => {
  let localDate = new Date(date);

  let nowMonth = (localDate.getMonth() + 1).toString();
  if ((nowMonth).length === 1) nowMonth = "0" + nowMonth;

  let nowDate = localDate.getDate().toString();
  if (nowDate.length === 1) nowDate = "0" + nowDate;

  let nowHours = localDate.getHours().toString();
  if (nowHours.length === 1) nowHours = "0" + nowHours;

  let nowMinutes = localDate.getMinutes().toString();
  if (nowMinutes.length === 1) nowMinutes = "0" + nowMinutes;

  const changedDate = `${localDate.getFullYear()}-${nowMonth}-${nowDate} ${nowHours}:${nowMinutes}`;

  return changedDate;
};
