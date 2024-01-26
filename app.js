(function showDate() {
  var todayDate = new Date();
  document.getElementById("date1").innerText = todayDate.toDateString();
})();
function showTime() {
  var todayDate = new Date();
  var hours = todayDate.getHours(); // 0-23
  var minutes = todayDate.getMinutes(); // 0 - 59
  var seconds = todayDate.getSeconds(); // 0 - 59
  var session = "AM";
  if (hours == 0) {
    hours = 12;
  } else if (hours > 12) {
    session = "PM";
    hours = hours - 12;
  }
  hours = hours < 10 ? 0 + "" + hours : hours;
  minutes = minutes < 10 ? 0 + "" + minutes : minutes;
  seconds = seconds < 10 ? 0 + "" + seconds : seconds;

  var clockTime = hours + " : " + minutes + " : " + seconds + "  " + session;
  document.getElementById("clockContainer").innerText = clockTime;
}
// showTime()
var interval;
function start() {
  interval = setInterval(showTime, 1000);
  document.getElementById("enabled1").disabled = true;
}
function stop() {
  clearInterval(interval);
  document.getElementById("enabled1").disabled = false;
}
