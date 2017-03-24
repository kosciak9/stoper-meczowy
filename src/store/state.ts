const state = {
  appSettings: {
    settingsToastShown: false,
    matchToastShown: false,
    trackingMode: 'simple'
  },
  currentMatch: {
    teams: [
      {
        name: '',
        shorthand: '',
        score: 0
      },
      {
        name: '',
        shorthand: '',
        score: 0
      }
    ],
    stopwatch: {
      fullTime: 2100,
      remainingTime: 2100
    }
  }
}

export default state
