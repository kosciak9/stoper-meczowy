import * as stopwatch from './stopwatch.actions'

const actions = {
  start: ({ commit, state }: { commit: any, state: any }) => {
    let interval = setInterval(() => {
      if (state.currentMatch.stopwatch.remainingTime > 0) {
        commit(stopwatch.TICK)
      }
      else {
        commit(stopwatch.STOP)
      }
    }, 1000)

    commit(stopwatch.START, interval)
  },
  stop: ({ commit }: { commit: any, state: any }) => commit(stopwatch.STOP),
  reset: ({ commit }: { commit: any, state: any }) => commit(stopwatch.RESET)
}

export default actions
