const getCurrentTime = () => {
  const date = new Date();
  let hours = String(date.getHours()).padStart(2, "0");
  let mins = String(date.getMinutes()).padStart(2, "0");
  let secs = String(date.getSeconds()).padStart(2, "0");
  return `${hours}:${mins}:${secs}`;
}
 
export default getCurrentTime;