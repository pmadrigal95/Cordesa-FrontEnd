<script>
  export default {
    name: 'FourOhFour',

    provide: {
      heading: { align: 'center' },
    },
  }
</script>

<template>
  <base-section id="404">
    <base-heading title="404" />

    <base-subheading
      class="primary--text"
      title="Oh!"
    />

    <base-subheading
      space="8"
      title="Parece que esta página no existe"
    />

    <base-img
      :src="require(`@/assets/${$vuetify.theme.isDark ? 'zero-logo-dark.png' : 'zero-logo-light.png'}`)"
      class="mx-auto mb-12"
      contain
      height="350"
      width="250"
    />

    <div class="text-center">
      <base-btn
        to="/"
      >
        Sácame de aquí
      </base-btn>
    </div>
  </base-section>
</template>
