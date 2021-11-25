<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="flip-up")
        span 1
      h1 Diagnóstico empresarial

    Card2(data-aos="fade-down")(
      :img="require('@/assets/curso/tema1-img1.svg')"
      text="También llamado diagnóstico organizacional es un estudio que permite evaluar la situación de una empresa en un momento dado, partiendo de factores del microentorno y macroentorno que pueden impactar positiva o negativamente en su proceso productivo, siempre es fundamental conocer el contexto organizacional de cualquier empresa a nivel interno y externo, entendiendo estos como las herramientas para conocer su estructura si se desea hacer cambios a cualquier nivel: comercial, corporativo, económicos y tecnológicos que permitan conocer la realidad de la empresa."
    )

    p.mb-5(data-aos="fade-left")
      strong Según lo expuesto, se puede observar en el siguiente video cómo realizar un diagnóstico organizacional en la empresa.

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-8
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/PHwgIYMHomY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p.mb-5.text-center(data-aos="fade-down")
      strong Según SENA (2014):

    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-lg-10
        .bloque-texto-f.color-acento-contenido.pt-4.px-5
          .bloque-texto-f__comillas
            i.fas.fa-quote-left
            i.fas.fa-quote-right
          h4.text-regular.bloque-texto-f__texto El microentorno está compuesto por factores que interactúan e influyen en la dinámica de una empresa. Entre ellos podemos encontrar a los clientes, los proveedores, las entidades financieras, la competencia, socios, intermediarios y la empresa como tal. Así mismo, en un ámbito general se estudian los factores del macroentorno compuesto por fuerzas difíciles de controlar para la organización y que pueden convertirse en amenazas u oportunidades en un momento dado, dependiendo del radar que posea la empresa para aprovechar o mitigar su impacto. Entre ellos podemos encontrar factores económicos, políticos, legales, tecnológicos, sociales y ambientales”.
          .bloque-texto-f__avatar
            .bloque-texto-f__avatar__img
              img(src='@/assets/curso/tema1-img2.svg', alt='Texto que describa la imagen')

    p.mb-5(data-aos="fade-down")
      strong
        | Los grupos de interés que influyen dentro del
        span.resaltar microentorno
        | de una organización son los siguientes:

    TabsA.color-acento-botones.mb-5(data-aos="fade-left")
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

    p.mb-5(data-aos="fade-down" data-aos-duration="600")
      strong
        | El
        span.resaltar microentorno
        | está compuesto por fuerzas que no se pueden controlar y pueden impactar en el proceso productivo de una organización.


    .row.justify-content-center.mb-5
      .col-lg-10
        .row
          .col(data-aos="fade-left" data-aos-duration="600")
            .indicador__container
              .indicador--click
            figure.button-temp(@click="updateModal('Factores Económicos', content1)")
              img(src="@/assets/curso/tema1-img21.svg")
          .col(data-aos="fade-up" data-aos-duration="600")
            figure.button-temp(@click="updateModal('Factores Político - Legales', content2)")
              img(src="@/assets/curso/tema1-img22.svg")
          .col(data-aos="fade-down" data-aos-duration="600")
            figure.button-temp(@click="updateModal('Factores Tecnológicos', content3)")
              img(src="@/assets/curso/tema1-img23.svg")
          .col(data-aos="fade-up" data-aos-duration="600")
            figure.button-temp(@click="updateModal('Factores Sociales', content4)")
              img(src="@/assets/curso/tema1-img24.svg")
          .col(data-aos="fade-right" data-aos-duration="600")
            figure.button-temp(@click="updateModal('Factores Ambientales', content5)")
              img(src="@/assets/curso/tema1-img25.svg")

    Separador

    #t_1_1.titulo-segundo.color-primario(data-aos="fade-down" data-aos-duration="600")
      h2 1.1  Técnicas de recolección de información

    p.mb-5(data-aos="fade-down" data-aos-duration="600") Una vez recolectada la información se requiere de herramientas de diagnóstico que permitan organizar e interpretar los datos recolectados para su respectivo análisis. Por lo anterior, estas herramientas pueden ser aplicables a los procesos que desarrollan las organizaciones, independiente si son de servicios, manufactura, o administrativas. Lo más recomendable es adaptar las técnicas a las necesidades particulares de cada organización.

    .row.mb-5(data-aos="fade-left" data-aos-duration="600")
      .col-md-8
        Card(
          title="Diagrama de Pareto"
          :img="require('@/assets/curso/tema1-img8.svg')"
          description="El diagrama de Pareto es un método coordinado para identificar, calificar y tratar de eliminar de manera permanente los defectos. Es un tipo especial de histograma con el que se busca aislar los defectos principales de los problemas triviales con el fin de solucionar con eficiencia las dificultades más representativas del sistema estudiado. Se concentra en las fuentes importantes de error. La regla es 80/20: 80% de los problemas se deben al 20% de las causas (Bautista y Robayo, 2019). ")

    p.mb-5(data-aos="fade-down" data-aos-duration="600") A continuación, se presenta una figura con un ejemplo del diagrama de Pareto.

    .titulo-sexto.color-acento-botones.mb-5(data-aos="fade-down" data-aos-duration="600")
      h5 Figura 1
      span Diagrama de Pareto (ejemplo análisis por devoluciones de mercancía)

    .row.justify-content-center.mb-5(data-aos="fade-up" data-aos-duration="600")
      .col-lg-9
        figure
          img(src="@/assets/curso/tema1-img9.svg")

    .row.mb-5(data-aos="fade-left" data-aos-duration="600")
      .col-md-8
        Card(
          title="Diagrama de causa y efecto"
          :img="require('@/assets/curso/tema1-img10.svg')"
          description="Esta clase de diagrama también es llamado diagrama de espina de pescado. Se emplea como herramienta de control de tipo gráfico que se aplica con el fin de determinar por medio de un análisis sistémico profundo, coherente y conciso, la conexión entre las variables del proceso y el atributo estudiado. En la figura 2 se ilustra la forma en la cual estos factores están vinculados a un efecto potencial o problema.")

    .titulo-sexto.color-acento-botones.mb-5(data-aos="fade-down" data-aos-duration="600")
      h5 Figura 2
      span Estructura del diagrama de causa y efecto o espina de pescado

    .row.justify-content-center.mb-5(data-aos="fade-down" data-aos-duration="600")
      .col-lg-9
        figure
          img(src="@/assets/curso/tema1-img11.svg")

    .row.mb-5(data-aos="fade-left" data-aos-duration="600")
      .col-md-8
        Card(
          title="Matriz DOFA"
          :img="require('@/assets/curso/tema1-img12.svg')"
          description="Esta matriz es una herramienta administrativa esencial para la planeación de estrategias, su aplicación logra estudiar los factores internos y externos que afectan de forma positiva o negativa la actuación de la organización.  Este instrumento permite identificar acciones viables para potenciar las fortalezas y oportunidades, y a su vez, mitigar las debilidades y amenazas (Programa de Transformación Productiva, 2015).")

    p.mb-5(data-aos="fade-down" data-aos-duration="600")
      strong La matriz DOFA está compuesta por los siguientes elementos:

    .row.mb-5.g-4
      .col-sm-6.col-xl-3.mb-4.mb-xl-0.d-flex(data-aos="fade-up" data-aos-duration="600")
        .tarjeta.tarjeta-flip.color-acento-botones(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1-img13.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              h1 Debilidades
              p Debilidades. Hace parte del diagnóstico interno de la empresa. Con este factor se busca aquellos elementos que afectan su desempeño o limitan la actividad. Los elementos negativos pueden evitar que alcances los objetivos propuestos, y todos ellos son los que debes ubicar en la casilla de debilidades.
      .col-sm-6.col-xl-3.mb-4.mb-xl-0.d-flex(data-aos="fade-left" data-aos-duration="600")
        .tarjeta.tarjeta-flip.color-acento-botones(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1-img14.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              h1 Oportunidades
              p Para analizarlas necesitas observar fuera de la compañía. Son aquellas que pueden jugar a favor de tu operación, ayudarte a crecer y mejorar sus beneficios. No importa el límite de las oportunidades, las podrás encontrar en el incremento de precios de la competencia, en una oportunidad de exportación, entre muchas otras.
      .col-sm-6.col-xl-3.mb-4.mb-xl-0.d-flex(data-aos="fade-right" data-aos-duration="600")
        .tarjeta.tarjeta-flip.color-acento-botones(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1-img15.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              h1 Fortalezas
              p Este factor también se relaciona con elementos internos de la empresa. Evidencia los elementos positivos de la labor que desempeña, la hace más competitiva y le permite lograr sus objetivos. Estos puntos fuertes son los que escribes en la casilla fortalezas.
      .col-sm-6.col-xl-3.mb-4.mb-xl-0.d-flex(data-aos="fade-down" data-aos-duration="600")
        .tarjeta.tarjeta-flip.color-acento-botones(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1-img16.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              h1 Amenazas
              p Al realizar el análisis externo también encontrarás amenazas que son factores que impedirán el crecimiento de la empresa, evitarán que la estrategia que estás desempeñando o implementarás pueda seguir adelante. Si conoces las amenazas, será más fácil afrontarlas.

    .row.mb-5.justify-content-center(data-aos="fade-down" data-aos-duration="600")
      .col-md-8
        .row.multicolor.align-items-center.mb-5
          .col-lg-8
            p.mb-0.px-4.text-white Teniendo en cuenta las definiciones de cada elemento que compone la matriz DOFA, se invita a ver el siguiente video explicativo.
          .col-lg-3.offset-lg-1
            figure.p-5
              img(src="@/assets/curso/tema1-img18.svg")
        figure.mb-5
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/84fuGpQeYg0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .titulo-sexto.color-acento-botones.mb-4(data-aos="fade-down" data-aos-duration="600")
      h5 Tabla 1
      span Ejemplo matriz DOFA

    .row.mb-5.justify-content-center(data-aos="fade-down" data-aos-duration="600")
      .col-md-8
        figure.mb-5
          img(src="@/assets/curso/tema1-img19.svg")
        figure.mb-5
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/84fuGpQeYg0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        .row.multicolor.align-items-center.mb-5.clicker(@click="openNewTab(obtenerLink('/downloads/Anexo_2_plantilla_matriz_DOFA.xlsx'))")
          .col-lg-8
            .indicador__container
              .indicador--click
            p.mb-0.px-4.text-white A continuación dar click para descargar el archivo Anexo_2_Plantilla_matriz_DOFA.xls
              br
              br
              | Diligencie la matriz teniendo en cuenta las indicaciones de su instructor.

          .col-lg-3.offset-lg-1
            figure.p-5
              img(src="@/assets/curso/tema1-img20.svg")

    ModalA(:abrir-modal.sync="modal1")
      .row.align-items-center
        .col-12.mb-4.mb-md-0
          h4.mb-5 {{ title }}
          div(v-html="content")

</template>

<script>
import Card from '../components/Card.vue'
import Card2 from '../components/Card2.vue'
export default {
  name: 'Tema1',
  components: {
    Card,
    Card2,
  },
  data: () => ({
    // variables de vue
    modal1: false,
    title: '',
    content: '',
    content1: `
            <strong>Nivel de inflación</strong>. Ocurre cuando el Gobierno sube el nivel de inflación, como consecuencia se genera aumento de los diferentes costos para las empresas y esto conlleva a que esta deba vender a precios más altos, impactando negativamente el aumento de las ventas.
            <br>
            <br>
            <strong>Política Fiscal</strong>.  El Gobierno nacional decide subir los impuestos afectado a una organización de forma negativa, por ello la obliga a pagar más gravámenes y disminuyendo la circulación de dinero, es decir, las ventas.
            <br>
            <br>
            <strong>Política monetaria</strong>. Se presenta cuando se disminuyen las tasas de interés, por ello una organización podrá conseguir préstamos más baratos y las personas se motivan a comprar más.`,
    content2: `Estos factores hacen referencia al análisis de leyes, códigos, instituciones públicas y privadas y corrientes ideológicas. La influencia que ejerce el proceso político-legal de las sociedades en el comportamiento de las organizaciones es cada vez mayor.
            <br>
            <br>
            <strong></strong>Los indicadores que más las afectan son:</strong>
            <br>
            <br>
            <ul class="lista-ul--color">
              <li>
                <i class="fas fa-check"></i>
                Legislación tributaria, comercial, laboral y penal.
              </li>
              <li>
                <i class="fas fa-check"></i>
                Legislación sobre protección ambiental.
              </li>
              <li>
                <i class="fas fa-check"></i>
                Legislación estatal y municipal.
              </li>
              <li>
                <i class="fas fa-check"></i>
                Política de relaciones internacionales.
              </li>
              <li>
                <i class="fas fa-check"></i>
                Políticas de regulación, desregularización y privatización.
              </li>
            </ul>
`,
    content3: `<strong>Telecomunicaciones</strong>.  Los sistemas móviles se convirtieron en el medio ideal de las empresas para persuadir y llegar a sus consumidores finales. La posibilidad de impactar directamente a su público objetivo donde se encuentre es una oportunidad de llevar en tiempo real su mensaje a su segmento objetivo.
            <br>
            <br>
            <strong>Software libre</strong>.  El aumento del software libre vs. el licenciado y la necesidad del desarrollo de software para industrias con sistemas de operación muy específicos que requieren soluciones, que no sean genéricas, se ha convertido en una tendencia global, impactando positivamente en el contexto operativo de las unidades productivas.
            <br>
            <br>
            <strong>Desarrollo tecnológico para optimizar el proceso productivo</strong>. Surgen también nuevas tecnologías basadas en el desarrollo de microprocesadores para mejorar procesos de producción.
`,
    content4: `Son múltiples las variables que se toman en cuenta en este aspecto. A veces incluyen el número de nacimientos, la tasa de esperanza de vida, matrimonios, divorcios, defunciones, las tasas de emigración e inmigración, la ubicación de las empresas y los sitios de residencia de una ciudad, el sistema de seguridad social y los programas para lograrlo, el nivel y cobertura de servicios públicos, entre otros.
            <br>
            <br>
            También se estiman aspectos que involucran la moda y sus diferentes expresiones, así como la influencia y valoración del arte y la cultura. El cuidado y uso de lo público, la participación ciudadana y la preservación de los sitios de interés son otras variables de importancia.`,
    content5: `<strong>Consideraciones medioambientales</strong>.  Todas las empresas, sin importar su industria y tamaño, generan algún impacto en el medio ambiente.
            <br>
            <br>
            <strong>Responsabilidad ambiental</strong>.  Todas las empresas son propensas a generar contaminación y se hace hincapié, específicamente, en los cambios desfavorables que afectan las características biológicas, físicas o químicas del agua, del aire o de la tierra.
            <br>
            <br>
            <strong>Sostenibilidad</strong>. Se refiere a satisfacer las necesidades de la actual generación, sin afectar el entorno, las diferentes especies y ecosistemas con la intención de dar cumplimiento a los objetivos individuales de un sector industrial específico o del ser humano. `,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
  methods: {
    updateModal(title, content) {
      this.modal1 = true
      this.title = title
      this.content = content
    },
    openNewTab(url) {
      window.open(url, '_blank')
    },
  },
}
</script>

<style lang="sass"></style>
