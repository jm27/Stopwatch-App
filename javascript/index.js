const containerElement = document.querySelector(".container");
const createNewButton = document.querySelector(".create-new");
//Stopwatch constructor
function StopWatch(stopWatch) {
  this.stopWatch = stopWatch;
  //set times
  this.m = 0;
  this.s = 0;
  this.ms = 0;
  this.pause = false;
  this.time;
  //select elements we need
  this.timer = stopWatch.querySelector(".timer");
  this.startButton = stopWatch.querySelector(".start");
  this.pauseButton = stopWatch.querySelector(".pause");
  this.resumeButton = stopWatch.querySelector(".resume");
  this.resetButton = stopWatch.querySelector(".reset");
  // bind our methods to the instance when we need them
  this.startTimer = this.startTimer.bind(this);
  this.pauseTimer = this.pauseTimer.bind(this);
  this.resumeTimer = this.resumeTimer.bind(this);
  this.resetTimer = this.resetTimer.bind(this);
  //when clicked do
  this.startButton.addEventListener("click", this.startTimer);
  this.pauseButton.addEventListener("click", this.pauseTimer);
  this.resumeButton.addEventListener("click", this.resumeTimer);
  this.resetButton.addEventListener("click", this.resetTimer);
}
//Prototypes
//Start the timer
StopWatch.prototype.startTimer = function () {
  console.log("hello");

  //If time is not running startTimer else do nothing, set pause to false
  !this.time ? (this.time = setInterval(this.shine.bind(this), [100])) : ""; // if timer is set already it should not be initialize again!
  this.pause = false;
};
//Timer is running do the following
StopWatch.prototype.shine = function () {
  //Display timer
  this.timer.textContent = this.displayTime();
  console.log(this.displayTime());
  this.ms = this.ms + 1;
  //if milliseconds equal 10 add a second else do nothing
  this.ms == 10 ? ((this.ms = 0), this.s++) : "";
  //if seconds equal 60 add a minute else do nothing
  this.s == 60 ? ((this.s = 0), this.m++) : "";
};

//Stop timer
StopWatch.prototype.stopTimer = function () {
  //Stop timer and set time to false
  clearInterval(this.time);
  this.time = false;
};
//Pause the timer
StopWatch.prototype.pauseTimer = function () {
  this.stopTimer();
  this.pause = true;
};
//Resume timer
StopWatch.prototype.resumeTimer = function () {
  console.log(this.pause);

  this.pause ? this.startTimer() : "";
};
//Reset timer
StopWatch.prototype.resetTimer = function () {
  this.stopTimer();
  [this.m, this.s, this.ms] = [0, 0, 0];
  this.timer.textContent = this.displayTime();
};
//Display timer
StopWatch.prototype.displayTime = function () {
  return (
    (this.m < 10 ? "0" + this.m : this.m) +
    ":" +
    (this.s < 10 ? "0" + this.s : this.s) +
    "." +
    (this.ms < 10 ? "0" + this.ms : this.ms)
  );
};
// Create new StopWatch
const stopWatchOne = new StopWatch(document.querySelector(".stopWatch1"));
//
let n = 2;
const createStopWatch = function () {
  // StopWatch HTML
  let stopWatchElements = ` <div class="stopWatch stopWatch${n}">
    <span class="timer new-timer">00:00.00</span>
    <div class="btns btns-grid">
      <button class="start btns start2" >Start</button>
      <button class="pause btns pause2">
        Pause
      </button>
      <button class="resume btns resume2">
        Resume
      </button>
      <button class="reset btns reset2">Reset</button>
    </div>`;
  //Insert into stopWatch Div
  containerElement.insertAdjacentHTML("afterBegin", stopWatchElements);
  let timerSelector = document.querySelector(`.stopWatch${n}`);
  let array = [];
  array.push(new StopWatch(timerSelector));
  n++;
};
//on click create new stopwatch
createNewButton.addEventListener("click", createStopWatch);

console.log(stopWatchOne);