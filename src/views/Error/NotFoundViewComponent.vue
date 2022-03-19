<script>
// Extensions
  import View from '@/views/View'

  // Mixins
  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'FourOhFour',

    metaInfo: { title: 'Oops! Error' },

    extends: View,

    mixins: [LoadSections(['404', 'contact-us'])],

    props: {
      id: {
        type: String,
        default: 'about',
      },
    },
  }
</script>
