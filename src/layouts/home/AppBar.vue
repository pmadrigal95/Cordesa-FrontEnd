<template>
  <div>
    <v-app-bar
      id="home-app-bar"
      app
      elevation="1"
      elevate-on-scroll
      height="80"
    >
      <base-img
        :src="
          require(`@/assets/zero-logo-${
            $vuetify.theme.isDark ? 'dark' : 'light'
          }.svg`)
        "
        contain
        max-width="200"
        width="100%"
        @click="$goHome"
      />

      <v-spacer />

      <div>
        <v-tabs
          class="hidden-sm-and-down"
          optional
          background-color="transparent"
        >
          <v-tab
            v-for="(name, i) in items"
            :key="i"
            :to="name.url"
            :exact="name.name === 'Home'"
            :ripple="false"
            class="font-weight-bold"
            min-width="96"
            text
          >
            {{ name.name }}
          </v-tab>
        </v-tabs>
      </div>

      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click="drawer = !drawer"
      />
    </v-app-bar>

    <v-dialog
      v-model="drawer"
      width="500"
    >
      <v-card>
        <v-list
          nav
          dense
        >
          <v-list-item-group
            v-model="group"
            active-class="primary--text text--accent-4"
          >
            <v-list-item
              v-for="(name, i) in items"
              :key="i"
              :to="name.url"
            >
              <v-list-item-title> {{ name.name }}</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  export default {
    name: 'HomeAppBar',

    data: () => ({
      drawer: null,
      group: null,
      items: [
        { name: 'Inicio', url: '/' },
        { name: 'Máquinaria', url: '/Portfolio' },
        { name: 'Acerca de', url: '/About' },
        { name: 'Contáctenos', url: '/Contact' },
      ],
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },

    methods: {
      $goHome () {
        if (this.$router.currentRoute.name !== 'Home') {
          this.$router.push({
            name: 'Home',
          })
        }
      },
    },
  }
</script>

<style lang="sass">
#home-app-bar
  .v-tabs-slider
    max-width: 24px
    margin: 0 auto

    .v-tab
      &::before
        display: none
</style>
