<template>
  <div>
    <result-view
      :result="result"
      :time="time">
    </result-view>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import ResultView from './View.vue'

  @Component({
    components: {
      ResultView
    }
  })
  export default class ResultContainer extends Vue {
    get time() {
      return this.$store.getters.currentTime
    }
    get result() {
      return {
        teamOne: this.$store.state.currentMatch.teams[0],
        teamTwo: this.$store.state.currentMatch.teams[1]
      }
    }
  }
</script>
