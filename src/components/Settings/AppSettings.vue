<template>
  <div class="list">
    <div class="item multiple-lines">
      <div class="list-label">App Mode</div>
      <div class="item-content">
        <q-select
          type="list"
          :options="selectOptions"
          v-model="select"
          @input="set"
          >
        </q-select>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'

  @Component({})
  export default class AppSettings extends Vue {
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
