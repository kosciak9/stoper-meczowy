import 'mocha'
import { expect } from 'chai'
import mutations from '../../src/store/mutations'
import generateState from './generate.random.state'

const { startStopwatch,
        tickStopwatch,
        stopStopwatch,
        resetStopwatch } = mutations

describe('testing all the stopwatch mutations', () => {
  it('start the stopwatch', () => {
    const state = generateState()
    startStopwatch(state, 1)
    expect(state.currentMatch.stopwatch.stopwatchRunning).to.be.true
    expect(state.currentMatch.stopwatch.stopwatchToken).to.equal(1)
  })

  it('tick the stopwatch', () => {
    const state = generateState()
    let remainingTime = state.currentMatch.stopwatch.remainingTime
    tickStopwatch(state)
    expect(state.currentMatch.stopwatch.remainingTime).to.be.equal(remainingTime - 1)
  })

  it('stop the time', () => {
    const state = generateState()
    stopStopwatch(state)
    expect(state.currentMatch.stopwatch.stopwatchRunning).to.be.false
    expect(state.currentMatch.stopwatch.stopwatchToken).to.be.null
  })

  it('reset the time', () => {
    const state = generateState()
    resetStopwatch(state)
    let fullTime = state.currentMatch.stopwatch.fullTime
    expect(state.currentMatch.stopwatch.remainingTime).to.be.equal(fullTime)
    expect(state.currentMatch.stopwatch.stopwatchToken).to.be.null
    expect(state.currentMatch.stopwatch.stopwatchRunning).to.be.false
  })
})
