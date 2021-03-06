class Timer {
  time = {
    second: 1000,
    minute: this.second * 60,
  }

  constructor(durationInput, startButton, pauseButton) {
    this.duractionInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;
    
    this.startButton.addEventListener('click', this.start);
    this.pauseButton.addEventListener('click', this.pause);
  }
  
  start = () => {
    this.tick();
    this.timerId = setInterval(this.tick, 1000);
  }
  
  pause = () => {
    clearInterval(this.timerId);
  }
  
  tick = () => {
    console.log('tick');
  }
}

const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

const timer = new Timer(durationInput, startButton, pauseButton);

