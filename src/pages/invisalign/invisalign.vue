<template lang='pug' src='./invisalign.pug'></template>

<script>
import Loader from 'components/loader/loader'

export default {
  name: 'bradenton-invisalign',
  computed: {
    props () {
      return this.$store.state.pages['bradenton-invisalign']
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
