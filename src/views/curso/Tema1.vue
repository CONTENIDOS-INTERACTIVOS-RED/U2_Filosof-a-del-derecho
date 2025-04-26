<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Presentación'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-4.mx-0
      .d-none.d-xl-block.col-4.px-0
        img.h-100(src='@/assets/curso/unidad/img-12.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8.d-flex.align-items-center.bg-marron.p-4(data-aos="fade-up")
        p.mb-0 El iusnaturalismo y el positivismo jurídico, representan dos de las corrientes fundamentales en la filosofía del derecho, cada una con una concepción distinta sobre el origen y la validez del derecho. El iusnaturalismo sostiene que el derecho se fundamenta en principios universales e inmutables derivados de la naturaleza humana o de un orden moral superior, lo que implica que una norma jurídica solo es legítima si respeta estos principios. En contraste, el positivismo jurídico defiende que el derecho es un sistema normativo creado por la autoridad competente, independiente de consideraciones morales, y cuya validez radica en su correcta formulación dentro de un ordenamiento jurídico establecido. Este debate ha marcado la evolución del pensamiento jurídico, influyendo en la manera en que se conciben la justicia, la legalidad y los derechos fundamentales.

    p.mb-4 Para esta unidad, en primer lugar, se profundizará sobre las diferencias entre el iusnaturalismo y el positivismo jurídico, para luego poder revisar los conceptos centrales de esta parte del curso: libertad, violencia, autoridad y deber, vistos desde estas dos corrientes del derecho.

    #t_1_1.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 1.1
        h2 El iusnaturalismo

    .row.mb-4
      .col-12.col-xl-8
        .row.bg-azul-claro.p-4.pb-xl-0.mb-4
          .col-3.d-none.d-xl-block
            img(src='@/assets/curso/unidad/img-13.png', alt='Texto que describa la imagen')
          .col-12.col-xl-9.d-flex
            p.my-auto El iusnaturalismo es una corriente filosófico-jurídica que sostiene la existencia de un derecho natural, anterior y superior al derecho positivo, que se fundamenta en la naturaleza humana, la razón o principios morales universales. Según esta doctrina, las normas jurídicas deben estar en conformidad con estos principios naturales para ser consideradas justas y legítimas.
        span Para comprender las aproximaciones a esta corriente, Castro (2019), propone tres momentos en la historia: las aproximaciones clásicas, las teológicas y antropológicas:
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-14.png', alt='Texto que describa la imagen')

    .row.bg-fondo-1.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3

        .row.mb-4
          .col-12.col-lg-5.col-xl-4.d-none.d-lg-block(data-aos="zoom-in")
            img(src='@/assets/curso/unidad/img-15.png', alt='Texto que describa la imagen')
          .col-12.col-lg-7.col-xl-8
            AcordionA(tipo="b")
              .div(titulo="Iusnaturalismo clásico")
                p Para esta aproximación es necesario retomar las concepciones filosóficas griegas de Platón y Aristóteles. Uno de los puntos de partida de la antigua Grecia, es la pregunta por la justicia, concepto que se profundizará en la próxima unidad. En términos generales, la justicia se entiende en función de un bien, lo que hace que se considere la vida en comunidad, o en términos de la antigua Grecia, la <i>politeia</i>. Acá la virtud es la norma de la moralidad a la que todos aspiran en función de la constitución de <i>la polis</i>, definiendo a los hombres como animales sociales; es decir, seres superiores en contraste a los otros animales. Visto de otra manera, para los griegos, todas las personas tienen tendencia hacia la comunidad y ello hace que el ser humano sea el mejor de todos los animales.
              .div(titulo="Iusnaturalismo teológico")
                p Castro (2019), explica, en cuanto al iusnaturalismo teológico, que existe una relación entre los derechos y la dignidad humana. Sostiene que el derecho natural puede ser descubierto por la razón humana, pensamiento propio del renacimiento, permitiendo a los seres humanos discernir principios universales de justicia mediante la razón.
              .div(titulo="Iusnaturalismo antropológico")
                p Toma elementos del iusnaturalismo teológico e incorporan la idea de la naturaleza humana libre y racional. Acá hay una base importante de los postulados kantianos en los que se establece que, a la naturaleza humana, le es inherente la libertad, la autonomía y la dignidad.

        .row.mb-4
          .col-12.col-xl-9.d-flex
            .my-auto
              p.mb-4 El iusnaturalismo ha servido como fundamento para el desarrollo de conceptos como la justicia, la equidad y los derechos humanos, de manera más reciente, influyendo en la evolución de los sistemas jurídicos. Además, ha jugado un papel clave en la lucha contra regímenes opresivos y en la afirmación de la supremacía de ciertos valores universales sobre el derecho positivo. A saber, que la dignidad es intrínseca a los seres humanos.
              .bg-verde.p-4
                span Sin embargo, los críticos del iusnaturalismo argumentan que la existencia de principios universales de justicia es subjetiva y que los conceptos de derecho natural pueden ser interpretados de diferentes maneras, según la época, la cultura o la religión dominante. Además, se cuestiona si estos principios realmente pueden ser aplicados de manera uniforme, en sociedades diversas.
          .col-3.d-none.d-xl-block
            img(src='@/assets/curso/unidad/img-16.png', alt='Texto que describa la imagen')

    #t_1_2.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 1.2
        h2 El positivismo jurídico

    p.mb-4 El positivismo jurídico, en contraste con el iusnaturalismo, sostiene que el derecho es un conjunto de normas creadas por la autoridad competente dentro de un determinado sistema jurídico. Según esta corriente, la validez del derecho no depende de su conformidad con principios morales o naturales, sino de su origen en procedimientos legalmente establecidos.
    p.mb-4 Al respecto, uno de los exponentes más importantes, Hans Kelsen busca reconocer rigor y cientificidad y en que el derecho es un acto de creación humana:

    .row.position-relative.mb-5.py-4.bg-fondo-slider.bg-full-width
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-17.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Separación entre derecho y moral
              p El derecho es un sistema normativo autónomo, independiente de la moral. Kelsen defendió la idea de que el derecho debe estudiarse sin influencias ideológicas o éticas y así explicó que el derecho es un sistema de normas cuya validez depende únicamente de su conformidad con una norma superior dentro del ordenamiento jurídico, y no de consideraciones morales.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-18.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Jerarquía normativa
              p Kelsen desarrolló la teoría de la "pirámide jurídica", según la cual las normas jurídicas se organizan jerárquicamente, con una norma fundamental en la cúspide. Este modelo permite explicar cómo se estructura un sistema legal y cómo se resuelven los conflictos normativos.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-19.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Concepto de norma jurídica como mandato de la autoridad
              p El derecho consiste en órdenes respaldadas por sanciones, emitidas por un soberano reconocido. Desde esta perspectiva, la autoridad estatal tiene el monopolio de la creación y aplicación de normas jurídicas.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-20.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Reglas primarias y secundarias
              p Hart, explica Castro (2019), amplió el positivismo jurídico al diferenciar entre reglas primarias (que imponen obligaciones) y reglas secundarias (que regulan la creación, modificación y aplicación del derecho). Esta distinción permitió una comprensión más profunda de la estructura del derecho y de su funcionamiento en la práctica, desprendiéndose de las concepciones de Kelsen que, a su juicio reducían el sistema jurídico a la imposición de sanciones.

    .row.mb-4
      .col-10.col-lg-6.col-xl-4.mx-auto.bg-rojo.p-4.d-flex(data-aos='fade-up')
        span El positivismo jurídico ha influido en el desarrollo de los sistemas legales modernos, promoviendo la seguridad jurídica y la previsibilidad en la aplicación del derecho. Su énfasis en la formalidad y en la jerarquía normativa permite garantizar un ordenamiento jurídico estable y coherente, en el que las normas pueden ser modificadas mediante procedimientos establecidos sin recurrir a consideraciones externas.
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-21.png', alt='Texto que describa la imagen')
      .col-10.col-lg-6.col-xl-4.mx-auto.bg-azul-claro.p-4.d-flex(data-aos='fade-up')
        span Sin embargo, una de las principales críticas al positivismo jurídico es su aparente indiferencia ante la justicia o injusticia de las normas. En contextos de regímenes autoritarios, el positivismo ha sido utilizado para justificar la obediencia a leyes que pueden ser moralmente reprobables. Por esta razón, algunos teóricos han propuesto posturas intermedias que incorporan elementos del iusnaturalismo y del positivismo, reconociendo la importancia de la estructura legal sin ignorar la necesidad de principios de justicia.

    .d-flex.align-items-start.bg-verde-oscuro.bg-full-width.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-5
      img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-22.svg', alt='Texto descriptivo de la imagen')
      .my-auto
        p.pe-xl-3.mb-0.text-white Ambas corrientes han aportado elementos esenciales para el estudio y la práctica del derecho. Mientras el iusnaturalismo enfatiza la justicia y la moral como fundamentos del derecho, el positivismo jurídico prioriza la estructura y la validez formal de las normas. En la actualidad, muchas legislaciones combinan elementos de ambas corrientes, buscando un equilibrio entre la validez normativa y la justicia material de las leyes. La evolución del derecho moderno muestra que estos enfoques no son necesariamente excluyentes, sino que pueden complementarse para garantizar un sistema jurídico que sea tanto ordenado como justo. 

    .bg-full-width.border-top-9-azul
      .px-5.pt-5.pb-0
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/ereader/tecnologicadeloriente/40200?page=12") Gómez Gallardo, P. (2017). Filosofía del derecho (2 ed.). IURE Editores.
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://youtu.be/jozpmur2fac?si=mAqbigyosZ6DoDZk") [Vídeo] Sprouts Español. (2024, 29 de junio). Libertad positiva y negativa. ¿Quién tiene más libertad?
          .col-12.col-md-6.col-lg-3
            figure
              img(src='@/assets/componentes/material-complementario.svg' alt='Imagen de material complementario')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
