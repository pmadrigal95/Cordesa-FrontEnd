<template>
  <base-section id="theme-features">
    <base-section-heading title="Corporación CORDESA Ltda">
      Representante de la marca Turca MST de equipo especial para la
      construcción.
    </base-section-heading>

    <v-container
      class="px-0"
      tag="section"
      :class="$vuetify.breakpoint.smAndDown && 'pt-0'"
    >
      <v-responsive
        class="overflow-visible"
        min-height="50vh"
      >
        <v-row
          align="center"
          align-content="center"
          class="fill-height mx-0"
          justify="space-around"
        >
          <v-slide-x-transition
            v-if="$vuetify.breakpoint.mdAndUp"
            appear
          >
            <v-col
              cols="12"
              md="7"
            >
              <center>
                <img
                  :src="require('@/assets/MSTB.jpg')"
                  contain
                  gradient="to right, rgba(23, 32, 42, .9), rgba(34, 53, 73,.4)"
                  class="imgAuth"
                >
              </center>
            </v-col>
          </v-slide-x-transition>

          <v-slide-x-reverse-transition appear>
            <v-col
              cols="12"
              md="5"
            >
              <center>
                <h1>MST Costa Rica es parte de Corporación CORDESA Ltda.</h1>
                <br>
                <h1>
                  Gracias a la amplia red de servicio y manufactura de nuestras
                  marcas representadas contamos con una gran oferta de productos
                  y servicios.
                </h1>
                <br>
                <h1>
                  Nos centramos principalmente en maquinaria pesada, tanto para
                  la construcción, cómo para el sector agrícola e industrial.
                </h1>
                <br>
                <v-btn
                  class="font-weight-bold"
                  color="primary"
                  light
                  min-width="168"
                  x-large
                  target="_blank"
                  href="https://mstcostarica.com/"
                >
                  MST Costa Rica

                  <v-icon right>
                    mdi-open-in-new
                  </v-icon>
                </v-btn>
              </center>
            </v-col>
          </v-slide-x-reverse-transition>
        </v-row>
      </v-responsive>
    </v-container>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionThemeFeatures',
  }
</script>

<style scoped lang="sass">
.imgAuth
  border-radius: 12px 12px 12px 12px !important
</style>
