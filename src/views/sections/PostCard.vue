<script>
  export default {
    name: 'PostCard',
    props: {
      post: {
        type: Object,
        default: () => ({
          desc: undefined,
          img: undefined,
          titulo: undefined,
        }),
      },
    },

    methods: {
      $goToGallery (id) {
        this.$router.push({
          name: 'Gallery',
          params: { Id: id },
        })
      },
    },
  }
</script>

<template>
  <v-card @click="$goToGallery(post.id)">
    <v-img
      :src="require(`@/assets/maquinaria/${post.img}`)"
      :lazy-src="require(`@/assets/maquinaria/${post.img}`)"
      height="200"
    >
      <template #placeholder>
        <v-row
          class="fill-height ma-0"
          align="center"
          justify="center"
        >
          <v-progress-circular
            indeterminate
            color="grey lighten-5"
          />
        </v-row>
      </template>
      <v-hover>
        <template #default="{ hover }">
          <v-overlay
            :color="hover ? 'white' : 'black'"
            absolute
            class="align-end pa-3 justify-start"
            opacity=".2"
          >
            <v-btn
              color="#252525"
              dark
              small
            >
              CORDESA
            </v-btn>
          </v-overlay>
        </template>
      </v-hover>
    </v-img>

    <div class="pb-4">
      <v-card-title
        style="
                    letter-spacing: normal !important;
                    text-overflow: ellipsis;
                "
        class="headline font-weight-bold mb-3"
        v-text="post.titulo"
      />

      <v-card-text class="body-1">
        <div v-html="post.desc" />
        <base-divider color="primary" />
      </v-card-text>
    </div>
  </v-card>
</template>
