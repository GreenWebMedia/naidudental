<template lang='pug' src='./dental-implants.pug'></template>

<script>
import Loader from 'components/loader/loader'

export default {
  name: 'bradenton-dental-implants',
  computed: {
    props () {
      return this.$store.state.pages['bradenton-dental-implants']
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
