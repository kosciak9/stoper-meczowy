<template>
  <result></result>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import Result from './ResultWidget/Container.vue'

  @Component({
    components: {
      Result
    }
  })
  export default class AdvancedView extends Vue {
  }
</script>
