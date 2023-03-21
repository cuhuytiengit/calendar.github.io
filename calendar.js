var test = document.getElementById("view-event");
var getHours = document.getElementById("hours");
var getMinutes = document.getElementById("minutes");
var getSeconds = document.getElementById("seconds");

var time = new Date();
hours = time.getHours();
minutes = time.getMinutes();
seconds = time.getSeconds();
milliseconds = time.getMilliseconds();
setInterval(setMinutes, 1000);
setInterval(setSecond, 700);

getHours.innerHTML = hours;
getMinutes.innerHTML = minutes;
function setMinutes() {
  console.log("test");
  console.log(seconds);
  console.log(minutes);
  console.log(getSeconds.value);
  if (seconds == 0 && seconds > 58) {
    getMinutes.innerHTML = minutes++;
  } else if (seconds == 0) {
    minutes++;
    getMinutes.innerHTML = minutes;
  }
}

function setSecond() {
  if (seconds >= -1 && seconds <= 58) {
    if (seconds < 9) {
      seconds++;
      getSeconds.innerHTML = "0" + seconds;
    } else {
      seconds++;
      getSeconds.innerHTML = seconds;
    }
    console.log("test time oout 35");
  } else if (seconds > 58) {
    console.log("test time oout");
    setTimeout(function test() {
      seconds = -1;
      getSeconds.innerHTML = seconds;
      console.log("test time oout1");
    });
  }
}

if (minutes === 00) {
  document.body.style.backgroundImage = "red";
}
