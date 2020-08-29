const speed = document.querySelector(".speed");
const bar = speed.querySelector(".speed-bar");
const video = document.querySelector(".flex");

function handleMove(e) {
  //find position of mouse over scroll
  const y = e.pageY - this.offsetTop;
  const percent = y / this.offsetHeight;
  //find percentage of scroll on bar
  const min = 0.4;
  const max = 4.0;
  const height = Math.round(percent * 100) + "%";
  const playbackRate = percent * (max - min) + min;
  //style bar in accordance with percentage
  bar.style.height = height;
  bar.textContent = playbackRate.toFixed(1) + "x";
  //connect video playback rate to rate set by the bar
  video.playbackRate = playbackRate;
}

speed.addEventListener("mousemove", handleMove);
