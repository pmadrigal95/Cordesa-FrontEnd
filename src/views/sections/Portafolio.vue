<script>
  export default {
    name: 'Portfolio',
    components: {
      PostCard: () => import('@/views/sections/PostCard'),
    },

    data () {
      return {
        entity: [
          {
            id: 1,
            desc: 'Alta configuración y eficiencia El motor Cummins potente, robusto y duradero reduce ...',
            img: 'Excavadora ZE370E/1.jpg',
            titulo: 'Excavadora ZE370E',
          },
          {
            id: 2,
            desc: 'Poder fuerte y eficiente El motor CUMMINS diseñado profesionalmente tiene ventajas tales ...',
            img: 'Excavadora ZE135E-10/1.jpg',
            titulo: 'Excavadora ZE135E-10',
          },
          {
            id: 3,
            desc: 'Gran poder El motor Stage III CUMMINS es potente, robusto y duradero. ...',
            img: 'Excavadora ZE550EK-10/1.jpg',
            titulo: 'Excavadora ZE550EK-10',
          },
          {
            id: 4,
            desc: 'Alta configuración y eficiencia El motor Cummins potente, robusto y duradero reduce ...',
            img: 'Excavadora ZE245E/1.jpg',
            titulo: 'Excavadora ZE245E',
          },
          {
            id: 5,
            desc: 'Ahorro de energía y alta eficiencia El coste del combustible se controla ...',
            img: 'Excavadora ZE75E-10/1.jpg',
            titulo: 'Excavadora ZE75E-10',
          },
          {
            id: 6,
            desc: 'Alta configuración y eficiencia El potente, robusto y duradero motor CUMMINS QSM11 ...',
            img: 'Excavadora ZE490EK-10/1.jpg',
            titulo: 'Excavadora ZE490EK-10',
          },
          {
            id: 7,
            desc: 'Ahorro de energía y alta eficiencia. Control de integración electromecánico-hidráulico preciso que ...',
            img: 'Excavadora ZE215E/1.jpg',
            titulo: 'Excavadora ZE215E',
          },
          {
            id: 8,
            desc: 'Excavadora de cadenas ZE60E-10 Ahorro de energía y alta eficiencia El sistema de ...',
            img: 'Excavadora ZE60E-10/1.jpg',
            titulo: 'Excavadora ZE60E-10',
          },
          {
            id: 9,
            desc: 'PRIMERA Y ÚNICA CARRETILLAELEVADORA TELESCÓPICA DE PRODUCCIÓN NACIONAL DE TURQUÍA “MST” Los montacargas ...',
            img: 'Manipulador ST940/1.jpg',
            titulo: 'Manipulador ST940',
          },
          {
            id: 10,
            desc: 'CABINA ERGONÓMICA Y CÓMODA DE MÁXIMA EFICIENCIA El nuevo diseño de la cabina ...',
            img: 'Retroexcavadora MST 542S/1.jpg',
            titulo: 'Retroexcavadora MST 542S',
          },
        ],
      }
    },
  }
</script>

<template>
  <v-container
    id="blog"
    class="pa-0"
    fluid
    tag="section"
  >
    <base-section-heading
      color="primary"
      title="Nuestros Equipos"
    >
      <p>
        Los logros de una organización son los resultados del esfuerzo combinado
        de todos los individuos…
      </p>
    </base-section-heading>

    <div class="py-4" />

    <v-responsive
      class="mx-auto"
      max-width="1280"
    >
      <v-container>
        <v-row>
          <v-col
            v-for="(post, i) in entity"
            :key="i"
            class="d-flex"
            cols="12"
            md="4"
          >
            <post-card :post="post" />
          </v-col>
        </v-row>
      </v-container>
    </v-responsive>
  </v-container>
</template>
