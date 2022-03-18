<template>
  <base-section
    id="features"
    class="secondary"
  >
    <v-responsive
      class="mx-auto"
      max-width="1350"
    >
      <v-container fluid>
        <v-row>
          <v-col
            v-for="card in cards"
            :key="card.title"
            cols="12"
            sm="4"
            md="3"
          >
            <base-info-card
              align="center"
              dark
              v-bind="card"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-responsive>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionFeatures',

    data: () => ({
      cards: [
        {
          icon: 'mdi-earth',
          title: 'Países Representados',
          title2: '3 +',
        },
        {
          icon: 'mdi-emoticon-happy-outline',
          title: 'Clientes Satisfechos',
          title2: '12 +',
        },
        {
          icon: 'mdi-face-agent',
          title: '% Satisfaccíon',
          title2: '100 %',
        },
        {
          icon: 'mdi-account-group-outline',
          title: 'Clientes Activos',
          title2: '85 %',
        },
      ],
    }),
  }
</script>
