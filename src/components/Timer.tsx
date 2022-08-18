import React from 'react';

export function Timer(): JSX.Element {
  return (
    <div className="timer">
      <label htmlFor="" className="minutes"></label>
      <span className="span">:</span>
      <label htmlFor="" className="seconds"></label>
      <button className="pause-btn"></button>
      <button className="play-btn"></button>
    </div>
  );
}

// export function handleTimerPause(e) {
//   isPaused = true;
//   document.querySelector(".pause-btn").classList.add("inactive");
//   document.querySelector(".play-btn").classList.remove("inactive");
//   e.preventDefault();
//   document
//     .querySelectorAll(".grid-cell")
//     .forEach((elem) => elem.classList.add("hidden"));
// }

// function setTimeValue(totalSeconds) {
//   let timeValue = totalSeconds + "";
//   if (timeValue.length < 2) {
//     return "0" + timeValue;
//   }
//   return timeValue;
// }

// let totalSeconds = 0;
// let isPaused = false;

// setInterval(function () {
//   if (!isPaused) {
//     setTime();
//   }
// }, 1000);

// function setTime() {
//   let secondsLabel = document.querySelector(".seconds");
//   let minutesLabel = document.querySelector(".minutes");
//   totalSeconds++;
//   secondsLabel.innerHTML = setTimeValue(totalSeconds % 60);
//   minutesLabel.innerHTML = setTimeValue(Math.floor(totalSeconds / 60));
// }
