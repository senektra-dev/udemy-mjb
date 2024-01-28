class Timer {
  constructor(durationInput, startButton, pauseButton) {
    this.durationInput = durationInput
    this.startButton = startButton
    this.pauseButton = pauseButton
    this.intervalId = null

    this.startButton.addEventListener('click', this.start)
    this.pauseButton.addEventListener('click', this.pause)
  }

  start = () => {
    if (!this.intervalId && this.timeRemaining) {
      this.tick()
      this.intervalId = setInterval(this.tick, 1000)
    }
  }

  pause = () => {
    clearInterval(this.intervalId)
    this.intervalId = null
  }

  tick = () => {
    if (this.timeRemaining) {
      this.timeRemaining = this.timeRemaining - 1
    } else {
      this.pause()
    }
  }

  get timeRemaining() {
    return parseFloat(this.durationInput.value)
  }

  set timeRemaining(val) {
    this.durationInput.value = val
  }
}

const durationInput = document.querySelector('#duration')
const startButton = document.querySelector('#start')
const pauseButton = document.querySelector('#pause')

const timer = new Timer(durationInput, startButton, pauseButton)
