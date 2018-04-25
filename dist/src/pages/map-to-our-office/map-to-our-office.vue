<template lang='pug' src='./map-to-our-office.pug'></template>

<script>
import Loader from 'components/loader/loader'

export default {
  name: 'map-to-our-office',
  computed: {
    props () {
      return this.$store.state.pages['map-to-our-office']
    },
    loading () {
      return this.$store.state.loading
    }
  },
  components: {
    Loader
  }
}
</script>
