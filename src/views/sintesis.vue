<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5(data-aos="fade-right") Identificar los componentes del mercado y las necesidades del cliente en los procesos logísticos implica comprender el entorno de la empresa, analizar a los actores internos y externos, y satisfacer las expectativas de los clientes en términos de entrega, atención al cliente, calidad y precio. Esto permite diseñar estrategias logísticas eficientes y competitivas.
         
    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Muestra síntesis del componente Identificación de los componentes del mercado y necesidades del cliente, identificando los temas que debe conocer acerca de las variables de marketing, ciclo de vida del producto, oferta y demanda permitiendo conocer las necesidades de los clientes mediante estrategias para generar oferta y demanda.")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
