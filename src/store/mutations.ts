import * as stopwatch from './stopwatch.actions'
import { state, appSettings, currentMatch } from './state.interface'

const mutations = {
  [stopwatch.TICK] (state: state) {
    if (state.currentMatch)
      state.currentMatch.stopwatch.remainingTime--
  },

  [stopwatch.START] (state: state, stopwatchToken: number) {
    if (state.currentMatch) {
      state.currentMatch.stopwatch.stopwatchRunning = true
      state.currentMatch.stopwatch.stopwatchToken = stopwatchToken
    }
  },

  [stopwatch.STOP] (state: state) {
    if (state.currentMatch) {
      clearInterval(state.currentMatch.stopwatch.stopwatchToken)

      state.currentMatch.stopwatch.stopwatchToken = null
      state.currentMatch.stopwatch.stopwatchRunning = false
    }
  },

  [stopwatch.RESET] (state: state) {
    if (state.currentMatch) {
      clearInterval(state.currentMatch.stopwatch.stopwatchToken)
      state.currentMatch.stopwatch.stopwatchToken = null
      state.currentMatch.stopwatch.stopwatchRunning = false
      let fullTime = state.currentMatch.stopwatch.fullTime
      state.currentMatch.stopwatch.remainingTime = fullTime
    }
  },

  [stopwatch.FINISH] (state: state) {
    console.log(state)
  },

  updateTrackingMode (state: state, value: string) {
    if (state.appSettings) {
      state.appSettings.trackingMode = value
    }
  },

  incrementScore (state: state, value: number) {
    if (state.currentMatch) {
      state.currentMatch.teams[value].score++
    }
  },

  decrementScore (state: state, value: number) {
    if (state.currentMatch) {
      if (state.currentMatch.teams[value].score > 0) {
        state.currentMatch.teams[value].score--
      }
    }
  },

  updateFullTime (state: state, value: number) {
    if (state.currentMatch) {
      state.currentMatch.stopwatch.fullTime = value
    }
  },

  updateTeam (state: state, value: { team: number, name?: string, shorthand?: string}) {
    if (state.currentMatch) {
      if (value.name) state.currentMatch.teams[value.team].name = value.name
      if (value.shorthand)
        state.currentMatch.teams[value.team].shorthand = value.shorthand
    }
  },

  toggleSettingsToastShown (state: state) {
    if (state.appSettings) {
      state.appSettings.settingsToastShown = !state.appSettings.settingsToastShown
    }
  },

  toggleMatchToastShown (state: state) {
    if (state.appSettings) {
      state.appSettings.matchToastShown = !state.appSettings.matchToastShown
    }
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
