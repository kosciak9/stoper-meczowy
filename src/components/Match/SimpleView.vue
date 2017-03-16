<template>
  <div class="layout-padding">
    <result></result>
    <buttons></buttons>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'


  import Result from './ResultWidget/Container.vue'
  import Buttons from './ButtonsGroup/Container.vue'

  @Component({
    components: {
      Result,
      Buttons
    }
  })
  export default class SimpleView extends Vue {
  }
</script>

<style lang="styl" scoped>
.layout-padding
  height 100%
  display flex
  flex-direction column
  justify-content center
</style>
