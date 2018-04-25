<template lang='pug' src='./home.pug'></template>
<script>

import Loader from 'components/loader/loader'
import BlockCTA from 'components/block/block-cta-home/block-cta-home'

export default {
  props: ['props'],
  name: 'home',
  metaInfo: {
      // title will be injected into parent titleTemplate
    title: 'About Us'
  },
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
