import { Dayjs } from "dayjs";
export interface DateType {
  currentYear: number;
  currentMonth: number;
  currentDate: number;
  currentDay: number;
  currentFirstDate: number;
  currentFirstDay: number;
  currentFirstWeekDay: number;
  currentLastDate: number;
  currentLastDay: number;
  lastMonthDate: number;
}

const getDateFormat = (nowDate: Dayjs): DateType => {
  const FormatedDate = {
    currentYear: nowDate.get("year"),
    currentMonth: nowDate.get("month"),
    currentDate: nowDate.get("date"),
    currentDay: nowDate.get("day") + 1,
    currentFirstDate: nowDate.startOf("month").get("date"),
    currentFirstDay: nowDate.startOf("month").get("day"),
    currentFirstWeekDay: nowDate.startOf("month").endOf("day").get("day"),
    currentLastDate: nowDate.endOf("month").get("D"),
    currentLastDay: nowDate.endOf("month").get("d"),
    lastMonthDate: nowDate
      .set("month", nowDate.get("month") - 1)
      .endOf("month")
      .get("D"),
  };

  return FormatedDate;
};

export default getDateFormat;
