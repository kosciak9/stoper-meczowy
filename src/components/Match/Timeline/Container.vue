<template>
  <div>
    <timeline-view :events="events"></timeline-view>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import TimelineView from './View'

  @Component({
    components: {
      TimelineView
    }
  })
  export default class TimelineContainer extends Vue {
      get events() {
        let timeline = this.$store.state.currentMatch.timeline
        return timeline.map(el => {
          el.icon = 'alarm'
          el.title = 'Goal! Franciszek Madej!'
          return el
        })
      }
  }
</script>
