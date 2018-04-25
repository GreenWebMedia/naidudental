<template lang='pug' src='./new-patient-forms.pug'></template>

<script>
import Loader from 'components/loader/loader'

export default {
  name: 'new-patient-forms',
  computed: {
    props () {
      return this.$store.state.pages['new-patient-forms']
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
