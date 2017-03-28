<template>
  <div class="buttons-group">
    <button @click="incrementScore(0)" class="primary push full-width">
      {{ teamOneName }} scored
    </button>
    <button @click="incrementScore(1)" class="secondary push full-width">
      {{ teamTwoName }} scored
    </button>
    <button v-if="isStopwatchRunning" @click="stop" class="warning push full-width">
      Pause the time
    </button>
    <button v-else @click="start" class="warning push full-width">
      Start the time
    </button>

    <transition name="fade">
      <div class="extratime-buttons" v-if="lessThanMinuteToFinish">
        <button @click="addExtraTime(1)" class="negative push full-width">
          1 minute extra time
        </button>
        <button @click="addExtraTime(3)" class="negative push full-width">
          3 minute extra time
        </button>
        <button @click="$refs.extraTimeModal.open()" class="negative push full-width">
          Custom amount of extra time
        </button>
      </div>
    </transition>

    <q-modal ref="extraTimeModal"
      class="minimized"
      :content-css="{ padding: '25px', textAlign: 'center' }">
      <h6>Extra Time</h6>
      <div class="padding">
        <q-knob
          v-model="extraTime"
          :min="1"
          :max="10"
        ></q-knob>
      </div>
      <button class="primary"
        @click="addExtraTime(extraTime)">
        Add
      </button>
      <button class="secondary" @click="$refs.extraTimeModal.close()">
        Close
      </button>
    </q-modal>

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
      teamTwoName: String,
      isStopwatchRunning: Boolean,
      lessThanMinuteToFinish: Boolean
    }
  })
  export default class ButtonsView extends Vue {
    extraTime = 1

    start() {
      this.$store.dispatch('start')
    }
    stop() {
      this.$store.dispatch('stop')
    }
    reset() {
      this.$store.dispatch('reset')
    }
    addExtraTime(minutes: number) {
      this.$store.commit('addExtraTime', minutes * 60)
      const hello: any = this.$refs.extraTimeModal
      hello.close()
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
.buttons-group, .extratime-buttons
  > .push
    margin 5px
.padding
  padding 10px
</style>
