<template lang='pug' src='./request-an-appointment.pug'></template>
<script>
import Loader from 'components/loader/loader'

export default {
  name: 'request-an-appointment',
  computed: {
    props () {
      return this.$store.state.pages['request-an-appointment']
    },
    loading () {
      return this.$store.state.loading
    }
  },
  components: {
    Loader
  },
  data: () => {
    return {
      name: '',
      last: '',
      phone: '',
      email: '',
      confirm_email_address: '',
      address: '',
      city: '',
      zip: '',
      message: '',
      have_you_looked_at: '',
      did_you_check_any_online: '',
      are_you_a_new_patient: '',
      preffered_days: '',
      best_time_to_call: '',
      what_search: '',
      formSubmitted: false
    }
  },
  methods: {
    validateBeforeSubmit () {
      this.$validator.validateAll()
      .then(result => {
        if (result) {
          this.$el.children[0].submit()
        } else {
          alert('Correct them errors!')
        }
      })
      .catch((e) => {
        console.log(e)
      })
    }
  }
}
</script>
