import { TimeOfDayTypes } from "common/constants";
import { IDailyTest } from "common/interfaces";

export const generateDateArray = (startDashDate: string, numOfDays: number) => {
  const arrDate = startDashDate.split("-");
  const year = Number(arrDate[0]);
  const month = Number(arrDate[1]);
  const day = Number(arrDate[2]);
  const dateList = [];
  for (let i = 0; i < numOfDays; i++) {
    const date = Date.UTC(year, month - 1, day + i, 0, 0, 0);
    let dateWithDots = new Intl.DateTimeFormat("pl").format(date);
    if (dateWithDots[1] === ".") dateWithDots = `0${dateWithDots}`;
    dateList.push(dateWithDots);
  }
  return dateList;
};

export const generateDailyTestList = (dateList: string[]) => {
  const itemList: IDailyTest[] = dateList.map((date, index) => ({
    id: index + 1,
    date: date,
    morning: {
      timeOfDay: TimeOfDayTypes.morning,
      omitted: false,
      SYS: 0,
      DIA: 0,
      PULSE: 0,
    },
    evening: {
      timeOfDay: TimeOfDayTypes.evening,
      omitted: false,
      SYS: 0,
      DIA: 0,
      PULSE: 0,
    },
  }));
  return itemList;
};
