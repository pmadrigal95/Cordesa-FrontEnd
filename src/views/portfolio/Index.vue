<script>
// Extensions
  import View from '@/views/View'

  // Mixins
  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'Portfolio',

    metaInfo: { title: 'Máquinaria' },

    extends: View,

    mixins: [LoadSections(['portafolio', 'social-media', 'contact-us'])],

    props: {
      id: {
        type: String,
        default: 'portfolio',
      },
    },
  }
</script>
