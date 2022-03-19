<script>
// Extensions
  import View from '@/views/View'

  // Mixins
  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'ContactUs',

    metaInfo: { title: 'Contacto' },

    extends: View,

    mixins: [LoadSections(['keep-in-touch', 'map', 'contact-us'])],

    props: {
      id: {
        type: String,
        default: 'contact',
      },
    },
  }
</script>
