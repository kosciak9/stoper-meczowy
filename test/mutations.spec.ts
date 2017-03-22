import 'mocha'
import { expect } from 'chai'
import mutations from '../src/store/mutations'

const { incrementScore,
        decrementScore,
        updateMode,
        updateTime,
        updateTeam,
        toggleToastShown } = mutations

describe('mutations', () => {
  it('incrementScore of both teams', () => {
    const state = {
      currentMatch: {
        teams: [
          {
            score: 0
          },
          {
            score: 0
          }
        ]
      }
    }
    incrementScore(state, 0)
    expect(state.currentMatch.teams[0].score).to.equal(1)
    incrementScore(state, 1)
    expect(state.currentMatch.teams[1].score).to.equal(1)
  })
  it('decrementScore of both teams', () => {
    const state = {
      currentMatch: {
        teams: [
          {
            score: 0
          },
          {
            score: 0
          }
        ]
      }
    }
    // increment score to 1:0
    incrementScore(state, 0)
    expect(state.currentMatch.teams[0].score).to.equal(1)
    // decrement score to 0:0
    decrementScore(state, 0)
    expect(state.currentMatch.teams[0].score).to.equal(0)
    // decrement score once again, to check if it goes -1
    decrementScore(state, 0)
    expect(state.currentMatch.teams[0].score).to.equal(0)
    // check if it works for both teams
    incrementScore(state, 1)
    decrementScore(state, 1)
    expect(state.currentMatch.teams[0].score).to.equal(0)
  })
  it('updateMode', () => {
    const state = {
      appSettings: {
        trackingMode: 'simple'
      }
    }
    // simple mode
    expect(state.appSettings.trackingMode).to.equal('simple')
    updateMode(state, 'advanced')
    expect(state.appSettings.trackingMode).to.equal('advanced')
  })
  it('updateTime', () => {
    const state = {
      currentMatch: {
        stopwatch: {
          fullTime: 0
        }
      }
    }
    updateTime(state, 2100)
    expect(state.currentMatch.stopwatch.fullTime).to.equal(2100)
  })
  it('updateTeam', () => {
    const state = {
      currentMatch: {
        teams: [
          {
            name: '',
            shorthand: ''
          },
          {
            name: '',
            shorthand: ''
          }
        ]
      }
    }
    // updating only full name
    updateTeam(state, { team: 0, name: 'KS Styropian' })
    expect(state.currentMatch.teams[0].name).to.equal('KS Styropian')
    expect(state.currentMatch.teams[0].shorthand).to.equal('')
    // updating only shorthand
    updateTeam(state, { team: 0, shorthand: 'KSS' })
    expect(state.currentMatch.teams[0].name).to.equal('KS Styropian')
    expect(state.currentMatch.teams[0].shorthand).to.equal('KSS')
    // updating none of the properties
    updateTeam(state, { team: 0 })
    expect(state.currentMatch.teams[0].name).to.equal('KS Styropian')
    expect(state.currentMatch.teams[0].shorthand).to.equal('KSS')
    // updating both properties at once
    updateTeam(state, { team: 0, name: 'Kraków Coast', shorthand: 'KRK' })
    expect(state.currentMatch.teams[0].name).to.equal('Kraków Coast')
    expect(state.currentMatch.teams[0].shorthand).to.equal('KRK')
  })
  it('toggleToastShown', () => {
    const state = {
      appSettings: {
        toastShown: false
      }
    }
    toggleToastShown(state)
    expect(state.appSettings.toastShown).to.be.true
    toggleToastShown(state)
    expect(state.appSettings.toastShown).to.be.false
  })
})
