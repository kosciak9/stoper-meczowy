<template>
  <div id="q-app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'

  import RouterView from './components/Shared/RouterView.vue'

  @Component({
    components: {
      RouterView
    }
  })
  export default class App extends Vue {
  }
</script>

<style></style>
