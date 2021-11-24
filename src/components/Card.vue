<template lang="pug">
.card-container
  div
    .w-auto.mb-0.py-2.px-3.title
      strong {{ title }}
  .tarjeta.color-acento-botones.px-5.py-4.border-radius-no-card
    p.mb-0.me-5 {{ description }}
  img.card-image(:src="img")
</template>

<script>
export default {
  name: 'Card',
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="sass">
.title
  background-color: #F2E9FE
  display: inline-block
</style>
