export interface stopwatch {
  remainingTime: number,
  fullTime: number,
  stopwatchRunning: boolean,
  stopwatchToken: any
}

export interface appSettings {
  trackingMode?: string,
  toastShown?: boolean
}

export interface team {
  name?: string,
  shorthand?: string,
  score: number
}

export interface currentMatch {
  stopwatch: stopwatch,
  teams: team[]
}

export interface state {
  currentMatch: currentMatch,
  appSettings: appSettings
}
