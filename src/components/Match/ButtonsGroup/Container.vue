<template>
  <buttons
    :teamOneName="teamOneName"
    :teamTwoName="teamTwoName"
  >
  </buttons>
</template>

<script>
import Buttons from './View.vue'

export default {
  components: {
    Buttons
  },
  computed: {
    teamOneName: function () {
      return this.$store.getters.teamName(0)
    },
    teamTwoName: function () {
      return this.$store.getters.teamName(1)
    }
  }
}
</script>
