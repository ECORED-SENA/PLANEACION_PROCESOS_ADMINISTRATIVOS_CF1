<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1  Análisis organizacional

    Card2(
      :img="require('@/assets/curso/tema2-img1.svg')"
      text="Es un procedimiento que ayuda a entender mejor el desempeño de una organización basado en información recolectada con las técnicas de diagnóstico. La metodología del análisis organizacional permite formular estrategias que convertidas en un plan de trabajo ayudan a la empresa a lograr sus objetivos."
    )

    p.mb-5
      strong En la figura que sigue se representa el proceso de análisis estratégico.

    .titulo-sexto.color-acento-botones.mb-4
      h5 Figure 3
      span Análisis estratégico

    .row.justify-content-center.mb-5
      .col-lg-8
        figure
          img(src="@/assets/curso/tema2-img2.svg")

    Separador

    #t_2_1.titulo-segundo.color-primario
      h2 2.1  Herramientas de análisis estratégico

    .row.mb-5
      .col-md-8
        Card(
          title="Análisis matriz DOFA cruzada"
          :img="require('@/assets/curso/tema2-img3.svg')"
          description="Esta matriz considera la identificación de cuatro tipos de estrategias con base en la matriz DOFA y se puede observar en la siguiente presentación.")

    .row.justify-content-center.briefcase-header
      .col-lg-4.col-5
        figure
          img(src="@/assets/curso/tema2-img4.svg")
    .row.justify-content-center.mb-5
      .col-lg-7.briefcase-container
        .row
          .indicador__container
            .indicador--click
          .col.briefcase.box-1.clicker(@click="updateModal(require('@/assets/curso/tema2-img9.svg'), 'Estrategia ofensiva:', content1)")
            figure.mb-2.px-3.py-4
              img(src="@/assets/curso/tema2-img5.svg")
            p.mb-5.text-center
              strong Estrategia <br>ofensiva
          .col.briefcase.box-2.clicker(@click="updateModal(require('@/assets/curso/tema2-img10.svg'), 'Estrategia defensiva:', content2)")
            figure.mb-2.px-3.py-4
              img(src="@/assets/curso/tema2-img6.svg")
            p.mb-5.text-center
              strong Estrategia <br>defensiva
          .col.briefcase.box-3.clicker(@click="updateModal(require('@/assets/curso/tema2-img11.svg'), 'Estrategia de reorientación:', content3)")
            figure.mb-2.px-3.py-4
              img(src="@/assets/curso/tema2-img7.svg")
            p.mb-5.text-center
              strong Estrategia <br>de reordenación
        .row
          .col.briefcase.box-4
          .col.briefcase.box-5.clicker(@click="updateModal(require('@/assets/curso/tema2-img12.svg'), 'Estrategia de supervivencia:', content4)")
            figure.mb-2.px-3.py-4.mt-5
              img(src="@/assets/curso/tema2-img8.svg")
            p.mb-5.text-center
              strong Estrategia <br>de supervivencia
          .col.briefcase.box-6

    ModalA.briefcase-modal(:abrir-modal.sync="modal1")
      .row.align-items-center
        .col-12.mb-4.mb-md-0
          figure.mb-4(style="max-width: 100px")
            img(:src="modal.img")
          p.mb-0
            strong {{ modal.title }}
            br
            | {{ modal.text }}

    p.mb-5
      strong A continuación, se presenta una tabla con un ejemplo de la matriz DOFA cruzada.

    .titulo-sexto.color-acento-botones.mb-4
      h5 Tabla 2
      span Ejemplo matriz DOFA cruzada

    .tabla-b.color-acento-contenido.mb-5
      .tabla-b__header
        h5.mb-0 Matriz de análisis DOFA Cruzada
      table
        tr
          td(colspan="3").text-center Es una herramienta  para el análisis de una situación, mediante el cruce de variables, para la formulación de la estrategia.
        tr
          td(style="width: 30%").fw-bolder.text-center.left FACTORES INTERNOS<br><br><br><br><br><br><br><br>FACTORES EXTERNOS
          td(style="width: 35%")
            p.mb-3.text-center.fw-bolder FORTALEZAS (F)
            p.mb-0 Existe buena comunicación en la empresa.
              br
              | La empresa tiene 30 años de experiencia en el mercado.
              br
              | El servicio de calidad en las asesorías.
              br
              | Se mantiene buen trabajo en equipo.
          td(style="width: 35%").right
            p.mb-3.text-center.fw-bolder DEBILIDADES (D)
            p.mb-0 Mal clima laboral por chismes en la oficina.
            br
            | Sueldo de los trabajadores deficiente.
            br
            | Carece de programas de capacitación.
            br
            | Los trabajadores sienten que no son tomados en cuenta para la toma de decisiones.
        tr
          td(style="width: 30%").left
            p.mb-3.text-center.fw-bolder OPORTUNIDADE (O)
            p.mb-0 Se abrirá una sucursal en la capital.
              br
              | El SENA ofrece un programa de capacitación.
              br
              | Colombia firma convenio de libre comercio con otro país.
              br
              | Aumento de pedidos hacia otras ciudades.
          td(style="width: 35%")
            p.mb-3.text-center.fw-bolder ESTRATEGIA OFENSIVA (FO)
            p.mb-0 Construcción de nuevas sedes en otras ciudades.
              br
              | Solicitar programa de capacitación al SENA.
              br
              | Estudiar nuevos mercados
          td(style="width: 35%").right
            p.mb-3.text-center.fw-bolder ESTRATEGIA DE REORIENTACIÓN (DO)
            p.mb-0 Solicitar al SENA talleres para el manejo de emociones y habilidades blandas.
              br
              | Rediseñar el sistema de escalas salariales.
              br
              | Realizar reuniones periódicamente para escuchar propuestas de mejora de los empleados.
        tr
          td(style="width: 30%").left
            p.mb-3.text-center.fw-bolder AMENAZAS (A)
            p.mb-0 Aumento de la inflación.
              br
              | Alta tasa de desempleo.
              br
              | Reforma tributaria.
          td(style="width: 30%")
            p.mb-3.text-center.fw-bolder ESTRATEGIA DEFENSIVA (FA)
            p.mb-0 Lanzar nueva línea de productos.
          td(style="width: 30%").right
            p.mb-3.text-center.fw-bolder ESTRATEGIA DE SUPERVIVENCIA (DA)
            p.mb-0 Diseñar un programa de beneficios y recompensas para mejorar la calidad de vida de los trabajadores.

    .row.mb-5
      .col-md-8
        Card(
          title="Matriz PEYEA"
          :img="require('@/assets/curso/tema2-img14.svg')"
          description="Según Orozco (2011), la matriz de la posición estratégica y la evaluación de la acción (PEYEA), es una herramienta muy importante que permite identificar si una estrategia es agresiva, conservadora, defensiva o competitiva es la óptima para aplicar una empresa dada. ")

    p.mb-4 Dependiendo del tipo de organización, numerosas variables podrían constituir cada una de las dimensiones representadas en los ejes de la matriz PEYEA, esta se debe preparar para la organización particular que se esté considerando y se debe basar, en la medida de lo posible, en información a base de datos.

    p.mb-5
      strong Los pasos para realizar una matriz PEYEA son los siguientes:

    .row.justify-content-center
      .col-lg-10
        PasosA.color-primario.mb-5(tipo="n")
          .row.align-items-center
            .col-md-8.mb-4.mb-md-0
              p Seleccionar una serie de variables que incluyan la fuerza financiera (FF), la ventaja competitiva (VC), la estabilidad del ambiente (EA) y la fuerza de la industria (FI).
            .col-md-4
              figure.p-5(style="max-width: 60%")
                img(src='@/assets/curso/tema2-img15.svg')
          .row.align-items-center
            .col-md-4.mb-4.mb-md-0
              figure.p-3(style="max-width: 60%")
                img(src='@/assets/curso/tema2-img16.svg')
            .col-md-8
              p Adjudicar un valor numérico de +1 (peor) a +6 (mejor) a cada una de las variables que constituyen las dimensiones FF y FI. Asignar un valor numérico de –1 (mejor) –6 (peor) a cada una de las variables que constituyen las dimensiones VC, EA.
          .row.align-items-center
            .col-md-8.mb-4.mb-md-0
              p Calcular la calificación promedio de FF, VC, EA y FI sumando los valores dados a las variables de cada dimensión dividiéndolas entre la cantidad de variables incluidas en la dimensión respectiva.
            .col-md-4
              figure.p-5(style="max-width: 60%")
                img(src='@/assets/curso/tema2-img17.svg')
          .row.align-items-center
            .col-md-4.mb-4.mb-md-0
              figure.p-5(style="max-width: 60%")
                img(src='@/assets/curso/tema2-img18.svg')
            .col-md-8
              p Anotar las calificaciones promedio de FF, VC, EA, y FI en el eje correspondiente de la matriz PEYEA.
          .row.align-items-center
            .col-md-8.mb-4.mb-md-0
              p Sumar las dos calificaciones del eje X y anotar el punto resultante en X. Sumar las dos calificaciones del eje Y. Anotar la intersección del nuevo punto XY.
            .col-md-4
              figure.p-5(style="max-width: 60%")
                img(src='@/assets/curso/tema2-img19.svg')
          .row.align-items-center
            .col-md-4.mb-4.mb-md-0
              figure.p-5(style="max-width: 60%")
                img(src='@/assets/curso/tema2-img20.svg')
            .col-md-8
              p Trazar un vector direccional del origen de la matriz PEYEA por el nuevo punto de la intersección. Este vector revelará el tipo de la estrategia recomendable para la organización agresiva, competitiva, defensiva o conservadora (Orozco, 2011).

    .titulo-sexto.color-acento-botones.mb-4
      h5 Figura 4
      span Estructura de la matriz PEYEA

    .row.justify-content-center
      .col-lg-11
        figure.mb-5
          img(src="@/assets/curso/tema2-img21.svg")
      .col-lg-8
        .row.multicolor.align-items-center.mb-5
          .col-lg-8
            p.mb-0.px-4.text-white Dirigirse a la carpeta Anexos y descargar el archivo denominado: Anexo_6_Plantilla matriz PEYEA.xls
              br
              br
              | Diligencie la matriz teniendo en cuenta las indicaciones de su instructor.
          .col-lg-3.offset-lg-1
            figure.p-5
              img(src="@/assets/curso/tema1-img20.svg")

    .row.mb-5
      .col-md-8
        Card(
          title="Matriz BCG"
          :img="require('@/assets/curso/tema2-img22.svg')"
          description="La matriz BCG es clave para la toma de decisiones, pues ayuda a las empresas a identificar en qué productos deben seguir invirtiendo recursos y en cuáles no hacerlo (ESAN, 2020, 2020)")

    p.mb-5 Esta matriz, también conocida como matriz de crecimiento-participación, permite analizar las carteras de productos y proponer estrategias de mejora continua. Esta herramienta de marketing, creada por la consultora Boston Consulting Group (BCG), es clave para la toma de decisiones, facilitando la identificación de los productos más rentables de la organización y cuáles deberían ser retirados del mercado.
      br
      br
      | Este modelo gráfico de análisis relaciona las ventas con la rentabilidad y el flujo de caja de cada producto de la empresa. El eje vertical de la matriz representa la tasa de crecimiento, mientras que el horizontal la participación o cuota de mercado. Del mismo modo, cada cuadrante maneja su propia definición y representación gráfica:

    p.mb-5.text-center
      strong Modelo gráfico de matriz BCG


    p.mb-5
      strong A continuación, se presenta una figura con un ejemplo de la matriz BCG.

    .titulo-sexto.color-acento-botones.mb-4
      h5 Figura 5
      span Estructura de la matriz

    .row.justify-content-center
      .col-lg-10
        figure
          img(src="@/assets/curso/tema2-img23.svg")

    Separador

    #t_2_2.titulo-segundo.color-primario
      h2 2.2  Definición de estrategias

    p.mb-5 La estrategia es un procedimiento que facilita la toma de decisiones y/o permite accionar frente a un determinado panorama. Esto, con la intención de alcanzar uno o varios objetivos previamente definidos (Westreicher, 2020).

    .cajon.color-primario.mb-4
      p.px-5.pt-5 Existen diferentes tipos de estrategias, a continuación, se presentan una variedad agrupada de la siguiente manera:
      ul.lista-ul--color.px-5.mb-3
        li
          i.fas.fa-check
          p.mb-0
            strong Estrategias de integración:
            | este tipo de estrategia busca el dominio o el control de los distribuidores, de los proveedores o de la competencia. Dentro de estas estrategias podemos encontrar integración hacia delante, integración hacia atrás e integración horizontal.
        li
          i.fas.fa-check
          p.mb-0
            strong Estrategias intensivas:
            | estas requieren un esfuerzo intenso para mejorar la posición competitiva de la empresa con los productos existentes; hay tres tipos de estrategias intensivas: penetración en el mercado, desarrollo del mercado y desarrollo del producto
        li
          i.fas.fa-check
          p.mb-0
            strong Estrategias de diversificación:
            | con este tipo de estrategias la organización diversifica la cartera de productos y/o servicios que es capaz de ofrecer.
        li
          i.fas.fa-check
          p.mb-0
            strong Estrategias defensivas:
            | surgen cuando existe la necesidad de resguardar los activos de la empresa, los mercados como clientes y proveedores. Entre esas estrategias se encuentran: las estrategias de riesgo compartido, de encogimiento, desinversión y liquidación (Pérez, 2021).
        li
          i.fas.fa-check
          p.mb-0
            strong Estrategias de crecimiento:
            | se emplean para ampliar ventas, mercados y beneficios. <br>Estrategias de estabilidad: cuando se mantiene el tamaño y la línea de negocios no tienden a crecer en ventas o el desarrollo de nuevos productos o mercados (Pérez, 2021).
        li
          i.fas.fa-check
          p.mb-0
            strong Estrategias de reducción:
            | cuando los negocios no van bien y se decide reducir la organización, esto puede hacerse mediante la reorientación o cambio de negocio, para ello se realizan cortes de trabajadores, costos de distribución, etc. (Pérez, 2021).
        li
          i.fas.fa-check
          p.mb-0
            strong Las estrategias genéricas:
            | muchas organizaciones operan en múltiples actividades en diferentes entornos y bajo numerosas circunstancias. Este tipo de estrategias debe responder a la pregunta: ¿cómo se debe competir en el negocio escogido? Pérez, 2021).
        li
          i.fas.fa-check
          p.mb-0
            strong Liderazgo en conocimiento:
            | este tipo de estrategia se propone a raíz de la importancia que cobra el conocimiento en el presente siglo, ya que cuanto mayor sea el conocimiento que posea la organización mayor diferenciación logrará en relación con las demás (Pérez, 2021).
        li
          i.fas.fa-check
          p.mb-0
            strong Estrategias funcionales:
            | las estrategias funcionales contribuyen al cumplimiento de los objetivos, y de las estrategias maestras y/o de las de los diferentes sistemas o unidades estratégicas de actividades de una organización (Pérez, 2021).
      figure
        img(src="@/assets/curso/tema2-img24.svg")

