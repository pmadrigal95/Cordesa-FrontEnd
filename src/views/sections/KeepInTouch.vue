<script>
  export default {
    name: 'SectionKeepInTouch',
  }
</script>

<template>
  <base-section
    id="info-alt"
    space="56"
  >
    <v-container>
      <v-row justify="space-between">
        <v-col
          cols="12"
          md="5"
        >
          <base-business-info />
        </v-col>

        <v-col
          cols="12"
          md="6"
        >
          <base-contact-form
            title="Hola"
          />
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>
