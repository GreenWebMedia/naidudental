<template lang='pug' src='./teeth-whitening.pug'></template>

<script>
import Loader from 'components/loader/loader'

export default {
  name: 'teeth-whitening',
  computed: {
    props () {
      return this.$store.state.pages['teeth-whitening']
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
