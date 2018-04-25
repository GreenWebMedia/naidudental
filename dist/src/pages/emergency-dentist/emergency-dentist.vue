<template lang='pug' src='./emergency-dentist.pug'></template>

<script>
import Loader from 'components/loader/loader'

export default {
  name: 'emergency-dentist',
  computed: {
    props () {
      return this.$store.state.pages['emergency-dentist']
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
