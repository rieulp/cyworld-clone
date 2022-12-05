import dayjs from "dayjs";

const NEW_DAY = 7;

export const isNewDate = (date: Date) =>
  dayjs(new Date()).diff(date, "d") < NEW_DAY;
