<template>
  <div class="buttons-group">
    <button @click="incrementScore(0)" class="primary push full-width">
      {{ teamOneName }} scored
    </button>
    <button @click="incrementScore(1)" class="secondary push full-width">
      {{ teamTwoName }} scored
    </button>
    <button v-if="stopwatchRunning" @click="stop" class="warning push full-width">
      Pause the time
    </button>
    <button v-else @click="start" class="warning push full-width">
      Start the time
    </button>

    <q-context-menu ref="context">
      <div
        class="list highlight"
        style="min-width: 150px; max-height: 300px;"
      >
        <div
          class="item item-link two-lines item-delimiter"
          @click="decrementScore(0), $refs.context.close()"
        >
          <div class="item-content">
            <div>Remove {{ teamOneName }} Goal</div>
            <div>Lowers the score</div>
          </div>
        </div>
        <div
          class="item item-link two-lines item-delimiter"
          @click="decrementScore(1), $refs.context.close()"
        >
          <div class="item-content">
            <div>Remove {{ teamTwoName }} Goal</div>
            <div>Lowers the score</div>
          </div>
        </div>
        <div
          class="item item-link two-lines item-delimiter"
          @click="reset(), $refs.context.close()"
        >
          <div class="item-content">
            <div>Restart the stopwatch</div>
            <div>Brings time back to the 00:00</div>
          </div>
        </div>
      </div>
    </q-context-menu>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'

  @Component({
    props: {
      teamOneName: String,
      teamTwoName: String
    }
  })
  export default class  extends Vue {
    get stopwatchRunning() {
      return this.$store.state.currentMatch.stopwatch.stopwatchRunning
    }

    start() {
      this.$store.dispatch('start')
    }
    stop() {
      this.$store.dispatch('stop')
    }
    reset() {
      this.$store.dispatch('reset')
    }
    incrementScore(team: Number) {
      this.$store.commit('incrementScore', team)
    }
    decrementScore(team: Number) {
      this.$store.commit('decrementScore', team)
    }
  }
</script>

<style lang="stylus" scoped>
.buttons-group
  > .push
    margin 5px
</style>
