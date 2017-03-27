<template>
  <div class="list">
    <div class="list-label">Part length</div>
    <div class="item two-lines">
      <q-tooltip :disable="!stopwatchRunning" anchor="top middle" self="center middle">
        <!-- <div class="list item-delimiter highlight"> -->
          <!-- <div
            class="item item-link"
            @click="$refs.popover.close()"
          > -->
            Stop and reset the stopwatch to change match length!
          <!-- </div> -->
        <!-- </div> -->
      </q-tooltip>
      <div class="item-primary">{{ fullTime }}</div>
      <div class="item-content">
        <q-range v-model="fullTime"
          :min="1" :max="50" @input="setFullTime" label
          :disable="stopwatchRunning"
        >
        </q-range>
      </div>
    </div>
    <div class="list-label">First team name</div>
    <div class="item two-lines">
      <i class="item-primary">edit</i>
      <div class="item-content">
        <input class="full-width"
          maxlength="3"
          v-model="firstTeam.shorthand"
          @input="updateFirstTeamShorthand"
          placeholder="3 letter shorthand"
        >
      </div>
    </div>
    <div class="item two-lines">
      <i class="item-primary">edit</i>
      <div class="item-content">
        <input class="full-width"
          v-model="firstTeam.name"
          @input="updateFirstTeamName"
          placeholder="Full team's name"
        >
      </div>
    </div>
    <div class="list-label">Second team name</div>
    <div class="item two-lines">
      <i class="item-primary">edit</i>
      <div class="item-content">
        <input class="full-width"
          maxlength="3"
          v-model="secondTeam.shorthand"
          @input="updateSecondTeamShorthand"
          placeholder="3 letter shorthand"
        >
      </div>
    </div>
    <div class="item two-lines">
      <i class="item-primary">edit</i>
      <div class="item-content">
        <input class="full-width"
          v-model="secondTeam.name"
          @input="updateSecondTeamName"
          placeholder="Full team's name"
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import { Toast } from 'quasar'

  @Component({})
  export default class MatchSettings extends Vue {
    get stopwatchRunning() {
      const stopwatch = this.$store.state.currentMatch.stopwatch
      const isRunning = stopwatch.stopwatchRunning
      const isBeforeReset = !this.$store.getters.isStopwatchAtZero
      return isRunning && isBeforeReset
    }
    get fullTime () {
      return this.$store.state.currentMatch.stopwatch.fullTime / 60
    }
    setFullTime (val: number) {
      this.$store.commit('updateFullTime', val * 60)
      this.$store.commit('RESET')
    }

    get firstTeam () {
      return this.$store.state.currentMatch.teams[0]
    }
    updateFirstTeamShorthand (val: any) {
      this.$store.commit('updateTeam', {team: 0, shorthand: val.target.value})
    }
    updateFirstTeamName (val: any) {
      this.$store.commit('updateTeam', {team: 0, name: val.target.value})
    }

    get secondTeam () {
      return this.$store.state.currentMatch.teams[1]
    }
    updateSecondTeamName (val: any) {
      this.$store.commit('updateTeam', {team: 1, name: val.target.value})
    }
    updateSecondTeamShorthand (val: any) {
      this.$store.commit('updateTeam', {team: 1, shorthand: val.target.value})
    }

    mounted () {
      if (!this.$store.state.appSettings.settingsToastShown) {
        Toast.create.info({
          html: 'Fill all details and procced to the match!',
          timeout: 10000
        })
        this.$store.commit('toggleSettingsToastShown')
      }
    }
  }
</script>

<style lang="styl">
</style>
