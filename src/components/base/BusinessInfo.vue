<template>
  <v-theme-provider :dark="dark">
    <div>
      <base-info-card
        title="Más Información"
        pace="6"
      >
        Contáctenos
      </base-info-card>

      <base-business-contact dense />
    </div>
  </v-theme-provider>
</template>

<script>
  export default {
    name: 'BaseBusinessInfo',

    props: { dark: Boolean },
  }
</script>
