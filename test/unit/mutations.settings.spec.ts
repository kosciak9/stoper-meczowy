import 'mocha'
import { expect } from 'chai'
import mutations from '../../src/store/mutations'
import generateState from './generate.random.state'

const { incrementScore,
        decrementScore,
        updateTrackingMode,
        updateFullTime,
        updateTeam,
        toggleSettingsToastShown } = mutations

describe('currentMatch and appSettings mutations, without stopwatch', () => {
  it('incrementScore of both teams', () => {
    const state = generateState()
    let currentTeam0Score = state.currentMatch.teams[0].score
    let currentTeam1Score = state.currentMatch.teams[1].score
    incrementScore(state, 0)
    expect(state.currentMatch.teams[0].score).to.equal(currentTeam0Score + 1)
    incrementScore(state, 1)
    expect(state.currentMatch.teams[1].score).to.equal(currentTeam1Score + 1)
  })
  it('decrementScore of both teams', () => {
    let state = generateState()
    let currentTeam0Score = state.currentMatch.teams[0].score
    let currentTeam1Score = state.currentMatch.teams[1].score
    decrementScore(state, 0)
    expect(state.currentMatch.teams[0].score).to.equal(currentTeam0Score - 1)
    decrementScore(state, 1)
    expect(state.currentMatch.teams[1].score).to.equal(currentTeam1Score - 1)
    state.currentMatch.teams[0].score = 0
    state.currentMatch.teams[1].score = 0
    // decrement score when it's 0:0, to check if it goes -1
    decrementScore(state, 0)
    decrementScore(state, 1)
    expect(state.currentMatch.teams[0].score).to.equal(0)
    expect(state.currentMatch.teams[1].score).to.equal(0)
  })
  it('updateTrackingMode', () => {
    const state = generateState()
    // simple mode
    expect(state.appSettings.trackingMode).to.be.oneOf(['simple', 'advanced'])
    updateTrackingMode(state, 'advanced')
    expect(state.appSettings.trackingMode).to.equal('advanced')
    updateTrackingMode(state, 'simple')
    expect(state.appSettings.trackingMode).to.equal('simple')
  })
  it('updateFullTime', () => {
    const state = generateState()
    updateFullTime(state, 2100)
    expect(state.currentMatch.stopwatch.fullTime).to.equal(2100)
  })
  it('updateTeam', () => {
    const state = generateState()
    // updating only full name
    updateTeam(state, { team: 0, name: 'KS Styropian' })
    expect(state.currentMatch.teams[0].name).to.equal('KS Styropian')
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
    const state = generateState()
    let status = state.appSettings.settingsToastShown
    toggleSettingsToastShown(state)
    if (status) {
      expect(state.appSettings.settingsToastShown).to.be.false
    }
    else {
      expect(state.appSettings.settingsToastShown).to.be.true
    }
  })
})
