<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Diagnóstico empresarial


    p.mb-5
      strong Según lo expuesto, se puede observar en el siguiente video cómo realizar un diagnóstico organizacional en la empresa.

    .row.justify-content-center.mb-5
      .col-lg-8
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p.mb-5.text-center
      strong Según SENA (2014):

    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-f.color-acento-contenido.pt-4.px-5
          .bloque-texto-f__comillas
            i.fas.fa-quote-left
            i.fas.fa-quote-right
          h4.text-regular.bloque-texto-f__texto El microentorno está compuesto por factores que interactúan e influyen en la dinámica de una empresa. Entre ellos podemos encontrar a los clientes, los proveedores, las entidades financieras, la competencia, socios, intermediarios y la empresa como tal. Así mismo, en un ámbito general se estudian los factores del macroentorno compuesto por fuerzas difíciles de controlar para la organización y que pueden convertirse en amenazas u oportunidades en un momento dado, dependiendo del radar que posea la empresa para aprovechar o mitigar su impacto. Entre ellos podemos encontrar factores económicos, políticos, legales, tecnológicos, sociales y ambientales”.
          //- .bloque-texto-f__autor.mb-3
          //-   h3.mb-0 The graphic designer
          .bloque-texto-f__avatar
            .bloque-texto-f__avatar__img
              img(src='@/assets/curso/tema1-img2.svg', alt='Texto que describa la imagen')

    p.mb-5
      strong
        | Los grupos de interés que influyen dentro del
        span.resaltar microentorno
        | de una organización son los siguientes:

    TabsA.color-acento-botones.mb-5
      //- .tarjeta debe ir acompañado de una de una de estas clases =>
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .tarjeta.color-acento-botones.py-4.px-5(titulo="Clientes")
        .row.align-items-center
          .col-lg-8.mb-5.mb-lg-0
            p.mb-0
              strong Clientes
              br
              br
              | Generalmente, los clientes conforman el grupo de interés más grande de una organización, en tanto que son ellos quienes, a través de sus preferencias e intereses, determinan posibles áreas de acción para que una empresa pueda incursionar. Cualquier cambio en sus preferencias y gustos puede suponer en muchos casos una excelente oportunidad o, por el contrario, puede constituirse en un grave riesgo. Estos cambios pueden darse muy rápido o muy lento, pero es imprescindible que las empresas los detecten y puedan adaptarse fácilmente a ellos.
          .col-lg-4
            figure.p-5
              img(src="@/assets/curso/tema1-img3.svg")
      .tarjeta.color-acento-botones.py-4.px-5(titulo="Competencia")
        .row.align-items-center
          .col-lg-8.mb-5.mb-lg-0
            p.mb-0
              strong Competencia
              br
              br
              | Es de vital importancia conocer cuáles son los elementos básicos que permiten establecer la actividad competitiva o el grado de rivalidad de las empresas que hacen parte del sector específico donde se desempeña una organización. Así mismo, el tipo de competencia se podrá identificar teniendo en cuenta el número de competidores, la diversidad de estrategias, la estructura de costes, la evolución de la demanda, entre otros elementos, lo cual puede precisarse en un conjunto de ventajas competitivas.
          .col-lg-4
            figure.p-5
              img(src="@/assets/curso/tema1-img4.svg")
      .tarjeta.color-acento-botones.py-4.px-5(titulo="Proveedores")
        .row.align-items-center
          .col-lg-8.mb-5.mb-lg-0
            p.mb-0
              strong Proveedores
              br
              br
              | Constituyen otro grupo de interés de gran relevancia para la organización, en tanto que son ellos quienes proporcionan los recursos e insumos que la empresa necesita para producir bienes y servicios. Los proveedores tienen un efecto directo en la eficiencia de la compañía y un efecto indirecto frente a su capacidad de ganar clientes, si una empresa cuenta con recursos e insumos de alta calidad, así mismo, producirá productos de buena calidad y atraerá más clientes.
          .col-lg-4
            figure.p-5
              img(src="@/assets/curso/tema1-img5.svg")
      .tarjeta.color-acento-botones.py-4.px-5(titulo="Accionistas")
        .row.align-items-center
          .col-lg-8.mb-5.mb-lg-0
            p.mb-0
              strong Accionista
              br
              br
              | Son las personas que proporcionan capital e inversiones a la empresa; su principal interés está dirigido a la rentabilidad, transparencia e integridad administrativa. Allí se destaca todo lo relacionado con el gobierno corporativo que está compuesto por los accionistas, los directivos y el consejo administrativo, y se basa en establecer y controlar la dirección estratégica y su desempeño en lo que respecta a las expectativas de la empresa; es un mecanismo que da fuerza estratégica a las organizaciones y refleja las normas de la organización.
          .col-lg-4
            figure.p-5
              img(src="@/assets/curso/tema1-img6.svg")
      .tarjeta.color-acento-botones.py-4.px-5(titulo="Sector Financiero")
        .row.align-items-center
          .col-lg-8.mb-5.mb-lg-0
            p.mb-0
              strong Sector Financiero
              br
              br
              | Es la agrupación de las entidades públicas y privadas encargadas de desarrollar actividades de administración, utilización, aprovechamiento e inversión de los recursos captados en el país.
          .col-lg-4
            figure.p-5
              img(src="@/assets/curso/tema1-img7.svg")

    p.mb-5
      strong
        | El
        span.resaltar microentorno
        | está compuesto por fuerzas que no se pueden controlar y pueden impactar en el proceso productivo de una organización.

    .titulo-segundo.color-primario
      h2 1.1  Técnicas de recolección de información

    p.mb-5 Una vez recolectada la información se requiere de herramientas de diagnóstico que permitan organizar e interpretar los datos recolectados para su respectivo análisis. Por lo anterior, estas herramientas pueden ser aplicables a los procesos que desarrollan las organizaciones, independiente si son de servicios, manufactura, o administrativas. Lo más recomendable es adaptar las técnicas a las necesidades particulares de cada organización.

    .row.mb-5
      .col-md-8
        Card(
          title="Diagrama de Pareto"
          :img="require('@/assets/curso/tema1-img8.svg')"
          description="El diagrama de Pareto es un método coordinado para identificar, calificar y tratar de eliminar de manera permanente los defectos. Es un tipo especial de histograma con el que se busca aislar los defectos principales de los problemas triviales con el fin de solucionar con eficiencia las dificultades más representativas del sistema estudiado. Se concentra en las fuentes importantes de error. La regla es 80/20: 80% de los problemas se deben al 20% de las causas (Bautista y Robayo, 2019). ")

    p.mb-5 A continuación, se presenta una figura con un ejemplo del diagrama de Pareto.

    .titulo-sexto.color-acento-botones.mb-5
      h5 Figura 1
      span Diagrama de Pareto (ejemplo análisis por devoluciones de mercancía)

    .row.justify-content-center.mb-5
      .col-lg-9
        figure
          img(src="@/assets/curso/tema1-img9.svg")

    .row.mb-5
      .col-md-8
        Card(
          title="Diagrama de causa y efecto"
          :img="require('@/assets/curso/tema1-img10.svg')"
          description="Esta clase de diagrama también es llamado diagrama de espina de pescado. Se emplea como herramienta de control de tipo gráfico que se aplica con el fin de determinar por medio de un análisis sistémico profundo, coherente y conciso, la conexión entre las variables del proceso y el atributo estudiado. En la figura 2 se ilustra la forma en la cual estos factores están vinculados a un efecto potencial o problema.")

    .titulo-sexto.color-acento-botones.mb-5
      h5 Figura 2
      span Estructura del diagrama de causa y efecto o espina de pescado

    .row.justify-content-center.mb-5
      .col-lg-9
        figure
          img(src="@/assets/curso/tema1-img11.svg")

    .row.mb-5
      .col-md-8
        Card(
          title="Matriz DOFA"
          :img="require('@/assets/curso/tema1-img12.svg')"
          description="Esta matriz es una herramienta administrativa esencial para la planeación de estrategias, su aplicación logra estudiar los factores internos y externos que afectan de forma positiva o negativa la actuación de la organización.  Este instrumento permite identificar acciones viables para potenciar las fortalezas y oportunidades, y a su vez, mitigar las debilidades y amenazas (Programa de Transformación Productiva, 2015).")

    p.mb-5
      strong La matriz DOFA está compuesta por los siguientes elementos:

    .row.mb-5.g-4
      .col-sm-6.col-xl-3.mb-4.mb-xl-0.d-flex
        .tarjeta.tarjeta-flip.color-acento-botones(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1-img13.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              h1 Debilidades
              p Debilidades. Hace parte del diagnóstico interno de la empresa. Con este factor se busca aquellos elementos que afectan su desempeño o limitan la actividad. Los elementos negativos pueden evitar que alcances los objetivos propuestos, y todos ellos son los que debes ubicar en la casilla de debilidades.
      .col-sm-6.col-xl-3.mb-4.mb-xl-0.d-flex
        .tarjeta.tarjeta-flip.color-acento-botones(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1-img14.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              h1 Oportunidades
              p Para analizarlas necesitas observar fuera de la compañía. Son aquellas que pueden jugar a favor de tu operación, ayudarte a crecer y mejorar sus beneficios. No importa el límite de las oportunidades, las podrás encontrar en el incremento de precios de la competencia, en una oportunidad de exportación, entre muchas otras.
      .col-sm-6.col-xl-3.mb-4.mb-xl-0.d-flex
        .tarjeta.tarjeta-flip.color-acento-botones(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1-img15.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              h1 Fortalezas
              p Este factor también se relaciona con elementos internos de la empresa. Evidencia los elementos positivos de la labor que desempeña, la hace más competitiva y le permite lograr sus objetivos. Estos puntos fuertes son los que escribes en la casilla fortalezas.
      .col-sm-6.col-xl-3.mb-4.mb-xl-0.d-flex
        .tarjeta.tarjeta-flip.color-acento-botones(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1-img16.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              h1 Amenazas
              p Al realizar el análisis externo también encontrarás amenazas que son factores que impedirán el crecimiento de la empresa, evitarán que la estrategia que estás desempeñando o implementarás pueda seguir adelante. Si conoces las amenazas, será más fácil afrontarlas.

    .row.mb-5.justify-content-center
      .col-md-8
        .row.multicolor.align-items-center.mb-5
          .col-lg-8
            p.mb-0.px-4.text-white Teniendo en cuenta las definiciones de cada elemento que compone la matriz DOFA, se invita a ver el siguiente video explicativo.
          .col-lg-3.offset-lg-1
            figure.p-5
              img(src="@/assets/curso/tema1-img18.svg")
        figure.mb-5
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .titulo-sexto.color-acento-botones.mb-4
      h5 Tabla 1
      span Ejemplo matriz DOFA

    .row.mb-5.justify-content-center
      .col-md-8
        figure.mb-5
          img(src="@/assets/curso/tema1-img19.svg")
        figure.mb-5
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/84fuGpQeYg0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        .row.multicolor.align-items-center.mb-5
          .col-lg-8
            p.mb-0.px-4.text-white Dirigirse a la carpeta Anexos y descargar el archivo denominado: Anexo_2_Plantilla matriz DOFA.xls
              br
              br
              | Diligencie la matriz teniendo en cuenta las indicaciones de su instructor.

          .col-lg-3.offset-lg-1
            figure.p-5
              img(src="@/assets/curso/tema1-img20.svg")
    //- //- El componente "Muestras" tiene las aplicaciones de todos los componentes de la base
    //- //- se encuentra en src/components/Muestras.vue
    //- //- Una vez el componente "Muestras" no se necesite
    //- //- Se debe borrar el "import Muestras from '../components/Muestras'" y en "components" en "<script"
    //- //- esto evitará que se compile en la carpeta final de distribución
    //- Muestras

</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
import Card from '../components/Card.vue'
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
    Card,
  },
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
