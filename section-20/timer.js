class Timer {
  constructor(durationInput, startButton, pauseButton, callbacks) {
    this.durationInput = durationInput
    this.startButton = startButton
    this.pauseButton = pauseButton
    this.intervalId = null

    if (callbacks) {
      this.onStart = callbacks.onStart;
      this.onTick = callbacks.onTick;
      this.onComplete = callbacks.onComplete;
    }

    this.startButton.addEventListener('click', this.start)
    this.pauseButton.addEventListener('click', this.pause)
  }

  start = () => {
    if (!this.intervalId && this.timeRemaining) {
      if (this.onStart) this.onStart()
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
      if (this.onTick) this.onTick()
    } else {
      if (this.onComplete) this.onComplete()
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
