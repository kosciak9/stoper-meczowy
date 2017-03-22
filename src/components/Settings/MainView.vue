<template>
  <div class="settings-view">
    <app-settings></app-settings>
    <match-settings></match-settings>
    <button @click="saveStateToStorage" class="primary">
      Save Settings to Local Storage
    </button>
    <button @click="loadStateFromStorage" class="warning">
      Load Settings from Local Storage
    </button>
    <button @click="eraseStateFromStorage" class="negative">
      Erase Settings from Local Storage
    </button>

    <q-modal ref="mountModal"
      class="minimized"
      :content-css="{ padding: '25px'}">
      <h6>Load Settings from LocalStorage</h6>
      <p>
        We've found your saved Settings in the LocalStorage.
        Do you wish to load them?
      </p>
      <button class="primary"
        @click="loadStateFromStorage()">
        Load Settings
      </button>
      <button class="secondary" @click="$refs.mountModal.close()">Close</button>
    </q-modal>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import { LocalStorage, Toast } from 'quasar'

  import AppSettings from './AppSettings.vue'
  import MatchSettings from './MatchSettings.vue'

  @Component({
    components: {
      AppSettings,
      MatchSettings
    }
  })
  export default class MainView extends Vue {
    mounted() {
      const teams = this.$store.state.currentMatch.teams
      const settingsAreEmpty = teams[0].name === '' && teams[1].name === ''
      if (LocalStorage.has('state') && settingsAreEmpty) {
        const hello: any = this.$refs.mountModal
        hello.open()
      }
    }

    saveStateToStorage () {
      LocalStorage.set('state', this.$store.state)
      Toast.create({
        html: 'Settings saved'
      })
    }

    loadStateFromStorage () {
      if (LocalStorage.has('state')) {
        this.$store.commit('loadStateFromStorage',
                           LocalStorage.get.item('state')
                          )
        Toast.create({
          html: 'Loaded Settings'
        })
        const hello: any = this.$refs.mountModal
        hello.close()
      }
      else {
        Toast.create({
          html: 'Nothing in the Local Storage'
        })
      }
    }

    eraseStateFromStorage () {
      LocalStorage.remove('state')
      Toast.create({
        html: 'Settings cleared'
      })
    }

  }
</script>

<style lang="styl" scoped>
.settings-view
  display flex
  flex-direction column
  justify-content flex-start

  height 100%
  > *
    margin-bottom 5px
</style>
