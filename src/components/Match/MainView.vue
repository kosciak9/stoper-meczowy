<template>
  <div v-if="mode === 'simple'">
    <simple></simple>
  </div>
  <div v-else>
    <advanced></advanced>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import Simple from './SimpleView.vue'
  import Advanced from './AdvancedView.vue'
  import { Toast } from 'quasar'

  @Component({
    components: {
      Simple,
      Advanced
    }
  })
  export default class MainView extends Vue {
    get mode() {
      return this.$store.state.appSettings.trackingMode
    }

    mounted() {
      if (!this.$store.state.appSettings.matchToastShown) {
        Toast.create.positive({
          html: 'Press and hold the buttons to access additional options',
          timeout: 10000
        })
        this.$store.commit('toggleMatchToastShown')
      }
    }
  }
</script>
