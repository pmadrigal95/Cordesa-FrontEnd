<script>
/**
 * Descripción: pag AboutViewComponent
 *
 * @displayName AboutViewComponent
 */

  const ThePost = () =>
    import(
      /* webpackChunkName: "TenantEditorViewComponent" */ '@/views/sections/ThePost'
    )

  export default {
    name: 'AboutViewComponent',

    components: {
      ThePost,
    },

    computed: {
      /**
       * Configuracion BaseLocalDataTable
       */
      setting () {
        return {
          banner: 'light.jpg',
          img: 'zero-logo-light.svg',
          url: '/',
        }
      },
    },
  }
</script>

<template>
  <the-post :setting="setting">
    <div slot="RenderBody">
      <base-section
        id="social"
        class="text-center"
        space="56"
      >
        <base-icon
          color="primary"
          class="mb-8"
        >
          mdi-office-building-outline
        </base-icon>

        <base-section-heading
          color="transparent"
          title="Nuestra Empresa"
        >
          <h1>Un poco más de Nosotros.</h1>
          <br>

          <div style="text-align: left !important">
            Somos una empresa dedicada a la venta y alquiler de maquinaria de
            construcción y agrícola, con las mejores opciones tecnológicas.
            Contamos con la distribución exclusiva de la marca MST, una marca
            europea y fabricada en Turquía. Gracias a la amplia red de servicios
            y piezas de repuesto de alta disponibilidad que ofrece la marca MST,
            nos permitirá brindar un servicio de alta calidad y sin problemas
            para nuestros clientes.
            <br>
            <br>
            <h3>VISION</h3>
            Ser una empresa líder en maquinaria de construcción y
            agrícola.
            <br>
            <br>
            <h3>MISION</h3>
            Nuestra misión es colocar la marca en las mejores empresas
            de mediana y alta gama en los sectores constructivos y agrícolas,
            proporcionando al mercado equipos de construcción y agrícola
            ventajosos y de alta calidad.
          </div>
        </base-section-heading>

        <div class="py-4" />

        <v-btn
          class="font-weight-bold"
          color="primary"
          light
          min-width="168"
          x-large
          to="/Contact"
        >
          Contáctenos

          <v-icon right>
            mdi-open-in-new
          </v-icon>
        </v-btn>
      </base-section>
    </div>
  </the-post>
</template>
