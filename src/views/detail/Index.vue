<script>
// Extensions
  import View from '@/views/View'

  // Mixins
  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'Detail',

    metaInfo: { title: 'Detalles' },

    extends: View,

    mixins: [LoadSections(['contact-us'])],

    props: {
      id: {
        type: String,
        default: 'detail',
      },
    },
  }
</script>
