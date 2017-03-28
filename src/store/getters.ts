import { state } from './state.interface'

const getters = {

  teamName: (state: state) => (id: number) => {
    return state.currentMatch.teams[id].name
  },

  currentTime: (state: state) => {
    let remainingTime = state.currentMatch.stopwatch.remainingTime
    let fullTime = state.currentMatch.stopwatch.fullTime
    let time = fullTime - remainingTime
    let minutes = Math.floor(time / 60)
    let minutes_string = ''
    let seconds = time - minutes * 60
    let seconds_string = ''
    if (minutes === 0) {
      minutes_string = '00'
    }
    else if (minutes < 10) {
      minutes_string = '0' + minutes
    }
    else {
      minutes_string = String(minutes)
    }
    if (seconds === 0) {
      seconds_string = '00'
    }
    else if (seconds < 10) {
      seconds_string = '0' + seconds
    }
    else {
      seconds_string = String(seconds)
    }
    return `${minutes_string}:${seconds_string}`
  },

  isStopwatchAtZero: (state: state) => {
    let remainingTime = state.currentMatch.stopwatch.remainingTime
    let fullTime = state.currentMatch.stopwatch.fullTime
    return fullTime === remainingTime
  },

  isStopwatchRunning: (state: state) => {
    return state.currentMatch.stopwatch.stopwatchRunning
  },

  lessThanMinuteToFinish: (state: state) => {
    const stopwatch = state.currentMatch.stopwatch
    const timeIsLessThanOneMinute = (stopwatch.remainingTime < 150)
    const itsNotFinishYet = (stopwatch.remainingTime !== 0)
    return (timeIsLessThanOneMinute && itsNotFinishYet)
  }
}

export default getters
