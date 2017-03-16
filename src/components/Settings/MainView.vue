<template>
  <div class="settings-view">
    <app-settings></app-settings>
    <match-settings></match-settings>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'

  import AppSettings from './AppSettings.vue'
  import MatchSettings from './MatchSettings.vue'

  @Component({
    components: {
      AppSettings,
      MatchSettings
    }
  })
  export default class MainView extends Vue {
  }
</script>

<style lang="styl" scoped>
.settings-view
  display flex
  flex-direction column
  justify-content flex-start

  height 100%
  > *
    margin-bottom 5px
</style>
