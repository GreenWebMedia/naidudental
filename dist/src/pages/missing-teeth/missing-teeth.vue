<template lang='pug' src='./missing-teeth.pug'></template>

<script>
import Loader from 'components/loader/loader'

export default {
  name: 'missing-teeth',
  computed: {
    props () {
      return this.$store.state.pages['missing-teeth']
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
