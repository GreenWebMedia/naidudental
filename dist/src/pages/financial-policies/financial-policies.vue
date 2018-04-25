<template lang='pug' src='./financial-policies.pug'></template>

<script>
import Loader from 'components/loader/loader'

export default {
  name: 'financial-policies',
  computed: {
    props () {
      return this.$store.state.pages['financial-policies']
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
