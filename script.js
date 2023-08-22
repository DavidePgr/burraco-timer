const secondsSetup = 30.9;
const progressBarSecondsSetup = 30.9;
const buttonSecondsSetup = 60.9;
const buttonProgressBarSecondsSetup = 60.9;

var seconds = secondsSetup;
var progressBarSeconds = progressBarSecondsSetup;
var firstAudioSwitch = true;
var interval;
let gestureStartTime;
// EDIT
var fastTickingClock = document.getElementById("fastTickingClock");
var playbackRate = 1;
// END EDIT
  
function countdown() {
  seconds -= 0.1;
  document.getElementById("progress").style.width = (seconds / progressBarSeconds) * 100 + "%";
  
  if (seconds <= 9.9) {
    document.getElementById("timer").innerHTML = seconds.toFixed(1);
  } else {
    document.getElementById("timer").innerHTML = Math.floor(seconds);
  }
  
  if (seconds > 16.0) {
    document.body.style.backgroundColor = "8EFA00";
  }
  if (seconds < 16.0) {
    document.body.style.backgroundColor = "FF9300";
  }
  if (seconds < 11.0) {
    document.body.style.backgroundColor = "FF2600";
    document.getElementById("fastTickingClock").play();
    // EDIT
    playbackRate = playbackRate + 0.0025;
    fastTickingClock.playbackRate = playbackRate;
    console.log(playbackRate);
    // END EDIT
  }
  if (seconds < 0) {
    document.getElementById("progress").style.width = "0%";
    document.getElementById("timer").innerHTML = "0.0";
    document.getElementById("fastTickingClock").pause();
    disableSixtySecondsButton();
    if (seconds > -1) {
      document.getElementById("alarm").play();
    }
  }
  if (seconds < -5.0) {
    clearInterval(interval);
  }
}

document.body.addEventListener("touchstart", function() {
  if (firstAudioSwitch) {
    firstAudioSwitch = false;
    document.getElementById("fastTickingClock").play();
    document.getElementById("fastTickingClock").src="https://raw.githubusercontent.com/davidepgr/burraco-timer/main/assets/audio/fastTickingClock.mp3";
    document.getElementById("alarm").play();
    document.getElementById("alarm").src="https://raw.githubusercontent.com/davidepgr/burraco-timer/main/assets/audio/alarm.mp3";
  }

  if (seconds > 0.0) {
    if (interval) {
    clearInterval(interval);
    }
    // EDIT
    playbackRate = 1;
    // END EDIT
    seconds = secondsSetup;
    progressBarSeconds = progressBarSecondsSetup;
    interval = setInterval(countdown, 100);
    document.getElementById("fastTickingClock").pause();
    document.getElementById("alarm").pause();
    document.getElementById("fastTickingClock").currentTime = 0;
    document.getElementById("alarm").currentTime = 0;
    enableSixtySecondsButton();
  } else {
    if (seconds <= -3.0) {
      if (interval) {
      clearInterval(interval);
      }
      // EDIT
      playbackRate = 1;
      // END EDIT
      seconds = secondsSetup;
      progressBarSeconds = progressBarSecondsSetup;
      interval = setInterval(countdown, 100);
      document.getElementById("fastTickingClock").pause();
      document.getElementById("alarm").pause();
      document.getElementById("fastTickingClock").currentTime = 0;
      document.getElementById("alarm").currentTime = 0;
      enableSixtySecondsButton();
    } else {
    }
  }
});

document.body.addEventListener("mouseup", function() {
  if (firstAudioSwitch) {
    firstAudioSwitch = false;
    document.getElementById("fastTickingClock").play();
    document.getElementById("fastTickingClock").src="https://raw.githubusercontent.com/davidepgr/burraco-timer/main/assets/audio/fastTickingClock.mp3";
    document.getElementById("alarm").play();
    document.getElementById("alarm").src="https://raw.githubusercontent.com/davidepgr/burraco-timer/main/assets/audio/alarm.mp3";
  }

  if (seconds > 0.0) {
    if (interval) {
    clearInterval(interval);
    }
    // EDIT
    playbackRate = 1;
    // END EDIT
    seconds = secondsSetup;
    progressBarSeconds = progressBarSecondsSetup;
    interval = setInterval(countdown, 100);
    document.getElementById("fastTickingClock").pause();
    document.getElementById("alarm").pause();
    document.getElementById("fastTickingClock").currentTime = 0;
    document.getElementById("alarm").currentTime = 0;
    enableSixtySecondsButton();
  } else {
    if (seconds <= -3.0) {
      if (interval) {
      clearInterval(interval);
      }
      // EDIT
      playbackRate = 1;
      // END EDIT
      seconds = secondsSetup;
      progressBarSeconds = progressBarSecondsSetup;
      interval = setInterval(countdown, 100);
      document.getElementById("fastTickingClock").pause();
      document.getElementById("alarm").pause();
      document.getElementById("fastTickingClock").currentTime = 0;
      document.getElementById("alarm").currentTime = 0;
      enableSixtySecondsButton();
    } else {
    }
  }
});

