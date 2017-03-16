<template>
  <transition name="fade">
    <q-tabs
    default-tab="tab-1"
    >
      <q-tab name="tab-1" icon="watch" route="/match" :hidden="matchEnabled">
        Match
      </q-tab>
      <q-tab name="tab-4" icon="settings" route="/settings">
        Settings
      </q-tab>
    </q-tabs>
  </transition>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'

  @Component({})
  export default class TabBar extends Vue {
    get matchEnabled () {
      let array = this.$store.state.currentMatch.teams.map((el: any) => {
        return el.name !== '' && el.shorthand !== ''
      })

      return !(array[0] && array[1])
    }
  }
</script>

<style lang="styl" scoped>
.fade-enter-active, .fade-leave-active
  transition opacity .2s

.fade-enter, .fade-leave-to
  opacity 0
</style>
