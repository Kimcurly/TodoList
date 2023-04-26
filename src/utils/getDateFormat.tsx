import dayjs, { Dayjs } from "dayjs";

const getDateFormat = (nowDate: any): object => {
  const currentYear = nowDate.get("year");
  const currentMonth = nowDate.get("month");
  const currentDate = nowDate.get("date");
  const currentDay = nowDate.get("day") + 1;
  const currentFirstDate = nowDate.startOf("month").get("date");
  const currentFirstDay = nowDate.startOf("month").get("day");
  const currentFirstWeekDay = nowDate.startOf("month").endOf("day").get("day");
  const currentLastDate = nowDate.endOf("month").get("D");
  const currentLastDay = nowDate.endOf("month").get("d");
  const lastMonthDate = nowDate
    .set("month", currentMonth - 1)
    .endOf("month")
    .get("D");

  return {
    currentYear,
    currentMonth,
    currentDate,
    currentDay,
    currentFirstDate,
    currentFirstDay,
    currentFirstWeekDay,
    currentLastDate,
    currentLastDay,
    lastMonthDate,
  };
};

export default getDateFormat;
