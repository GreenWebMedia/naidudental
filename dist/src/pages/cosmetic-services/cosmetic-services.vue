<template lang='pug' src='./cosmetic-services.pug'></template>

<script>
import Loader from 'components/loader/loader'

export default {
  name: 'cosmetic-services',
  computed: {
    props () {
      return this.$store.state.pages['cosmetic-services']
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
