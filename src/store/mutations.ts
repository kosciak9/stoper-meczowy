import * as stopwatch from './stopwatch-actions'

interface stopwatch {
  remainingTime: number,
  fullTime: number,
  stopwatchRunning: boolean,
  stopwatchToken: any
}

interface appSettings {
  trackingMode: string,
  toastShown: boolean
}

interface team {
  name: string,
  shorthand: string,
  score: number
}

interface currentMatch {
  stopwatch: stopwatch,
  teams: team[]
}

interface state {
  currentMatch: currentMatch,
  appSettings: appSettings
}

const mutations = {
  [stopwatch.TICK] (state: state) {
    state.currentMatch.stopwatch.remainingTime--
  },

  [stopwatch.START] (state: state, stopwatchToken: number) {
    state.currentMatch.stopwatch.stopwatchRunning = true
    state.currentMatch.stopwatch.stopwatchToken = stopwatchToken
  },

  [stopwatch.STOP] (state: state) {
    clearInterval(state.currentMatch.stopwatch.stopwatchToken)

    state.currentMatch.stopwatch.stopwatchToken = null
    state.currentMatch.stopwatch.stopwatchRunning = false
  },

  [stopwatch.RESET] (state: state) {
    clearInterval(state.currentMatch.stopwatch.stopwatchToken)
    state.currentMatch.stopwatch.stopwatchToken = null
    state.currentMatch.stopwatch.stopwatchRunning = false
    let fullTime = state.currentMatch.stopwatch.fullTime
    state.currentMatch.stopwatch.remainingTime = fullTime
  },

  [stopwatch.FINISH] (state: state) {
    console.log(state)
  },

  updateMode (state: state, value: string) {
    state.appSettings.trackingMode = value
  },

  incrementScore (state: state, value: number) {
    state.currentMatch.teams[value].score++
  },

  decrementScore (state: state, value: number) {
    if (state.currentMatch.teams[value].score > 0) {
      state.currentMatch.teams[value].score--
    }
  },

  updateTime (state: state, value: number) {
    state.currentMatch.stopwatch.fullTime = value
  },

  updateTeam (state: state, value: { team: number, name?: string, shorthand?: string}) {
    if (value.name) state.currentMatch.teams[value.team].name = value.name
    if (value.shorthand) state.currentMatch.teams[value.team].shorthand = value.shorthand
  },

  toggleToastShown (state: state) {
    state.appSettings.toastShown = !state.appSettings.toastShown
  },

  loadStateFromStorage(state: state,
                       value: {
                         currentMatch: currentMatch,
                         appSettings: appSettings }) {
    state.currentMatch = value.currentMatch
    state.appSettings = value.appSettings
  }

}

export default mutations
