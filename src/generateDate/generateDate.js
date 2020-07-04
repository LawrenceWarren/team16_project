let generateDate = module.exports;
let current = new Date(Date.now()); //The date object

/** Pads a zero to integers < 10 and converts them to a string
 * @param num the number to be considered for padding.
 */

padLeftZeroToString = (num) => {
  if (num < 10) {
    return `0${num.toString()}`;
  }

  return num.toString();
};

/**Formats the date object into a string when called. */
generateDate.formattedDate = () => {
  return `${padLeftZeroToString(current.getDate())}/${padLeftZeroToString(
    current.getMonth() + 1
  )}/${current.getFullYear().toString()} ${padLeftZeroToString(
    current.getHours()
  )}:${padLeftZeroToString(current.getMinutes())}:${padLeftZeroToString(
    current.getSeconds()
  )}`;
};

//Increments the date object every second
setInterval(() => {
  current.setSeconds(current.getSeconds() + 1);
  console.log("New second " + current.getTime());
}, 1000);
