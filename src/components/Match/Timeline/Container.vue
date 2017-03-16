<template>
  <div>
    <timeline-view :events="events"></timeline-view>
  </div>
</template>

<script>
  import TimelineView from './View'
  export default {
    computed: {
      events: function () {
        let timeline = this.$store.state.currentMatch.timeline
        return timeline.map(el => {
          el.icon = 'alarm'
          el.title = 'Goal! Franciszek Madej!'
          return el
        })
      }
    },
    components: {
      TimelineView
    }
  }
</script>
