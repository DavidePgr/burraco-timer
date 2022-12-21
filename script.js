var firstAudioSwitch = true;
  var seconds = 30.9;
  var interval;
  var progressBarSeconds = 30.9;
  
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
    }
    if (seconds < 0) {
      document.getElementById("progress").style.width = "0%";
      document.getElementById("timer").innerHTML = "0.0";
      document.getElementById("fastTickingClock").pause();
      if (seconds > -1) {
        document.getElementById("alarm").play();
      }
    }
  }
  
  document.body.addEventListener("click", function() {
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
      seconds = 30.9;
      progressBarSeconds = 30.9;
      interval = setInterval(countdown, 100);
      document.getElementById("fastTickingClock").pause();
      document.getElementById("alarm").pause();
      document.getElementById("fastTickingClock").currentTime = 0;
      document.getElementById("alarm").currentTime = 0;
    } else {
      if (seconds <= -3.0) {
        if (interval) {
        clearInterval(interval);
        }
        seconds = 30.9;
        progressBarSeconds = 30.9;
        interval = setInterval(countdown, 100);
        document.getElementById("fastTickingClock").pause();
        document.getElementById("alarm").pause();
        document.getElementById("fastTickingClock").currentTime = 0;
        document.getElementById("alarm").currentTime = 0;
      } else {
      }
    }
  });

  document.body.addEventListener("keydown", function(event) {
    if (firstAudioSwitch) {
      firstAudioSwitch = false;
      document.getElementById("fastTickingClock").play();
      document.getElementById("fastTickingClock").src="https://raw.githubusercontent.com/davidepgr/burraco-timer/main/assets/audio/fastTickingClock.mp3";
      document.getElementById("alarm").play();
      document.getElementById("alarm").src="https://raw.githubusercontent.com/davidepgr/burraco-timer/main/assets/audio/alarm.mp3";
    }

  if (event.key === " " || event.key === "Enter") {
    if (seconds > 0.0) {
      if (interval) {
      clearInterval(interval);
      }
      seconds = 30.9;
      progressBarSeconds = 30.9;
      interval = setInterval(countdown, 100);
      document.getElementById("fastTickingClock").pause();
      document.getElementById("alarm").pause();
      document.getElementById("fastTickingClock").currentTime = 0;
      document.getElementById("alarm").currentTime = 0;
    } else {
      if (seconds <= -3.0) {
        if (interval) {
        clearInterval(interval);
        }
        seconds = 30.9;
        progressBarSeconds = 30.9;
        interval = setInterval(countdown, 100);
        document.getElementById("fastTickingClock").pause();
        document.getElementById("alarm").pause();
        document.getElementById("fastTickingClock").currentTime = 0;
        document.getElementById("alarm").currentTime = 0;
      } else {
      }
    }
  }
});