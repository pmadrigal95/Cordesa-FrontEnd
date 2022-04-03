<template>
  <base-section
    id="affiliates"
    space="36"
  >
    <v-container>
      <base-section-heading title="Nuestras Marcas" />

      <v-slide-group>
        <template
          v-for="(n, index) in branches"
        >
          <v-slide-item
            :key="index"
            class="align-self-center"
          >
            <base-img
              :src="require(`@/assets/${$vuetify.theme.isDark ? n.dark : n.light}`)"
              :lazy-src="require(`@/assets/${n.light}`)"
              color="grey"
              contain
              height="100"
              width="128"
            />
          </v-slide-item>

          <v-responsive
            v-if="index < 6"
            :key="`divider-${index}`"
            class="text-center"
            height="56"
            width="48"
          >
            <v-divider vertical />
          </v-responsive>
        </template>
      </v-slide-group>
    </v-container>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionAffiliates',
    data () {
      return {
        branches: [
          { light: 'zero-logo-light.png', dark: 'zero-logo-dark.png' },
          { light: 'BASAK.png', dark: 'BASAK.png' },
          { light: 'mst.png', dark: 'MST-white.png' },
          { light: 'zoomlion.png', dark: 'zoomlion.png' },
        ],
      }
    },
  }
</script>
