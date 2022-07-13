//takes in number (as a string) and formats it into "(XXX) XXX-XXXX" format
const formatPhoneNumber = (number) => {
  return number && number.length === 10
    ? `(${number.substring(0, 3)}) ${number.substring(3, 6)}-${number.substring(
        6
      )}`
    : "invalid number";
};

const formatTime = (time) => {
  console.log(time);
  const timeArr = time.split(":");
  console.log(timeArr);
  const firstNum = Number(timeArr[0]);
  timeArr[2] = firstNum >= 12 ? "pm" : "am";
  timeArr[0] = firstNum === 0 ? 12 : firstNum > 12 ? firstNum - 12 : firstNum;
  return timeArr.slice(0, 2).join(":") + timeArr[2];
};

const formatTimeAndDate = (timeAndDate) => {
  const dateObj = new Date(timeAndDate);
  console.log(Intl.DateTimeFormat().resolvedOptions().timeZone);
  const time = [
    dateObj.getHours().toString().padStart(2, "0"),
    dateObj.getMinutes().toString().padStart(2, "0"),
    dateObj.getSeconds().toString().padStart(2, "0"),
  ];
  return dateObj.toDateString() + ", " + formatTime(time.join(":"));
};

const uuidToRandomImageURL = (uuid) => {
  if (!uuid)
    return "https://dreamworldtravel.co.uk/assets/img/img-not-found-01.jpg";
  const imagePool = [
    "https://moderntourspalmsprings.com/wp-content/uploads/2020/12/Pink-Cabana-3-scaled.jpg",
    "https://s3.amazonaws.com/bucket.leye.co/uploads/2020/06/StellaBarraWineBar_Santa_Monica-09.jpg",
    "https://elitetraveler.com/wp-content/uploads/2007/02/R181.jpg",
    "https://img1.10bestmedia.com/Images/Photos/363809/Car3_54_990x660.jpeg",
    "https://b386363e680359b5cc19-97ec1140354919029c7985d2568f0e82.ssl.cf1.rackcdn.com/assets/uploads/post/featured_image/30604/optimized_7663f26c91ffc2236b20cbcb9d38bcea.jpg",
  ];

  return imagePool[Math.floor(Number(uuid.replace(/[^\d]/g, "")) % 5)];
};

export {
  formatPhoneNumber,
  formatTime,
  formatTimeAndDate,
  uuidToRandomImageURL,
};
