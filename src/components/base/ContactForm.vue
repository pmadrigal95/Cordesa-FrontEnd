<script>

  export default {
    name: 'BaseContactForm',

    // Injected from the Vuetify Themeable mixin
    inject: ['theme'],

    props: {
      subtitle: String,
      title: {
        type: String,
        default: 'MAIL US YOUR MESSAGE',
      },
    },
  }
</script>

<template>
  <div>
    <base-info-card
      title="Su mejor opción"
      subtitle="Contáctenos"
      space="4"
      color="primary"
    />
    <br>
    <br><br>
    <br>
    <v-row
      align-content="center"
      justify="center"
    >
      <base-btn
        color="primary"
        :href="`mailto:Info@Corp-Cordesa.Com?subject=Consulta`"
        block
        target="_blank"
      >
        Enviar Ahora
      </base-btn>
    </v-row>
    <br>
    <br>
    <br>
    <br>
    <v-row
      align-content="center"
      justify="center"
    >
      <base-img
        :src="require(`@/assets/zero-logo-${$vuetify.theme.isDark ? 'dark' : 'light'}.png`)"
        class="mr-3 hidden-xs-only"
        contain
        max-width="380"
        width="100%"
      />
    </v-row>
  </div>
</template>
