<template>
  <div class="result-view">
    <div class="score-view">
      <div class="score -first">
        {{ result.teamOne.shorthand }} - {{ result.teamOne.score }}
      </div>
      <div class="time" :style="backgroundColor">
        {{ time }}
      </div>
      <div class="score -second">
        {{ result.teamTwo.score }} - {{ result.teamTwo.shorthand }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'

  @Component({
    props: {
      lessThanMinuteToFinish: Boolean,
      result: {
        teamOne: {
          name: String,
          shorthand: String,
          score: Number
        },
        teamTwo: {
          name: String,
          shorthand: String,
          score: Number
        }
      },
      time: String
    }
  })
  export default class ResultView extends Vue {
    lessThanMinuteToFinish: Boolean

    get backgroundColor() {
      if (this.lessThanMinuteToFinish) {
        return {
          "background-color": '#ff0000',
          "border-bottom": "3px solid #bb0101",
          "color": '#ffffff'
        }
      }
      else {
        return {
          "background-color": '#ffffff',
          "border-bottom": "3px solid rgb(157, 155, 154)",
          "color": '#000000'
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
.score-view
  display flex
  flex-direction row
  justify-content center
  align-items center

  font-size 1.2em
  font-weight 700
  color white

  box-shadow 0 3px 6px rgba(0, 0, 0, .16), 0 3px 6px rgba(0, 0, 0, .23)
  border-radius 7px
  overflow hidden
  > .score
    text-align center
    width 35%
    padding 5px
    &.-first
      background-color #027be3
      border-bottom 3px solid #0262b6
    &.-second
      background-color #26a69a
      border-bottom 3px solid #1e857b

  > .time
    text-align center
    width 30%
    padding 5px
    color black
    border-bottom 3px solid rgb(157, 155, 154)
    transition 1s all
</style>
