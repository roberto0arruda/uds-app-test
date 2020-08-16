<template>
  <v-overlay :value="preloader">
    <v-progress-circular indeterminate size="64" />
    <span> {{ textPreloader }}</span>
  </v-overlay>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      preloader: state => state.preloader,
      textPreloader: state => state.textPreloader
    })
  }
}
</script>
