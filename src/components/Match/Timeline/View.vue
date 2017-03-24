<template>
  <div class="timeline">
    <!-- item -->
    <div v-for="event in events" class="timeline-item">
      <div class="timeline-badge">
        <!-- ...or badge with icon -->
        <i>{{ event.icon }}</i>
      </div>
      <!-- title -->
      <div class="timeline-title">
        {{ event.name }}
      </div>
      <!-- date timestamp -->
      <div class="timeline-date text-italic">
        <div>{{ event.time }}</div>
      </div>
      <!--
        content; any Web component or DOM elements,
        in this particular case, a Card
      -->
      <div class="card">
        <div class="card-title">
          {{ event.title }}
        </div>
        <div class="card-content">
          {{ event.description }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'

  @Component({
    props: {
      events: []
    }
  })
  export default class TimelineView extends Vue {
  }
</script>

<script>
  export default {
    props: ['events']
  }
</script>

<style lang="stylus" scoped>
.timeline-title
  margin-bottom 0px
.timeline-date
  margin-bottom 15px
</style>
