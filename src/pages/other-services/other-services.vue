<template lang='pug' src='./other-services.pug'></template>

<script>
import Loader from 'components/loader/loader'

export default {
  name: 'other-services',
  computed: {
    props () {
      return this.$store.state.pages['other-services']
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
