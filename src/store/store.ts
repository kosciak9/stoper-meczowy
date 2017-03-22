import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    currentMatch: {
      timeline: [
      ],
      teams: [
        {
          shorthand: '',
          name: '',
          score: 0
        },
        {
          shorthand: '',
          name: '',
          score: 0
        }
      ],
      stopwatch: {
        stopwatchToken: null,
        stopwatchRunning: false,
        remainingTime: 2100,
        fullTime: 2100
      }
    },
    appSettings: {
      trackingMode: 'simple',
      toastShown: false
    }
  },
  mutations,
  actions,
  getters
})

export default store
