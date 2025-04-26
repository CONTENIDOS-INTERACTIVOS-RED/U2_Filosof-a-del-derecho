<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'3. La violencia'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

      p.mb-4 A continuación, se presenta la violencia en diferentes áreas.
      #t_3_1.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 3.1
          h2 La violencia en la filosofía

      .row.mb-4
        .col-10.col-lg-6.col-xl-4.mx-auto.bg-rojo.p-4.d-flex(data-aos='fade-up')
          span La violencia, desde la filosofía, es un concepto que ha sido abordado desde diversas corrientes y perspectivas. En términos generales, puede entenderse como el uso de la fuerza, física, psicológica o simbólica, para imponer una voluntad sobre otra, causando daño, coacción o sometimiento. Esta imposición puede manifestarse de múltiples formas, desde la agresión directa hasta mecanismos estructurales que generan desigualdad y opresión.
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-38.png', alt='Texto que describa la imagen')
        .col-10.col-lg-6.col-xl-4.mx-auto.bg-azul-claro.p-4.d-flex(data-aos='fade-up')
          span La violencia no solo se limita al ámbito físico, sino que también puede ser institucional, cultural o incluso epistemológica, cuando se impide el acceso al conocimiento o se niega la legitimidad de ciertos saberes. Algunos filósofos la han concebido como un fenómeno natural e inevitable en las relaciones humanas y sociales, mientras que otros la han analizado como un problema ético y político que debe ser limitado o erradicado.

      p.mb-4 Así, la violencia se convierte en un objeto de reflexión filosófica en torno a su origen, sus justificaciones y las formas en que puede ser enfrentada o superada en la búsqueda de sociedades más justas:

      .row.position-relative.mb-5.py-4.bg-fondo-slider.bg-full-width
        div.px-4.px-md-5.py-md-3
          SlyderA(tipo="b").bg-white
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Perspectiva clásica
                p Aristóteles distingue entre el uso legítimo e ilegítimo de la fuerza, considerando que la violencia es contraria a la naturaleza cuando impide el desarrollo del ser humano, según su fin propio. En cambio, Santo Tomás de Aquino la asocia con la privación de la razón y la justicia.
              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-39.png', alt='Texto que describa la imagen')
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Enfoque contractualista
                p Autores como Hobbes y Rousseau ven la violencia como un fenómeno inherente al estado de naturaleza, al que el ser humano intenta escapar mediante la creación de un orden jurídico-político. Para Hobbes, el Estado impone el derecho como una forma de regular la violencia natural, mientras que Rousseau considera que es la sociedad misma la que genera desigualdades y violencia estructural.
              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-40.png', alt='Texto que describa la imagen')
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Crítica marxista
                p Los pensadores de la tradición marxista interpretan la violencia como un instrumento de dominación de clase. Para ellos, la violencia no es solo física, sino también económica y estructural, manifestándose en la explotación y la alienación del trabajador dentro del sistema capitalista.
              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-41.png', alt='Texto que describa la imagen')
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Filosofía contemporánea
                p Michel Foucault y Walter Benjamin analizan la violencia en términos de poder y legitimación. Foucault argumenta que el poder no solo se ejerce a través de la coerción, sino también mediante estructuras disciplinarias y biopolíticas. Benjamin, por su parte, distingue entre la "violencia fundadora" (la que crea el derecho) y la "violencia conservadora" (la que lo mantiene), planteando la posibilidad de una "violencia divina" que rompa con los ciclos de opresión.
              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-42.png', alt='Texto que describa la imagen')

      #t_3_2.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 3.2
          h2 La violencia en el derecho

      p.mb-4 Desde el derecho, la violencia se define generalmente como el uso de la fuerza física, psicológica o simbólica con el propósito de someter, coaccionar o causar daño a una persona, grupo o institución. Su regulación varía, según el contexto jurídico, pero en términos generales, se reconocen distintos tipos de violencia con implicaciones legales específicas:

      .row.mb-4
        .col-12.col-lg-5.col-xl-4.d-none.d-lg-block(data-aos="zoom-in")
          img(src='@/assets/curso/unidad/img-43.png', alt='Texto que describa la imagen')
        .col-12.col-lg-7.col-xl-8
          AcordionA(tipo="b")
            .div(titulo="Violencia física")
              p Es la más evidente y comprende cualquier agresión corporal que cause daño o sufrimiento a otra persona. Se sanciona en ámbitos como el derecho penal (delitos de lesiones, homicidio, tortura).
            .div(titulo="Violencia psicológica o moral")
              p Incluye actos de intimidación, amenazas, manipulación o coerción que afecten la integridad emocional de una persona. Es reconocida en ámbitos como el derecho de familia (violencia intrafamiliar) y el derecho penal (coacción, amenazas).
            .div(titulo="Violencia institucional")
              p Se refiere a los abusos de poder cometidos por el Estado o sus agentes, ya sea a través de represión, discriminación o prácticas que vulneren derechos fundamentales. Se sanciona en el derecho constitucional y el derecho internacional de los derechos humanos.
            .div(titulo="Violencia estructural")
              p Conceptualizada en el derecho internacional y los derechos humanos, hace referencia a situaciones de injusticia social, desigualdad o marginación que generan condiciones de opresión o exclusión sistemática.
            .div(titulo="Violencia económica y patrimonial")
              p Se da cuando se priva a una persona de sus recursos, bienes o derechos económicos como forma de sometimiento. Es reconocida en legislaciones sobre violencia de género y derecho laboral.

      .d-flex.align-items-start.bg-verde-oscuro.bg-full-width.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
        img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-44.svg', alt='Texto descriptivo de la imagen')
        .my-auto
          p.pe-xl-3.mb-0.text-white Desde el derecho positivo, la violencia se regula a través de normas que buscan prevenirla, sancionarla y reparar sus efectos. En muchos sistemas jurídicos, la legitimidad del uso de la fuerza depende de su proporcionalidad y justificación, como en casos de legítima defensa o el uso de la fuerza pública en el marco de la Ley.

      #t_3_3.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 3.3
          h2 La violencia en los enfoques iusnaturalista y positivista

      p.mb-4 Para estudiar esta temática, lo invitamos a ver el siguiente video.

      .row.bg-fondo-slider.bg-full-width.py-4.mb-4
        div.px-5.pb-md-3
          figure
            .video
              <iframe width="1905" height="748" src="https://www.youtube.com/embed/ckUeCMMUAew" title="Bienvenida asignatura Filosofía del Derecho" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

      .row.bg-verde.bg-full-width.p-4.py-xl-0.mb-5
        .col-12.col-xl-10.d-flex
          .my-auto
            h2 Conclusión
            span Para Kelsen, la violencia no es algo ajeno al derecho, sino un componente esencial del mismo. El derecho no elimina la violencia, sino que la organiza y legitima, estableciendo quién puede ejercerla y en qué condiciones. Así, más que un medio para evitar la violencia, el derecho es un sistema que la canaliza y monopoliza dentro de una estructura normativa establecida.
        .col-2.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-45.png', alt='Texto que describa la imagen')

      .bg-full-width.border-top-9-azul
        .px-5.pt-5.pb-0
          h2 Material complementario
          .row
            .col-12.col-md-6.col-lg-8
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/119730") Gallo, F. (2017). Celso y Kelsen: para la refundación de la ciencia jurídica. Eudeba.
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://youtu.be/_SCFkW0c7ns?si=BLZtzGRmUEmGE5Rg") [Vídeo] Hupert, P (2020, 18 de marzo) Autoridad y subjetividad: despeje y estrategia. Clase introductoria.
            .col-12.col-md-6.col-lg-3
              figure
                img(src='@/assets/componentes/material-complementario.svg' alt='Imagen de material complementario')

</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
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
