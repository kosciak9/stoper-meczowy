import { state } from '../../src/store/state.interface'

function randomInteger(top: number) {
  return Math.floor(Math.random() * top)
}

function randomString(length: number) {
  let randomString = ''
  const randomChar = function () {
      const n = Math.floor(Math.random() * 61)
      if (n < 9) return n //0-11
      if (n < 35) return String.fromCharCode(n + 54) //A-Z
      return String.fromCharCode(n + 60) //a-z
  }
  while (length--) randomString += randomChar();
  return randomString;
}

function generateState() {
  const randomValues: state = {
    currentMatch: {
      stopwatch: {
        remainingTime: randomInteger(2700),
        fullTime: randomInteger(2700),
        stopwatchRunning: Boolean(randomInteger(5) > randomInteger(5)),
        stopwatchToken: null
      },
      teams: [
        {
          name: randomString(randomInteger(15)),
          shorthand: randomString(randomInteger(3)),
          score: randomInteger(100) + 3
        },
        {
          name: randomString(randomInteger(15)),
          shorthand: randomString(randomInteger(3)),
          score: randomInteger(100) + 3
        }
      ]
    },
    appSettings: {
      trackingMode: Boolean(randomInteger(5) > randomInteger(5)) ? 'simple' : 'advanced',
      settingsToastShown: Boolean(randomInteger(5) > randomInteger(5))
    }
  }
  return randomValues
}

export default generateState