</template>

<script>
import Card from '../components/Card.vue'
import Card2 from '../components/Card2.vue'
import ModalBriefcase from '../components/ModalBriefcase.vue'
export default {
  name: 'Tema2',
  components: {
    Card,
    Card2,
    ModalBriefcase,
  },
  data: () => ({
    // variables de vue
    modal1: false,
    modal: {
      img: null,
      title: '',
      text: '',
    },
    content1:
      'FORTALEZAS + OPORTUNIDADES. Son estrategias expansivas donde se pretende aprovechar al máximo una buena situación de la empresa.',
    content2:
      'FORTALEZAS + AMENAZAS. Son estrategias que van dirigidas a defender nuestras posiciones sólidas y esperar el desarrollo positivo de acontecimiento; mantenerse, persistir, optimizar y flexibilizar es el camino para enfrentar las amenazas.',
    content3:
      'DEBILIDADES + OPORTUNIDADES. En esta posición no estamos en capacidad de aprovechar las oportunidades y las estrategias deben ir encaminadas a cambiar las cosas. Cambiar, reorientar, reordenar, redireccionar es la línea para cambiar y sacar partido de nuevas oportunidades. ',
    content4:
      'DEBILIDADES + AMENAZAS. Es el peor escenario donde actuar, si el análisis ha sido hecho correctamente se puede aspirar a la supervivencia, y muchas veces será necesario una salida ordenada. Se debe reducir, ajustar, minimizar y preparar, como mínimo, un cambio radical o salida con mínimos costos. ',
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
    updateModal(img, title, text) {
      this.modal1 = true
      this.modal = {
        img: img,
        title: title,
        text: text,
      }
    },
  },
}
</script>

<style lang="sass"></style>
