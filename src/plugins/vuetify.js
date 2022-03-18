// Vuetify Documentation https://vuetifyjs.com

import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      light: {
        primary: '#9A7D0A',
        secondary: '#17202A',
        accent: '#204165',
      },
      dark: {
        primary: '#9A7D0A',
        secondary: '#17202A',
        accent: '#204165',
      },
    },
  },
})
