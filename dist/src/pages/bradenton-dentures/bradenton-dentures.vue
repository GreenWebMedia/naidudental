<template lang='pug' src='./bradenton-dentures.pug'></template>

<script>
import Loader from 'components/loader/loader'

export default {
  name: 'bradenton-dentures',
  computed: {
    props () {
      return this.$store.state.pages['bradenton-dentures']
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
