<template lang='pug' src='./request-an-appointment.pug'></template>

<script>
import Loader from 'components/loader/loader'

export default {
  name: 'request-an-appointment',
  computed: {
    props () {
      return this.$store.state.pages['request-an-appointment']
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
