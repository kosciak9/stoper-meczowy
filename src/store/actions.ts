const actions = {
  start: ({ commit, state }: { commit: any, state: any }) => {
    let interval = setInterval(() => {
      if (state.currentMatch.stopwatch.remainingTime > 0) {
        commit('tickStopwatch')
      }
      else {
        commit('stopStopwatch')
      }
    }, 1000)

    commit('startStopwatch', interval)
  },
  stop: ({ commit }: { commit: any, state: any }) => commit('stopStopwatch'),
  reset: ({ commit }: { commit: any, state: any }) => commit('resetStopwatch')
}

export default actions
