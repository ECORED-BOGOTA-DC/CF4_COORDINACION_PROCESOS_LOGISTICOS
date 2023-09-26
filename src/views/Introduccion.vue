<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/intro1.png')})`}" data-aos="fade-right"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 La definición más asequible de una oferta es la cantidad de bienes o servicios que el vendedor se propone vender, dichos bienes o servicios pueden ser cualquier cosa que se les ocurra. La demanda es la cantidad de bienes o servicios que la gente quiere comprar, todas las personas del planeta necesitan un bien o servicio y por eso una de las partes más llamativas de un mercado es la relación oferta-demanda y cómo interactúan.
        br
        br
        | La relación oferta-demanda de bienes o servicios cambia o depende de la disposición de los bienes en el mercado. La demanda va de la mano con la oferta, fijando los precios y los productos que se van a producir. Habitualmente los gobiernos de los países optan por administrar los precios y en algunos casos manejarlos buscando que los consumidores compren más un producto específico, inclusive se puede presentar más productos en el mercado para equilibrar la balanza y el porqué se cuenta en este componente formativo desde donde se entiende unos de los principios básicos de economía que es el que media en los mercados conocido como leyes de oferta y demanda, recuerden que siempre se requiere la satisfacción de los clientes como factor fundamental de una economía.


    
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
