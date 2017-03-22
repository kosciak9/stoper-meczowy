import * as stopwatch from './stopwatch-actions'

const mutations = {
  [stopwatch.TICK] (state: any) {
    state.currentMatch.stopwatch.remainingTime--
  },

  [stopwatch.START] (state: any, stopwatchToken: number) {
    state.currentMatch.stopwatch.stopwatchRunning = true
    state.currentMatch.stopwatch.stopwatchToken = stopwatchToken
  },

  [stopwatch.STOP] (state: any) {
    clearInterval(state.currentMatch.stopwatch.stopwatchToken)

    state.currentMatch.stopwatch.stopwatchToken = null
    state.currentMatch.stopwatch.stopwatchRunning = false
  },

  [stopwatch.RESET] (state: any) {
    clearInterval(state.currentMatch.stopwatch.stopwatchToken)
    state.currentMatch.stopwatch.stopwatchToken = null
    state.currentMatch.stopwatch.stopwatchRunning = false
    let fullTime = state.currentMatch.stopwatch.fullTime
    state.currentMatch.stopwatch.remainingTime = fullTime
  },

  [stopwatch.FINISH] (state: any) {
  },

  updateMode (state: any, value: string) {
    state.appSettings.trackingMode = value
  },

  incrementScore (state: any, value: number) {
    state.currentMatch.teams[value].score++
  },

  decrementScore (state: any, value: number) {
    if (state.currentMatch.teams[value].score > 0) {
      state.currentMatch.teams[value].score--
    }
  },

  updateTime (state: any, value: number) {
    state.currentMatch.stopwatch.fullTime = value
  },

  updateTeam (state: any, value: { team: number, name?: string, shorthand?: string}) {
    if (value.name) state.currentMatch.teams[value.team].name = value.name
    if (value.shorthand) state.currentMatch.teams[value.team].shorthand = value.shorthand
  },

  toggleToastShown (state: any) {
    state.appSettings.toastShown = !state.appSettings.toastShown
  },

  loadStateFromStorage(state: any, value: { currentMatch: object,
                                            appSettings: object,
                                            stopwatch: object
                                          }) {
    state.currentMatch = value.currentMatch
    state.appSettings = value.appSettings
    state.stopwatch = value.stopwatch
  }

}

export default mutations