document.body.addEventListener("keydown", function(event) {
if (event.key === " " || event.key === "Enter") {
  if (firstAudioSwitch) {
    firstAudioSwitch = false;
    document.getElementById("fastTickingClock").play();
    document.getElementById("fastTickingClock").src="https://raw.githubusercontent.com/davidepgr/burraco-timer/main/assets/audio/fastTickingClock.mp3";
    document.getElementById("alarm").play();
    document.getElementById("alarm").src="https://raw.githubusercontent.com/davidepgr/burraco-timer/main/assets/audio/alarm.mp3";
  }
  if (seconds > 0.0) {
    if (interval) {
    clearInterval(interval);
    }
    // EDIT
    playbackRate = 1;
    // END EDIT
    seconds = secondsSetup;
    progressBarSeconds = progressBarSecondsSetup;
    interval = setInterval(countdown, 100);
    document.getElementById("fastTickingClock").pause();
    document.getElementById("alarm").pause();
    document.getElementById("fastTickingClock").currentTime = 0;
    document.getElementById("alarm").currentTime = 0;
    enableSixtySecondsButton();
  } else {
    if (seconds <= -3.0) {
      if (interval) {
      clearInterval(interval);
      }
      // EDIT
      playbackRate = 1;
      // END EDIT
      seconds = secondsSetup;
      progressBarSeconds = progressBarSecondsSetup;
      interval = setInterval(countdown, 100);
      document.getElementById("fastTickingClock").pause();
      document.getElementById("alarm").pause();
      document.getElementById("fastTickingClock").currentTime = 0;
      document.getElementById("alarm").currentTime = 0;
      enableSixtySecondsButton();
    } else {
    }
  }
} else if (event.key === "Escape") {
  clearInterval(interval);
  // EDIT
  playbackRate = 1;
  // END EDIT
  seconds = secondsSetup;
  progressBarSeconds = progressBarSecondsSetup;
  document.getElementById("timer").innerHTML = "30";
  document.getElementById("progress").style.width = "100%";
  document.body.style.backgroundColor = "8EFA00";
  document.getElementById("fastTickingClock").pause();
  disableSixtySecondsButton();
} else if (event.key === "p") {
  if (document.getElementById("sixtySecondsDiv").style.pointerEvents === "all") {
    seconds = buttonSecondsSetup;
    progressBarSeconds = buttonProgressBarSecondsSetup;
    disableSixtySecondsButton();
  }
}
});

body.addEventListener("touchstart", (event) => {
  if (event.touches.length === 2) {
    gestureStartTime = new Date().getTime();

    const gestureInterval = setInterval(() => {
      const currentTime = new Date().getTime();
      const gestureDuration = currentTime - gestureStartTime;

      if (gestureDuration >= 2000) {
        clearInterval(gestureInterval);
        clearInterval(interval);
        // EDIT
        playbackRate = 1;
        // END EDIT
        seconds = secondsSetup;
        progressBarSeconds = progressBarSecondsSetup;
        document.getElementById("timer").innerHTML = "30";
        document.getElementById("progress").style.width = "100%";
        document.body.style.backgroundColor = "8EFA00";
        document.getElementById("fastTickingClock").pause();
        disableSixtySecondsButton();
      }
    }, 2000);
  }
});

document.getElementById("sixtySecondsDiv").addEventListener("click", function (event) {
  event.stopPropagation();
  seconds = buttonSecondsSetup;
  progressBarSeconds = buttonProgressBarSecondsSetup;
  disableSixtySecondsButton();
});

function enableSixtySecondsButton() {
  document.getElementById("sixtySecondsDiv").style.background = "#000000";
  document.getElementById("sixtySecondsDiv").style.color = "#ffffff";
  document.getElementById("sixtySecondsDiv").style.pointerEvents = "all";
}

function disableSixtySecondsButton() {
  document.getElementById("sixtySecondsDiv").style.background = "#00000025";
  document.getElementById("sixtySecondsDiv").style.color = "#00000040";
  document.getElementById("sixtySecondsDiv").style.pointerEvents = "none";
}
