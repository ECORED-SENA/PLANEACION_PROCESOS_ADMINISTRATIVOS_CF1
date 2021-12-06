<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="flip-up")
        span
          i.fas.fa-info
      h1 Introducción

    .cajon-b.color-primario.p-3.mb-5(data-aos="slide-left")
      p.mb-0 El proceso administrativo permite a una organización direccionar y gestionar sus recursos de forma eficiente para alcanzar sus objetivos. Dicho proceso está compuesto por las etapas de planeación, organización, dirección y control. La planeación es la primera y la etapa más importante del proceso, ya que, mediante el diagnóstico y el análisis organizacional, se conoce el panorama empresarial en el que se desenvuelve la empresa, con el objeto de analizar fortaleza, debilidades, oportunidades y amenazas que, a través de la formulación de estrategias traducidas en acciones, permiten a la empresa desarrollarse de forma productiva y competitiva en el mercado. Por lo anterior se invita a observar el siguiente video.

    .row.justify-content-center(data-aos="slide-right")
      .col-lg-8
        figure.mb-5
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/VTtNn6Z9Q0Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
