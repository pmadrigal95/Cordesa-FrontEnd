<template>
  <div id="footer">
    <v-footer
      class="grey--text transparent px-0 px-md-6 text-center text-md-left"
      height="auto"
    >
      <v-row class="mx-0">
        <v-col
          cols="12"
          md="4"
        >
          <div
            class="
                            headline
                            font-weight-bold
                            primary--text
                            mb-6
                            d-inline-flex
                            align-center
                        "
          >
            <v-avatar
              class="mr-3"
              size="50"
              tile
            >
              <v-img
                :src="
                  $vuetify.theme.dark === true
                    ? require('@/assets/zero-logo-dark.png')
                    : require('@/assets/zero-logo-light.png')
                "
                contain
              />
            </v-avatar>
            CORDESA Ltd
          </div>

          <div
            class="
                            subtitle-1
                            font-weight-light
                            mb-6
                            hidden-sm-and-down
                        "
          >
            Somos una empresa costarricense<br>
            Importamos a Costa Rica maquinaria de construcción<br>
          </div>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <div class="headline font-weight-bold primary--text mb-6">
            Nuestras Marcas
          </div>
          <a
            class="title font-weight-light grey--text d-block mb-4"
            href="https://mstcostarica.com/"
          >
            MST
          </a>
          <a
            href="https://mstcostarica.com/"
            class="title font-weight-light grey--text d-block"
          >
            ZOOMLION
          </a>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-row
            class="text-center"
            :dense="$vuetify.breakpoint.smAndDown"
          >
            <v-col
              v-for="(social, i) in socials"
              :key="i"
              class="mb-6 mb-md-12 text-center"
              cols="3"
            >
              <v-btn
                :small="$vuetify.breakpoint.smAndDown"
                color="white"
                fab
              >
                <v-icon
                  color="primary"
                  v-text="social.icon"
                />
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-footer>
  </div>
</template>

<script>
  export default {
    name: 'HomeFooter',

    data: () => ({
      socials: [
        { icon: 'mdi-facebook', href: '#' },
        { icon: 'mdi-instagram', href: '#' },
      ],
    }),
  }
</script>

<style lang="sass">
#footer
    a
        text-decoration: none

    img
        position: absolute
        bottom: 0
        right: 0
        left: 0
        height: 500px
        opacity: .05

    @media screen and (min-width: 960px)
        margin-top: 200px
</style>
