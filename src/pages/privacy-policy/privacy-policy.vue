<template lang='pug' src='./privacy-policy.pug'></template>

<script>
import Loader from 'components/loader/loader'

export default {
  name: 'privacy-policy',
  computed: {
    props () {
      return this.$store.state.pages['privacy-policy']
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
