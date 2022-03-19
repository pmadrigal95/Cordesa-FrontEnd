<script>
// Extensions
  import View from '@/views/View'

  // Mixins
  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'About',

    metaInfo: { title: 'Acerca de' },

    extends: View,

    mixins: [LoadSections(['about', 'contact-us'])],

    props: {
      id: {
        type: String,
        default: 'about',
      },
    },
  }
</script>
