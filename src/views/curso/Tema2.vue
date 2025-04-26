<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'2. La libertad'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
  
      .row.bg-verde-oscuro.bg-full-width.py-4.mb-4
        div.px-5.pb-md-3
          .row
            .col-12.col-xl-11.d-flex
              p.my-auto.text-white La libertad es un concepto fundamental en la historia del pensamiento humano. Desde la filosofía hasta el derecho, ha sido objeto de múltiples interpretaciones que han moldeado las sociedades y las estructuras normativas a lo largo del tiempo.  Se concibe como la capacidad del ser humano para actuar conforme a su voluntad, sin restricciones externas que limiten sus decisiones.
            .col-1.d-none.d-xl-block
              img(src='@/assets/curso/unidad/img-23.png', alt='Texto que describa la imagen')
      
      #t_2_1.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 2.1
          h2 La libertad en la filosofía

      p.mb-4 Conozcamos diferentes enfoques de la libertad en la filosofía:
      .row.mb-4
        .col-12.col-lg-5.col-xl-4.d-none.d-lg-block(data-aos="zoom-in")
          img(src='@/assets/curso/unidad/img-24.png', alt='Texto que describa la imagen')
        .col-12.col-lg-7.col-xl-8
          AcordionA(tipo="b")
            .div(titulo="Libertad en la Antigua Grecia")
              p Platón y Aristóteles asociaban la libertad con la racionalidad y la virtud. Para Aristóteles, el ser humano es libre cuando actúa en función de su razón y no es esclavo de sus pasiones o deseos irracionales. En este contexto, la libertad no significaba hacer lo que se quisiera, sino actuar conforme a la virtud y al bien común.
            .div(titulo="Libertad en el pensamiento cristiano")
              p San Agustín y Santo Tomás de Aquino, vincularon la libertad con la voluntad divina. Según esta visión, el ser humano es libre en la medida en que sigue la Ley de Dios y actúa conforme al bien moral. Santo Tomás, en particular, sostuvo que la verdadera libertad radica en elegir el bien y que el pecado representa una esclavitud del alma.
            .div(titulo="Libertad en la ilustración")
              p Filósofos como Kant y Rousseau hicieron énfasis en la autonomía individual. Kant sostenía que la libertad es la capacidad de los individuos para actuar, de acuerdo con su razón y principios morales, mientras que Rousseau propuso la idea de la libertad como autodeterminación dentro del contrato social. Para Rousseau, la libertad solo era posible dentro de una sociedad que garantizara la igualdad y el respeto mutuo.
            .div(titulo="Libertad en la filosofía contemporánea")
              p Se distingue entre libertad negativa y libertad positiva. Algunos autores establecen que la libertad negativa es la ausencia de interferencia externa, mientras que la libertad positiva es la capacidad de autodeterminación y autogobierno. Esta distinción ha sido crucial en el desarrollo de los derechos humanos y en el debate sobre el papel del Estado en la protección de la libertad individual.
      #t_2_2.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 2.2
          h2 La libertad en el Derecho

      p.mb-4 En el ámbito jurídico, la libertad se traduce en derechos y garantías que permiten a los individuos actuar sin restricciones arbitrarias por parte del Estado o de otros ciudadanos. Estas concepciones están atadas a un proceso de la modernidad que se fortalece en la época de las guerras de independencia y la concepción de la ciudadanía. La libertad en el derecho opera de diversas maneras:

      TabsC.mb-4
        .tabs-content.border.px-4.p-md-5.py-3(titulo='Libertades fundamentales', :icon="require('@/assets/curso/unidad/img-25.svg')")
          .row
            .col-md-12.col-lg-7.mb-4.mb-md-0
              h4(data-aos='fade-up') Libertades fundamentales
              p(data-aos='fade-up') Incluyen la libertad de expresión, la libertad de religión, la libertad de asociación y la libertad de tránsito. Estas libertades están reconocidas en la mayoría de las constituciones y en tratados internacionales, como la Declaración Universal de los Derechos Humanos y el Pacto Internacional de Derechos Civiles y Políticos.
            .d-none.d-lg-block.col-md-12.col-lg-4(data-aos='zoom-in')
              figure
                img(src='@/assets/curso/unidad/img-26.png', alt='Descripción de la imagen')
        .tabs-content.border.px-4.p-md-5.py-3(titulo='Límites a la libertad', :icon="require('@/assets/curso/unidad/img-25.svg')")
          .row
            .col-md-12.col-lg-7.mb-4.mb-md-0
              h4(data-aos='fade-up') Límites a la libertad
              p(data-aos='fade-up') Aunque la libertad es un derecho fundamental, no es absoluta. El derecho establece límites cuando su ejercicio afecta a terceros o al orden público. Ejemplo de ello son las restricciones al discurso de odio, la regulación del uso de bienes públicos y las medidas de seguridad en situaciones de emergencia.
            .d-none.d-lg-block.col-md-12.col-lg-4(data-aos='zoom-in')
              figure
                img(src='@/assets/curso/unidad/img-27.png', alt='Descripción de la imagen')
        .tabs-content.border.px-4.p-md-5.py-3(titulo='Libertad y responsabilidad', :icon="require('@/assets/curso/unidad/img-25.svg')")
          .row
            .col-md-12.col-lg-7.mb-4.mb-md-0
              h4(data-aos='fade-up') Libertad y responsabilidad
              p(data-aos='fade-up') En el derecho penal, la libertad está vinculada a la responsabilidad individual. Se presume que las personas son libres y responsables de sus actos, lo que fundamenta la existencia de sanciones para quienes violan la Ley. Esto se refleja en principios como el libre albedrío y la imputabilidad penal.
            .d-none.d-lg-block.col-md-12.col-lg-4(data-aos='zoom-in')
              figure
                img(src='@/assets/curso/unidad/img-28.png', alt='Descripción de la imagen')
        .tabs-content.border.px-4.p-md-5.py-3(titulo='Garantías jurídicas de la libertad', :icon="require('@/assets/curso/unidad/img-25.svg')")
          .row
            .col-md-12.col-lg-7.mb-4.mb-md-0
              h4(data-aos='fade-up') Garantías jurídicas de la libertad
              p(data-aos='fade-up') Los mecanismos de protección de la libertad incluyen el habeas corpus, que protege contra detenciones arbitrarias, y el principio de legalidad, que impide la imposición de penas sin una norma previa que las establezca. Además, organismos como los tribunales constitucionales y las cortes internacionales velan por el respeto de estas garantías.
            .d-none.d-lg-block.col-md-12.col-lg-4(data-aos='zoom-in')
              figure
                img(src='@/assets/curso/unidad/img-29.png', alt='Descripción de la imagen')

      #t_2_3.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 2.3
          h2 La Libertad en el iusnaturalismo y en el positivismo jurídico

      p.mb-4 El concepto de libertad adquiere diferentes matices, según la corriente filosófico-jurídica desde la cual se analice. En este sentido, el iusnaturalismo y el positivismo jurídico ofrecen visiones distintas.

      .row.mb-4
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-30.png', alt='Texto que describa la imagen')
        .col-12.col-xl-8
          h2 Libertad en el iusnaturalismo
          .d-flex.align-items-start.bg-azul-claro.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
            img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-31.svg', alt='Texto descriptivo de la imagen')
            .my-auto
              p.pe-xl-3.mb-0 En el iusnaturalismo, la libertad es un derecho inherente a la naturaleza humana, anterior y superior al derecho positivo. Se considera un atributo esencial del ser humano, derivado de la ley natural, que permite a los individuos autodeterminarse conforme a la razón y su propia dignidad. Desde esta perspectiva, la libertad no es una concesión del Estado ni depende de normas creadas por la autoridad, sino que es un principio inalienable que debe ser reconocido y protegido por el derecho positivo.
          span John Locke (2006), filósofo inglés y considerado el padre del liberalismo, afirmó que el estado de naturaleza de los seres humanos es el de una perfecta libertad sin pedir permiso ni depender de la voluntad de alguien más. Locke hace un énfasis especial en que el estado de libertad no debe ser entendido como estado de licencia, pues la libertad tiene una ley que la gobierna: el uso de la razón. De ese modo se explica que para la humanidad todos son iguales e independientes y no deben dañar a los demás. Esta aproximación de Locke da fundamento a una forma de contrato social, explicando que el uso de la razón, el respeto a la libertad de los otros y la posibilidad del castigo da bases para la convivencia entre los seres humanos:

      .row.position-relative.mb-5.py-4.bg-fondo-slider.bg-full-width
        div.px-4.px-md-5.py-md-3
          SlyderA(tipo="b").bg-white
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Primer tema
                p En el iusnaturalismo, la libertad es un derecho inherente a la naturaleza humana y precede a cualquier norma jurídica.
              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-32.png', alt='Texto que describa la imagen')
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Segundo tema
                p Para los pensadores iusnaturalistas, como John Locke, la libertad es un derecho natural que debe ser garantizado por el derecho positivo. Locke argumentaba que los gobiernos existen para proteger la libertad y los derechos fundamentales, y si no lo hacen, pueden ser derrocados legítimamente.
              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-33.png', alt='Texto que describa la imagen')
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Tercer tema
                p En esta corriente, cualquier norma que limite injustificadamente la libertad es considerada ilegítima, dado que no se ajusta a los principios del derecho natural.
              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-34.png', alt='Texto que describa la imagen')
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Cuarto tema
                p El iusnaturalismo ha sido clave en la formulación de los derechos humanos y en la lucha contra regímenes opresivos. Por ejemplo, ha sido una base filosófica para movimientos como la abolición de la esclavitud y la independencia de diversas naciones.
              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-35.png', alt='Texto que describa la imagen')

      h2 Libertad en el positivismo jurídico
      p.mb-4 Para Kelsen (2010), la libertad se explica a partir del funcionamiento en el orden jurídico. En un sentido más amplio, esta se expresa de forma negativa toda vez que no prohíbe determinada conducta. Lo anterior significa que la libertad de las personas está determinada por las conductas permitidas por el orden jurídico. De acuerdo con el autor (2010), esto ocurre incluso en sistemas totalitarios, pues explica que la libertad no es un derecho innato, sino que es una consecuencia de la regulación de la conducta humana:

      .row.mb-4
        .col-12.col-lg-5.col-xl-4.d-none.d-lg-block(data-aos="zoom-in")
          img(src='@/assets/curso/unidad/img-36.png', alt='Texto que describa la imagen')
        .col-12.col-lg-7.col-xl-8
          AcordionA(tipo="b")
            .div(titulo="Primer tema")
              p El positivismo jurídico concibe la libertad dentro del marco normativo establecido por el ordenamiento jurídico. La libertad está jurídicamente garantizada y el orden jurídico prohíbe que se le intervenga. Por ejemplo, el orden jurídico contempla la libertad de culto, eso quiere decir que las personas pueden escoger su religión o no escoger ninguna. Al garantizar esta libertad, el orden jurídico también la protege, ningún ser humano puede interferir en la elección de otro, respecto a su religión.
            .div(titulo="Segundo tema")
              p La libertad no es un derecho preexistente, sino una condición otorgada y regulada por el sistema jurídico. Esto significa que la libertad es creada y limitada por el derecho, sin necesidad de fundamentos morales externos.
            .div(titulo="Tercer tema")
              p Para los positivistas, el derecho positivo establece los límites de la libertad, y cualquier restricción es válida si ha sido establecida conforme al procedimiento legal. En este sentido, el positivismo enfatiza la legalidad sobre la moralidad.
            .div(titulo="Cuarto tema")
              p Desde esta perspectiva, no existe una única noción de libertad, sino que depende del sistema normativo vigente en cada sociedad. Así, la libertad en un Estado democrático puede diferir significativamente de la libertad en un régimen autoritario, en función de las normas establecidas en cada caso.

      .row.mb-5.bg-verde-oscuro.bg-full-width.p-4.py-xl-0
        .col-12.col-xl-9.d-flex
          p.my-auto.text-white La libertad es un concepto central tanto en la filosofía como en el derecho. Desde la filosofía, se analiza en términos de autonomía, determinismo y autodeterminación. En el derecho, se traduce en derechos fundamentales y en límites normativos que garantizan la convivencia social. Mientras que el iusnaturalismo la concibe como un derecho inherente a la naturaleza humana, el positivismo jurídico la entiende como una condición regulada por el ordenamiento legal. Ambas visiones han influido en la configuración de los sistemas jurídicos contemporáneos y en la garantía de derechos fundamentales. La evolución de las sociedades ha demostrado que una combinación equilibrada de ambas perspectivas puede contribuir a la construcción de un sistema jurídico que proteja tanto la seguridad jurídica como los derechos fundamentales de los ciudadanos. 
        .col-3.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-37.png', alt='Texto que describa la imagen')

      .bg-full-width.border-top-9-azul
        .px-5.pt-5.pb-0
          h2 Material complementario
          .row
            .col-12.col-md-6.col-lg-8
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/25980") Roggero, J. (2011). Derecho, violencia y lenguaje notas a partir de "para una crítica de la violencia" de Walter Benjamin. Revista Electrónica del Instituto de Investigaciones "Ambrosio L. Gioja" - Año V, Número 7: 136-146, 2011.
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/111505") Locke, J. (2011). Ensayo sobre la tolerancia y otros escritos sobre ética y obediencia civil. Biblioteca Nueva.
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=0BGRn8mO7oo&t=17") [Vídeo] Navarro, E [Emilio Navarro] (2016) ¿Qué es la violencia?
            .col-12.col-md-6.col-lg-3
              figure
                img(src='@/assets/componentes/material-complementario.svg' alt='Imagen de material complementario')


  </template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
