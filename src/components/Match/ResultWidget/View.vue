<template>
  <div class="result-view">
    <div class="score-view">
      <div class="score -first">
        {{ result.teamOne.shorthand }} {{ result.teamOne.score }}
      </div>
      <div class="time">
        {{ time }}
      </div>
      <div class="score -second">
        {{ result.teamTwo.shorthand }} {{ result.teamTwo.score }}
      </div>
    </div>
    <!-- <span class="team">{{ result.teamOne.name }}</span>
    <span class="score">{{ result.teamOne.score }} - {{ result.teamTwo.score }}</span>
    <span class="team">{{ result.teamTwo.name }}</span>
    <div class="time">
      {{ result.time }}
    </div> -->
  </div>
</template>

<script>
  export default {
    props: ['result', 'time']
  }
</script>

<style lang="stylus" scoped>
.score-view
  display flex
  flex-direction row
  justify-content center
  align-items center

  font-size 0.85rem
  font-weight 700
  color white

  box-shadow 0 3px 6px rgba(0, 0, 0, .16), 0 3px 6px rgba(0, 0, 0, .23)
  border-radius 7px
  overflow hidden
  > .score
    text-align center
    width 33.3%
    padding 5px
    &.-first
      background-color #027be3
      border-bottom 3px solid #0262b6
    &.-second
      background-color #26a69a
      border-bottom 3px solid #1e857b

  > .time
    text-align center
    width 33.3%
    padding 5px
    color black
    border-bottom 3px solid rgb(157, 155, 154)
</style>
