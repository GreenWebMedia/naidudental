<template lang='pug' src='./sedation-dentist.pug'></template>

<script>
import Loader from 'components/loader/loader'

export default {
  name: 'sedation-dentist',
  computed: {
    props () {
      return this.$store.state.pages['sedation-dentist']
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
