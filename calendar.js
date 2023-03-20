const test = document.getElementById("view-event");
const getHours = document.getElementById("hours");
const getMinutes = document.getElementById("minutes");
const getSeconds = document.getElementById("seconds");

const time = new Date();
hours = time.getHours();
minutes = time.getMinutes();
seconds = time.getSeconds();
milliseconds = time.getMilliseconds();
minutes = minutes < 10 ? "0" + minutes : minutes;
seconds = seconds < 10 ? "0" + seconds : seconds;
setInterval(setMinutes, 60000);
setInterval(setSecond, 1000);

getHours.innerHTML = hours;
getMinutes.innerHTML = minutes;
function setMinutes() {
  if (minutes > 0 && minutes <= 59) {
    minutes++;
    getMinutes.innerHTML = minutes;
  } else if (minutes > 59) {
    seconds === 00;
    minutes++;
    getMinutes.innerHTML = minutes;
  }
}

function setSecond() {
  if (seconds > 0 && seconds <= 59) {
    seconds++;
    getSeconds.innerHTML = seconds;
  }
}

if (minutes === 00) {
  document.body.style.backgroundImage = "red";
}
