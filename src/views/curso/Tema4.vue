<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'4. La autoridad'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

      .row.mb-4.mx-0
        .col-12.col-xl-8.d-flex.align-items-center.bg-azul-claro.p-4(data-aos="fade-up")
          p.mb-0 La autoridad es un concepto central en la organización de las sociedades, porque implica la capacidad de influir, dirigir y normar el comportamiento de los individuos dentro de un grupo o comunidad. Desde la filosofía y el derecho, la autoridad ha sido analizada en función de su legitimidad, su origen y sus límites. En este texto, exploraremos la autoridad en la filosofía, su papel en el derecho y su interpretación desde el iusnaturalismo y el positivismo jurídico.
        .d-none.d-xl-block.col-4.px-0
          img.h-100(src='@/assets/curso/unidad/img-46.png', alt='Texto que describa la imagen')

      #t_4_1.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 4.1
          h2 La autoridad en la filosofía

      p.mb-4 En la filosofía, la autoridad se ha conceptualizado de diversas maneras, a lo largo de la historia, dependiendo de la relación entre el poder, la moral y la racionalidad:

      .row.mb-4
        .col-12.col-lg-7.col-xl-8
          AcordionA(tipo="b")
            .div(titulo="Autoridad en la filosofía clásica")
              p Platón y Aristóteles consideraban que la autoridad debía estar basada en la sabiduría y la razón. Platón defendía un gobierno de los más sabios (los filósofos-reyes), mientras que Aristóteles concebía la autoridad como el resultado del orden natural y de la organización de la <i>polis</i>.
            .div(titulo="Autoridad en la filosofía medieval")
              p Santo Tomás de Aquino relacionaba la autoridad con la ley natural y la voluntad divina. En su visión, la autoridad terrenal solo era legítima si se ajustaba a los principios del derecho natural.
            .div(titulo="Autoridad en la filosofía moderna")
              p Filósofos como Hobbes, Locke y Rousseau, teorizaron sobre el origen de la autoridad en el contrato social. Para Hobbes, la autoridad absoluta era necesaria para evitar el caos del estado de naturaleza. En contraste, Locke y Rousseau, sostenían que la autoridad debía estar limitada por los derechos naturales y la voluntad del pueblo.
            .div(titulo="Autoridad en la filosofía contemporánea")
              p Max Weber distinguió entre tres tipos de autoridad: tradicional (basada en costumbres y herencia), carismática (basada en la personalidad de un líder) y legal-racional (basada en normas e instituciones). Michel Foucault, por su parte, analizó la autoridad como un mecanismo de poder que se ejerce no solo a través del Estado, sino también mediante discursos y estructuras sociales.
        .col-12.col-lg-5.col-xl-4.d-none.d-lg-block(data-aos="zoom-in")
          img(src='@/assets/curso/unidad/img-47.png', alt='Texto que describa la imagen')

      #t_4_2.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 4.2
          h2 La autoridad en el Derecho

      p.mb-4 El derecho desempeña un papel crucial en la definición y regulación de la autoridad, estableciendo las bases de su ejercicio y sus límites. Las apreciaciones sobre la autoridad, en el derecho, están construidas sobre concepciones modernas ancladas a los sistemas democráticos, las constituciones y a tratados internacionales:

      .row.position-relative.mb-5.py-4.bg-fondo-slider.bg-full-width
        div.px-4.px-md-5.py-md-3
          SlyderA(tipo="b").bg-white
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Fuente de la autoridad legal 
                p En los sistemas jurídicos modernos, la autoridad emana de la Constitución y las leyes. Los gobernantes y las instituciones obtienen su autoridad a través de mecanismos legales, como elecciones democráticas o nombramientos, según el derecho positivo.
              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-48.png', alt='Texto que describa la imagen')
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Límites de la autoridad
                p La autoridad no es ilimitada. Existen principios como el Estado de derecho, la separación de poderes y los derechos fundamentales que delimitan el ejercicio del poder y evitan su abuso.
              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-49.png', alt='Texto que describa la imagen')
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Autoridad y coacción
                p Mientras que la autoridad se basa en el reconocimiento y la legitimidad, también tiene un componente coercitivo. El derecho establece sanciones para garantizar el cumplimiento de las normas impuestas por la autoridad.
              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-50.png', alt='Texto que describa la imagen')
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Desobediencia legítima
                p Cuando la autoridad se considera ilegítima o injusta, el derecho reconoce ciertos mecanismos de resistencia, como el derecho a la objeción de conciencia, la protesta pacífica y la desobediencia civil en casos de violaciones a los derechos humanos.
              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-51.png', alt='Texto que describa la imagen')

      #t_4_3.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 4.3
          h2 La autoridad en el iusnaturalismo y en el positivismo jurídico

      p.mb-4 La autoridad en el pensamiento jurídico ha sido objeto de profundas reflexiones, especialmente desde las perspectivas del iusnaturalismo y el positivismo.

      .row.bg-marron.bg-full-width.py-4.mb-5
        div.px-5.pb-md-3.py-4.d-flex
          .col-12.col-xl-7.d-flex.pe-4.pe-xl-5.align-items-center.flex-column
            h2.mb-4.pb-2.me-auto La autoridad en el iusnaturalismo y en el positivismo jurídico
            p.mb-5(data-aos="fade-up") En el PDF La autoridad en el iusnaturalismo y en el positivismo jurídico , se examinan los fundamentos filosófico-jurídicos que sustentan el concepto de autoridad, destacando cómo cada corriente la concibe, justifica y limita, según principios morales o criterios normativos, y cómo estas visiones influyen en la legitimidad del poder en los sistemas jurídicos contemporáneos.
            a.d-flex.me-auto.w-fit.bg-white.box-shadow.cursor-pointer(data-aos="fade-up" :href="obtenerLink('/downloads/.pdf')" target="_blank")
              img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
              p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> La autoridad en el iusnaturalismo y en el positivismo jurídico
          .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="zoom-in")
            img.h-100(src='@/assets/curso/unidad/img-52.png', alt='Texto que describa la imagen')

      .bg-full-width.border-top-9-azul
        .px-5.pt-5.pb-0
          h2 Material complementario
          .row
            .col-12.col-md-6.col-lg-8
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/60855") Damián Traverso, J. (2004). La razón del deber moral y jurídico. Dykinson.
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://www.youtube.com/live/EqiIDsu90DY?si=dk-YV0UE_OZN-pwN") [Vídeo] Cuestionarix (2018, 29 de noviembre) Dominio Social - Derechos y Deberes - 29/11/2018.
            .col-12.col-md-6.col-lg-3
              figure
                img(src='@/assets/componentes/material-complementario.svg' alt='Imagen de material complementario')

</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema4',
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
