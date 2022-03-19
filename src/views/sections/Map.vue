<script>
  export default {
    name: 'SectionMap',

    provide: {
      heading: { align: 'center' },
    },
  }
</script>

<template>
  <base-section
    id="map"
    space="0"
  >
    <iframe
      allowfullscreen
      aria-hidden="false"
      frameborder="0"
      height="500"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.9882616453897!2d-84.19172298564794!3d9.934934192895755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0feabb7c2f1a1%3A0xce7672c564b4bc34!2sPlaza%20Murano!5e0!3m2!1ses!2scr!4v1626936898034!5m2!1ses!2scr"
      style="border: 0; display: block"
      tabindex="0"
      width="100%"
    />
  </base-section>
</template>
