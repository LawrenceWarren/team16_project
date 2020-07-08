/** Pads a zero to integers < 10 and converts them to a string
 * @param num the number to be considered for padding.
 */
function padLeftZeroToString(num) {
  if (num < 10) {
    return `0${num.toString()}`;
  }

  return num.toString();
}

/**Formats the date object into a string when called.
 * @param num the date number to format
 */
function formattedDate(num) {
  return `${padLeftZeroToString(num.getDate())}/${padLeftZeroToString(
    num.getMonth() + 1
  )}/${num.getFullYear().toString()} ${padLeftZeroToString(
    num.getHours()
  )}:${padLeftZeroToString(num.getMinutes())}:${padLeftZeroToString(
    num.getSeconds()
  )}`;
}

module.exports = { formattedDate };
