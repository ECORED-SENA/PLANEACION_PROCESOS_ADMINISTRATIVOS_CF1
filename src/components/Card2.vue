<template lang="pug">
.row.mb-5.px-5.card2
  .col-lg-3.px-5.py-5.d-flex
    figure.p-5
      img(:src="img")
  .col-lg-9.px-5.py-5.d-flex
    p.mb-0.p-4 {{ text }}

</template>

<script>
export default {
  name: 'Card2',
  props: {
    img: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
}
</script>
