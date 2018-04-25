<template lang='pug' src='./dental-implants.pug'></template>

<script>
import Loader from 'components/loader/loader'

export default {
  name: 'dental-implants',
  computed: {
    props () {
      return this.$store.state.pages['dental-implants']
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
