<template>
  <div class="list">
    <div class="item multiple-lines">
      <div class="list-label">App Mode</div>
      <div class="item-content">
        <q-select
          type="list"
          class="full-width"
          :options="selectOptions"
          v-model="select"
          @input="set"
          >
        </q-select>
      </div>
    </div>
    <label class="item three-lines">
      <div class="item-content has-secondary">
        <div>Acquire wakelock</div>
        <div>Keeps screen awake when application is active</div>
      </div>
      <div class="item-secondary">
        <q-toggle v-model="wakelock" class="red"></q-toggle>
      </div>
    </label>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'

  @Component({
    watch: {
      wakelock: function(value, oldValue) {
        keepscreenon.toggle()
      }
    }
  })
  export default class AppSettings extends Vue {
    wakelock = false
    selectOptions = [
      { label: 'Simple Mode', value: 'simple' }
      // { label: 'Advanced Mode', value: 'advanced', disable: true }
    ]

    get select () {
      return this.$store.state.appSettings.trackingMode
    }

    set (val: string) {
      this.$store.commit('updateTrackingMode', val)
    }
  }
</script>
