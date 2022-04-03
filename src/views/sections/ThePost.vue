<script>
/**
 * Descripción: pag ThePost
 *
 * @displayName ThePost
 */

  export default {
    name: 'AboutViewComponent',

    props: {
      /**
       * Objecto de configuración
       */
      setting: {
        type: Object,
        required: true,
      },
    },
  }
</script>

<template>
  <div>
    <v-img
      :src="
        setting.title ? setting.banner : require(`@/assets/${setting.banner}`)
      "
      gradient="to bottom, rgba(23, 32, 42, .9), rgba(0,0,0,0)"
      height="50vh"
      loading="lazy"
    >
      <div class="my-2">
        <v-btn
          text
          color="primary"
          small
          :to="setting.url"
        >
          Inicio
        </v-btn>
      </div>
    </v-img>
    <v-sheet
      class="py-5 px-3"
      color="grey lighten-2"
      light
    >
      <h1 class="display-3 font-weight-bold mb-4" />

      <v-row>
        <v-col
          cols="12"
          md="6"
          class="grey--text text--darken-2 title font-weight-light"
        >
          <h1
            class="display-3 font-weight-bold mb-4"
            v-text="setting.title"
          />
          <!-- @slot Use este slot para el contenido -->
          <slot name="RenderBody" />
          <v-row
            v-if="setting.title"
            align="center"
            justify="space-between"
            class="pt-4 white mx-0"
            tag="p"
          >
            <span class="pl-3 subheading">Share this on social media</span>

            <div class="d-flex">
              <v-btn icon>
                <v-icon>mdi-discord</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-reddit</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-twitter</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-facebook</v-icon>
              </v-btn>
            </div>
          </v-row>
        </v-col>

        <v-col
          cols="12"
          md="6"
          class="mt-5"
        >
          <v-card
            class="mx-auto"
            elevation="24"
            max-width="400"
          >
            <v-img
              :src="require(`@/assets/${setting.img}`)"
              loading="lazy"
            />
          </v-card>
        </v-col>
      </v-row>
    </v-sheet>
  </div>
</template>

<style lang="scss">
.article {
  p {
    line-height: 2;
    padding: 0 12px 20px;
  }
}
</style>
