import { state, appSettings, currentMatch } from './state.interface'

const mutations = {
  tickStopwatch (state: state) {
    state.currentMatch.stopwatch.remainingTime -= 1
  },

  startStopwatch (state: state, stopwatchToken: number) {
    state.currentMatch.stopwatch.stopwatchRunning = true
    state.currentMatch.stopwatch.stopwatchToken = stopwatchToken
  },

  stopStopwatch (state: state) {
    clearInterval(state.currentMatch.stopwatch.stopwatchToken)
    state.currentMatch.stopwatch.stopwatchToken = null
    state.currentMatch.stopwatch.stopwatchRunning = false
  },

  resetStopwatch (state: state) {
    clearInterval(state.currentMatch.stopwatch.stopwatchToken)
    state.currentMatch.stopwatch.stopwatchToken = null
    state.currentMatch.stopwatch.stopwatchRunning = false
    let fullTime = state.currentMatch.stopwatch.fullTime
    state.currentMatch.stopwatch.remainingTime = fullTime
  },

  // finishStopwatch (state: state) {
  //   console.log(state)
  // },

  updateTrackingMode (state: state, value: string) {
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

  updateFullTime (state: state, value: number) {
    state.currentMatch.stopwatch.fullTime = value
  },

  addExtraTime (state:state, value: number) {
    state.currentMatch.stopwatch.remainingTime += value
  },

  updateTeam (state: state, value: { team: number, name?: string, shorthand?: string}) {
    if (value.name) state.currentMatch.teams[value.team].name = value.name
    if (value.shorthand)
      state.currentMatch.teams[value.team].shorthand = value.shorthand
  },

  toggleSettingsToastShown (state: state) {
    state.appSettings.settingsToastShown = !state.appSettings.settingsToastShown
  },

  toggleMatchToastShown (state: state) {
    state.appSettings.matchToastShown = !state.appSettings.matchToastShown
  },

  loadStateFromStorage(state: state,
                       value: {
                         currentMatch: currentMatch,
                         appSettings: appSettings }) {
    state.currentMatch = value.currentMatch
    state.appSettings = value.appSettings
    state.appSettings.matchToastShown = true
    state.appSettings.settingsToastShown = true
  }

}

export default mutations
