<template>
  <v-theme-provider dark>
    <base-section
      id="social"
      class="secondary text-center"
      space="56"
    >
      <base-icon
        color="primary"
        class="mb-8"
      >
        mdi-lightbulb-on-outline
      </base-icon>

      <base-section-heading
        color="transparent"
        title="Sómos la mejor opción para su empresa"
      >
        <p>Obtenga maquinaria de calidad.</p>
        <p>Sea parte de nuestra cartera de clientes y dele un nuevo rumbo a su empresa.</p>
        <p>Corporación CORDESA Ltda</p>
        <p>#DominandoElMercado</p>
      </base-section-heading>

      <div class="py-4" />

      <v-btn
        class="font-weight-bold"
        color="primary"
        light
        min-width="168"
        x-large
      >
        Contáctenos

        <v-icon right>
          mdi-open-in-new
        </v-icon>
      </v-btn>
    </base-section>
  </v-theme-provider>
</template>

<script>
  export default {
    name: 'SectionNews',

    provide: {
      heading: { align: 'center' },
    },
  }
</script>
