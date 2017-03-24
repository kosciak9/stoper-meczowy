<template>
  <buttons
    :teamOneName="teamOneName"
    :teamTwoName="teamTwoName"
  >
  </buttons>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import Buttons from './View.vue'

  @Component({
    components: {
      Buttons
    }
  })
  export default class ButtonsContainer extends Vue {
    get teamOneName() {
      return this.$store.getters.teamName(0)
    }
    get teamTwoName() {
      return this.$store.getters.teamName(1)
    }
  }
</script>
