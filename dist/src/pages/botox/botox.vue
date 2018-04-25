<template lang='pug' src='./botox.pug'></template>

<script>
import Loader from 'components/loader/loader'

export default {
  name: 'botox',
  computed: {
    props () {
      return this.$store.state.pages['botox']
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
