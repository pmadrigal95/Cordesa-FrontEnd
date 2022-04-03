<script>
  export default {
    name: 'SectionContactUs',
  }
</script>

<template>
  <v-theme-provider dark>
    <base-section
      id="contact-us"
      class="primary"
      space="40"
    >
      <v-container>
        <v-row justify="center">
          <v-col cols="10">
            <base-title
              :space="$vuetify.breakpoint.mdAndUp ? 0 : 4"
              title="Solicite Más Información Sobre Nuestros Equipos."
            />
          </v-col>

          <v-col
            cols="12"
            md="2"
          >
            <base-btn
              :block="$vuetify.breakpoint.smAndDown"
              color="white"
              :href="`mailto:Info@Corp-Cordesa.Com?subject=Consulta`"
              large
              outlined
              target="_blank"
            >
              Más Información
            </base-btn>
          </v-col>
        </v-row>
      </v-container>
    </base-section>
  </v-theme-provider>
</template>
