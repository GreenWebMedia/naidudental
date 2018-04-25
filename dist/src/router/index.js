import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/home/home'
import AboutUs from '@/pages/about-us/about-us'
import ContactUs from '@/pages/contact-us/contact-us'
import CosmeticServices from '@/pages/cosmetic-services/cosmetic-services'
import MissingTeeth from '@/pages/missing-teeth/missing-teeth'
import OtherServices from '@/pages/other-services/other-services'
import PageNotFound from '@/pages/404/404'
import Meet from '@/pages/meet-dr-darshan-naidu/meet-dr-darshan-naidu'
import RequestAnAppointment from '@/pages/request-an-appointment/request-an-appointment'
import MapToOurOffice from '@/pages/map-to-our-office/map-to-our-office'
import NewPatientForms from '@/pages/new-patient-forms/new-patient-forms'
import FinaicialForms from '@/pages/financial-policies/financial-policies'
import PrivacyPolicy from '@/pages/privacy-policy/privacy-policy'
import TeethWhitening from '@/pages/teeth-whitening/teeth-whitening'
import Invisalign from '@/pages/invisalign/invisalign'
import Botox from '@/pages/botox/botox'
import DentalImplants from '@/pages/dental-implants/dental-implants'
import BradentonDentures from '@/pages/bradenton-dentures/bradenton-dentures'
import SedationDentist from '@/pages/sedation-dentist/sedation-dentist'
import EmergencyDentist from '@/pages/emergency-dentist/emergency-dentist'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      navigation: true,
      component: Home,
      meta: {
        title: 'Home Page - Example App',
        metaTags: [
          {
            name: 'description',
            content: 'The home page of our example app.'
          },
          {
            property: 'og:description',
            content: 'The home page of our example app.'
          }
        ]
      }
    }, {
      path: '/about-us',
      name: 'About us',
      navigation: true,
      component: AboutUs
    }, {
      path: '/cosmetic-services',
      name: 'Cosmetic Services',
      navigation: true,
      component: CosmeticServices
    }, {
      path: '/request-an-appointment',
      name: 'Request an appointment',
      navigation: true,
      component: RequestAnAppointment
    }, {
      path: '/missing-teeth',
      name: 'Missing teeth',
      navigation: true,
      component: MissingTeeth
    }, {
      path: '/other-services',
      name: 'Other services',
      navigation: true,
      component: OtherServices
    }, {
      path: '/contact-us',
      name: 'Contact us',
      navigation: true,
      component: ContactUs
    }, {
      path: '/request-an-appointment',
      name: 'page-not-found',
      navigation: false,
      component: PageNotFound
    }, {
      path: '/meet-dr-darshan-naidu',
      name: 'meet-dr-darshan-naidu',
      navigation: false,
      component: Meet
    }, {
      path: '/map-to-our-office',
      name: 'map-to-our-office',
      navigation: false,
      component: MapToOurOffice
    }, {
      path: '/new-patient-forms',
      name: 'new-patient-forms',
      navigation: false,
      component: NewPatientForms
    }, {
      path: '/financial-policies',
      name: 'financial-policies',
      navigation: false,
      component: FinaicialForms
    }, {
      path: '/privacy-policy',
      name: 'privacy-policy',
      navigation: false,
      component: PrivacyPolicy
    }, {
      path: '/teeth-whitening',
      name: 'teeth-whitening',
      navigation: false,
      component: TeethWhitening
    }, {
      path: '/invisalign',
      name: 'invisalign',
      navigation: false,
      component: Invisalign
    }, {
      path: '/botox',
      name: 'botox',
      navigation: false,
      component: Botox
    }, {
      path: '/dental-implants',
      name: 'dental-implants',
      navigation: false,
      component: DentalImplants
    }, {
      path: '/bradenton-dentures',
      name: 'bradenton-dentures',
      navigation: false,
      component: BradentonDentures
    }, {
      path: '/sedation-dentist',
      name: 'sedation-dentist',
      navigation: false,
      component: SedationDentist
    }, {
      path: '/emergency-dentist',
      name: 'emergency-dentist',
      navigation: false,
      component: EmergencyDentist
    }, {
      path: '/*',
      name: 'page-not-found',
      navigation: false,
      component: PageNotFound
    }
  ]
})

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0)
  next()
})

export default router
