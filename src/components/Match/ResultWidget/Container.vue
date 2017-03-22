<template>
  <div>
    <result-view
      :result="result"
      :time="time">
    </result-view>
  </div>
</template>

<script>
  import ResultView from './View'
  export default {
    computed: {
      result: function () {
        return {
          teamOne: this.$store.state.currentMatch.teams[0],
          teamTwo: this.$store.state.currentMatch.teams[1]
        }
      },
      time: function () {
        let remainingTime = this.$store.state.currentMatch.stopwatch.remainingTime
        let fullTime = this.$store.state.currentMatch.stopwatch.fullTime
        let time = fullTime - remainingTime
        let minutes = Math.floor(time / 60)
        let seconds = time - minutes * 60
        if (minutes === 0) {
          minutes = '00'
        }
        else if (minutes < 10) {
          minutes = '0' + minutes
        }
        if (seconds === 0) {
          seconds = '00'
        }
        else if (seconds < 10) {
          seconds = '0' + seconds
        }
        return `${minutes}:${seconds}`
      }
    },
    components: {
      ResultView
    }
  }
</script>
