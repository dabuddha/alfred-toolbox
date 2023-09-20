import dayjs from "dayjs";

export function createDayjs(dateString) {
  const date =
    !isNaN(dateString) && (dateString.length === 10 || dateString.length === 13)
      ? dateString.length === 10
        ? dayjs.unix(parseInt(dateString))
        : dayjs(parseInt(dateString))
      : dayjs(dateString);
  return date;
}