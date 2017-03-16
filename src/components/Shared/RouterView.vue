<template>
  <q-layout>
    <!-- <div slot="header" class="toolbar">
      <q-toolbar-title>
        {{ $route.name }}
      </q-toolbar-title>
    </div> -->
    <div class="layout-view">
      <transition name="fade" mode="out-in">
        <router-view class="layout-padding">
        </router-view>
      </transition>
    </div>
    <div slot="footer">
      <tab-bar></tab-bar>
    </div>
  </q-layout>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'

  import TabBar from './TabBar.vue'

  @Component({
    components: {
      TabBar
    }
  })
  export default class RouterView extends Vue {
    get displayStore () {
      return this.$store.state
    }
  }
</script>

<style lang="styl" scoped>
.fade-enter-active, .fade-leave-active
  transition opacity .2s

.fade-enter, .fade-leave-to
  opacity 0
</style>
