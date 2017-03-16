<template>
  <div v-if="mode === 'simple'">
    <simple></simple>
  </div>
  <div v-else>
    <advanced></advanced>
  </div>
</template>

<script>
import Simple from './SimpleView'
import Advanced from './AdvancedView'

export default {
  data () {
    return {
    }
  },
  computed: {
    mode: function () {
      return this.$store.state.appSettings.trackingMode
    }
  },
  components: {
    Simple,
    Advanced
  },
  methods: {
  },
  mounted () {
  },
  beforeDestroy () {
  }
}
</script>

<style lang="styl">
</style>
