//takes in number (as a string) and formats it into "(XXX) XXX-XXXX" format
const formatPhoneNumber = (number) => {
  return number && number.length === 10
    ? `(${number.substring(0, 3)}) ${number.substring(3, 6)}-${number.substring(
        6
      )}`
    : "invalid number";
};

const formatTime = (time) => {
  const timeArr = time.split(":");
  const firstNum = Number(timeArr[0]);
  timeArr[2] = firstNum > 11 ? "pm" : "am";
  timeArr[0] = firstNum === 0 ? 12 : firstNum > 12 ? firstNum - 12 : firstNum;
  return timeArr.slice(0, 2).join(":") + timeArr[2];
};

const formatTimeAndDate = (timeAndDate) => {
  const dateObj = new Date(timeAndDate);
  const time = [
    dateObj.getHours().toString().padEnd(2, "0"),
    dateObj.getMinutes().toString().padEnd(2, "0"),
    dateObj.getSeconds().toString().padEnd(2, "0"),
  ];
  return dateObj.toDateString() + ", " + formatTime(time.join(":"));
};

export { formatPhoneNumber, formatTime, formatTimeAndDate };
