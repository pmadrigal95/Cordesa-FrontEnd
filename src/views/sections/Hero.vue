<template>
  <section id="hero">
    <v-img
      :min-height="minHeight"
      :src="require('@/assets/light.jpg')"
      class="white--text"
      gradient="to bottom, rgba(23, 32, 42, .9), rgba(0,0,0,.4)"
    >
      <v-container class="fill-height px-4 py-12">
        <v-responsive
          class="d-flex align-center mx-auto"
          height="100%"
          max-width="700"
          width="100%"
        >
          <base-subheading
            weight="regular"
            title="Sómos la mejor opción para su empresa"
          />

          <base-heading
            size="text-h2"
            title="Bienvenido a CORDESA"
            weight="medium"
          />

          <base-body>
            Importamos a Costa Rica maquinaria de construcción, con la mejor calidad y sobre todo al mejor precio del mercado, de esta crisis salimos juntos.
          </base-body>

          <div
            :class="$vuetify.breakpoint.smAndDown ? 'flex-column align-start' : 'align-center'"
            class="d-flex flex-wrap"
          >
            <base-btn>
              Nuestros Equipos
            </base-btn>

            <span class="font-weight-bold ml-6 mr-4 my-4">-</span>

            <base-btn
              :ripple="false"
              class="pa-1"
              height="auto"
              text
            >
              Contáctenos
            </base-btn>
          </div>
        </v-responsive>
      </v-container>
    </v-img>
  </section>
</template>

<script>
  export default {
    name: 'SectionHero',

    provide: {
      theme: { isDark: true },
    },

    computed: {
      minHeight () {
        const height = this.$vuetify.breakpoint.mdAndUp ? '100vh' : '50vh'

        return `calc(${height} - ${this.$vuetify.application.top}px)`
      },
    },
  }
</script>
