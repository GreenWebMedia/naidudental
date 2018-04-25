<template lang='pug' src='./home.pug'></template>

<script>
import Loader from 'components/loader/loader'
import BlockCTA from 'components/block/block-cta-home/block-cta-home'

export default {
  name: 'home',
  computed: {
    props () {
      return this.$store.state.pages.home
    },
    loading () {
      return this.$store.state.loading
    }
  },
  components: {
    Loader,
    BlockCTA

  }
}
</script>
