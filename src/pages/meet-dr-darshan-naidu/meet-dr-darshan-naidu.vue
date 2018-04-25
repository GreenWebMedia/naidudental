<template lang='pug' src='./meet-dr-darshan-naidu.pug'></template>

<script>
import Loader from 'components/loader/loader'

export default {
  name: 'meet-dr-darshan-naidu',
  computed: {
    props () {
      return this.$store.state.pages['meet-dr-darshan-naidu']
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
