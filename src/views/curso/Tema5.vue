<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'5. El deber'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
      
      .row.bg-verde-oscuro.bg-full-width.p-4.mb-4
        .col-1.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-53.png', alt='Texto que describa la imagen')
        .col-12.col-xl-11.d-flex
          p.my-auto.text-white El deber es un concepto fundamental en la organización de la sociedad, pues establece las obligaciones morales y jurídicas que guían la conducta de los individuos. Desde la filosofía y el derecho, se ha debatido acerca de su origen, naturaleza y función.

      #t_5_1.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 5.1
          h2 El deber en la filosofía

      p.mb-4 Estudiemos el deber en la filosofía:

      TabsC.mb-4
        .tabs-content.border.px-4.p-md-5.py-3(titulo='El deber en la filosofía clásica', :icon="require('@/assets/curso/unidad/img-54.svg')")
          .row
            .d-none.d-lg-block.col-md-12.col-lg-5(data-aos='zoom-in')
              figure
                img(src='@/assets/curso/unidad/img-55.png', alt='Descripción de la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0
              h4(data-aos='fade-up') El deber en la filosofía clásica
              p(data-aos='fade-up') Platón y Aristóteles asociaban el deber con la virtud y la justicia. Para Aristóteles, los individuos tenían el deber de actuar conforme a la razón y la excelencia moral para lograr la eudaimonía (felicidad o plenitud).
        .tabs-content.border.px-4.p-md-5.py-3(titulo='El deber en la filosofía moral de Kant', :icon="require('@/assets/curso/unidad/img-54.svg')")
          .row
            .d-none.d-lg-block.col-md-12.col-lg-5(data-aos='zoom-in')
              figure
                img(src='@/assets/curso/unidad/img-56.png', alt='Descripción de la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0
              h4(data-aos='fade-up') El deber en la filosofía moral de Kant
              p(data-aos='fade-up') Kant formuló el concepto del deber basado en el imperativo categórico, según el cual las acciones deben guiarse por principios universales y racionales, independientemente de las consecuencias.
        .tabs-content.border.px-4.p-md-5.py-3(titulo='El deber en el utilitarismo', :icon="require('@/assets/curso/unidad/img-54.svg')")
          .row
            .d-none.d-lg-block.col-md-12.col-lg-5(data-aos='zoom-in')
              figure
                img(src='@/assets/curso/unidad/img-57.png', alt='Descripción de la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0
              h4(data-aos='fade-up') El deber en el utilitarismo
              p(data-aos='fade-up') John Stuart Mill y Jeremy Bentham propusieron que el deber moral se fundamenta en la utilidad y la búsqueda del mayor bien para el mayor número de personas, lo que introduce una dimensión pragmática al concepto de obligación.
        .tabs-content.border.px-4.p-md-5.py-3(titulo='El deber en la filosofía contemporánea', :icon="require('@/assets/curso/unidad/img-54.svg')")
          .row
            .d-none.d-lg-block.col-md-12.col-lg-5(data-aos='zoom-in')
              figure
                img(src='@/assets/curso/unidad/img-58.png', alt='Descripción de la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0
              h4(data-aos='fade-up') El deber en la filosofía contemporánea
              p(data-aos='fade-up') Filósofos como John Rawls han vinculado el deber con la justicia y la equidad, proponiendo principios normativos para estructurar sociedades justas basadas en la imparcialidad y la reciprocidad.

      #t_5_2.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 5.2
          h2 El deber en el Derecho

      p.mb-4 En el derecho, el deber se expresa en normas jurídicas que imponen obligaciones a los individuos y garantizan el funcionamiento de la sociedad:

      ImagenInfografica.color-secundario.mb-4.bg-white
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/unidad/img-59.png', alt='Descripción de la imagen')
        .tarjeta.bg-white.p-4(x='22%' y='30%' numero='+')
          .h5.mb-2 Deberes legales
          p El derecho establece obligaciones específicas para los ciudadanos, como el pago de impuestos, el respeto a los contratos y la observancia de las leyes penales.
        .tarjeta.bg-white.p-4(x='76%' y='36%' numero='+')
          .h5.mb-2 Deberes morales y su relación con el Derecho
          p Aunque algunos deberes morales coinciden con normas jurídicas (como la prohibición del homicidio), otros se mantienen en la esfera de la ética personal.
        .tarjeta.bg-white.p-4(x='69%' y='63%' numero='+')
          .h5.mb-2 Deberes en los derechos humanos
          p En el ámbito del derecho internacional, los deberes se relacionan con la protección de los derechos fundamentales, imponiendo responsabilidades tanto a individuos como a Estados.
        .tarjeta.bg-white.p-4(x='41%' y='64%' numero='+')
          .h5.mb-2 Sanción por incumplimiento del deber
          p El derecho prevé mecanismos coercitivos para garantizar el cumplimiento de las obligaciones legales, como sanciones penales, civiles o administrativas.

      #t_5_3.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 5.3
          h2 El deber en el iusnaturalismo y en el positivismo jurídico

      p.mb-4 Las interpretaciones del deber varían, según la corriente filosófico-jurídica desde la cual se analice. En este sentido, el iusnaturalismo y el positivismo ofrecen perspectivas distintas.

      .row.mb-4
        .col-3.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-60.png', alt='Texto que describa la imagen')
        .col-12.col-xl-9
          h2 El deber en el iusnaturalismo
          .bg-rojo.p-4.mb-4
            span El iusnaturalismo sostiene que el deber no es simplemente una imposición de la autoridad jurídica, sino una exigencia que deriva de principios universales y objetivos de justicia. Según esta corriente, los seres humanos poseen una naturaleza racional que les permite discernir lo que es correcto y obligatorio, más allá de las normas creadas por el Estado. Así, los deberes fundamentales, como respetar la dignidad humana, actuar con equidad y evitar el daño a otros, existen con independencia de las leyes positivas. En este sentido, el derecho natural impone obligaciones morales que trascienden el derecho escrito y sirven como criterio para evaluar su legitimidad.
          span Desde esta perspectiva, el cumplimiento del deber no se basa únicamente en la obediencia a las leyes vigentes, sino en la conformidad con principios superiores de justicia. Un sistema jurídico que contradiga estos principios perdería su validez moral y, en algunos casos, su obligatoriedad. Al respecto Kant considera que:

      .row.mb-4
        .col-10.col-lg-6.col-xl-4.mx-auto(data-aos='fade-up')
          .bg-azul.p-4.d-flex
            p.text-white.text-center El concepto central es el imperativo categórico, que ordena actuar solo, según máximas que puedan convertirse en leyes universales.
        .col-10.col-lg-6.col-xl-4.mx-auto(data-aos='fade-up')
          .bg-azul.p-4.d-flex
            p.text-white.text-center El deber es incondicional y autónomo, lo que significa que no depende de la experiencia, la cultura o los deseos individuales. 
        .col-10.col-lg-6.col-xl-4.mx-auto(data-aos='fade-up')
          .bg-azul-oscuro.p-4.d-flex
            p.text-white.text-center Cumplir el deber implica actuar por respeto a la ley moral, no por miedo al castigo ni por interés en una recompensa.
      
      h2 El deber en el positivismo jurídico
      .row.mb-4.mx-0
        .col-12.col-xl-8.d-flex.align-items-center.bg-azul-1.p-4(data-aos="fade-up")
          p.mb-0 Kelsen (2010) busca oponerse a los postulados de la ética Kantiana toda vez que esta representa valores morales absolutos. Para el autor es importante hablar de obligaciones jurídicas y que en esta obligación hay una función esencial del derecho. La palabra deber es utilizada para designar determinada conducta, facultarla u obligarla e incluso haciendo parte del orden jurídico no está relacionada con la conducta debida. En otras palabras, el deber en el iuspositivismo no tiene relación al ideal de ser o de actuar de determinada forma, ni tampoco a ser revisado si es algo bueno o malo, sino que indica la ejecución de una conducta comprendida por el ordenamiento jurídico.
        .d-none.d-xl-block.col-4.px-0
          img.h-100(src='@/assets/curso/unidad/img-61.png', alt='Texto que describa la imagen')

      .row.mb-4
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-62.png', alt='Texto que describa la imagen')
        .col-12.col-xl-8
          .d-flex.align-items-start.bg-marron.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
            img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-63.svg', alt='Texto descriptivo de la imagen')
            .my-auto
              p.pe-xl-3.mb-0 Para el positivismo, el deber es una construcción normativa determinada por el derecho positivo, sin necesidad de estar vinculado a principios morales.
          .d-flex.align-items-start.bg-marron.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
            img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-64.svg', alt='Texto descriptivo de la imagen')
            .my-auto
              p.pe-xl-3.mb-0 El deber es un mandato jurídico cuya validez depende de su emisión conforme al sistema legal.
          .d-flex.align-items-start.bg-marron.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
            img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-65.svg', alt='Texto descriptivo de la imagen')
            .my-auto
              p.pe-xl-3.mb-0 En esta visión, la existencia de un deber se determina, según su incorporación en el ordenamiento jurídico, sin referencia a valores externos.

      .row.mb-4
        .col-12.col-xl-8
          .bg-marron.p-4
            span El deber es un concepto clave en la organización de la conducta individual y social. En la filosofía, se ha analizado en relación con la moral, la razón y la justicia. En el derecho, se manifiesta a través de normas que imponen obligaciones y establecen mecanismos coercitivos para su cumplimiento. Mientras que el iusnaturalismo considera que el deber está basado en principios universales inherentes a la naturaleza humana, el positivismo jurídico lo entiende como una creación del derecho positivo. Ambas perspectivas han influido en la forma en que las sociedades conciben y regulan el deber, determinando el equilibrio entre obligación legal y exigencia moral.
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-66.png', alt='Texto que describa la imagen')

      .bg-full-width.border-top.actividad(style='background-color: #ebf1f5; border-top: 5px solid #f5c145 !important')
        .p-4.p-md-5
          #Actividad
            <Actividad :cuestionario='cuestionario'/>



</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema5',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Filosofía del Derecho',
      titulo: 'Ponte a prueba',
      introduccion:
        'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto: 'Según el iusnaturalismo, la libertad es:',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Un derecho inherente al ser humano, basado en principios universales de justicia.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Una concesión del Estado, que puede otorgarse o restringirse según la ley.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Un privilegio que solo existe si está reconocido en el ordenamiento jurídico.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Una norma impuesta por la autoridad para garantizar el orden social.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. El iusnaturalismo sostiene que la libertad es un derecho natural, inherente al ser humano, y no depende de su reconocimiento por parte del Estado.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. El iusnaturalismo sostiene que la libertad es un derecho natural, inherente al ser humano, y no depende de su reconocimiento por parte del Estado.',
        },
        {
          id: 2,
          texto: 'Desde la perspectiva del iuspositivismo, la libertad:',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Es una facultad moral que existe independientemente de la ley escrita.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Se define y limita según las normas establecidas por el ordenamiento jurídico.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'No es relevante para el derecho, ya que es un concepto exclusivamente filosófico.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Sólo puede existir en estados de naturaleza sin regulación jurídica.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. Para el iuspositivismo, la libertad es un derecho que se reconoce y regula a través de las normas jurídicas, sin depender de principios morales externos.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Para el iuspositivismo, la libertad es un derecho que se reconoce y regula a través de las normas jurídicas, sin depender de principios morales externos.',
        },
        {
          id: 3,
          texto:
            'Desde una perspectiva jurídica, la violencia se entiende como:',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Cualquier uso de la fuerza, ya sea física, psicológica o simbólica, para imponer una voluntad sobre otra persona.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Solo el uso de la fuerza física para causar daño a otra persona.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Una acción que solo se considera ilegal si es ejercida por un particular, pero no por el Estado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Un fenómeno exclusivamente social sin implicaciones legales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. En el derecho, la violencia puede manifestarse de diversas formas (física, psicológica o simbólica) y es relevante en múltiples ámbitos, como el derecho penal, civil y los derechos humanos.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. En el derecho, la violencia puede manifestarse de diversas formas (física, psicológica o simbólica) y es relevante en múltiples ámbitos, como el derecho penal, civil y los derechos humanos.',
        },
        {
          id: 4,
          texto:
            'Desde el punto de vista jurídico, la autoridad se define como:',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La capacidad legítima de una persona o institución para ordenar, dirigir o tomar decisiones vinculantes.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'El poder absoluto de una persona para imponer su voluntad sin límites legales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Una facultad exclusiva del Estado para ejercer coerción sobre los ciudadanos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Un concepto únicamente político, sin relevancia en el ámbito jurídico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. En el derecho, la autoridad implica un poder legítimo para dictar normas o decisiones, pero siempre dentro de los límites establecidos por el ordenamiento jurídico.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. En el derecho, la autoridad implica un poder legítimo para dictar normas o decisiones, pero siempre dentro de los límites establecidos por el ordenamiento jurídico.',
        },
        {
          id: 5,
          texto: 'En el ámbito jurídico, el deber se entiende como:',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Una obligación impuesta por normas jurídicas o principios morales que exige una determinada conducta.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Una recomendación voluntaria que las personas pueden seguir o ignorar sin consecuencias.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Un derecho que cada persona puede ejercer libremente sin restricciones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Una imposición arbitraria del Estado sin justificación normativa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. El deber en el derecho implica una obligación exigible, ya sea derivada de normas legales o principios éticos, y su incumplimiento puede generar consecuencias jurídicas.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. El deber en el derecho implica una obligación exigible, ya sea derivada de normas legales o principios éticos, y su incumplimiento puede generar consecuencias jurídicas.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
