<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-up")
      .titulo-principal__numero
        span 2
      h1 Diagnostico de necesidades de los clientes
    
    p(data-aos="fade-right") Se inicia por el entendimiento del cliente como ser humano, todos los seres humanos tenemos necesidades increíbles, cada una de las cosas que hacemos en la vida es para abastecer estas necesidades tal como lo ven desde la psicología hasta la economía y muchos pensadores han realizado estudios al respecto. Una de las necesidades básicas del ser humano es la de alimentarse y la de vestirse, eso explica que gran parte del comercio se encargue de llenar esos vacíos, pero no es solo eso de los que viven los humanos, también hay algunas como lo dice Maslow (1943) en su famosa pirámide de necesidades humanas en donde despliega un valor ascendente en cada una de las principales del entorno y desde hace unos años la conectividad se cuenta dentro de las básicas gracias a su importancia en la actual realidad.

    .col-xl-10.m-auto.mt-5
      .titulo-sexto.color-acento-contenido(data-aos="fade-right")
        h5 Figura 3
        span Pirámide de necesidades de Maslow
      figure.mt-4
        img(src="@/assets/curso/tema2/1.svg" data-aos="zoom-in-up" alt="Muestra imagen de pirámide de necesidades de Maaslow en 5 niveles que se describen a continuación de la imagen.")
    
    p.mt-5(data-aos="fade-right") Las necesidades están dadas por categorías y según su orden de abajo (base pirámide) hacia arriba (punta de la pirámide) son:

    ol.lista-ol.mt-4
      li.mb-2(data-aos="fade-right")
        span.text-bold 1. 
        | Necesidades fisiológicas.
      li.mb-2(data-aos="fade-right")
        span.text-bold 2. 
        | Necesidades de seguridad.
      li.mb-2(data-aos="fade-right")
        span.text-bold 3. 
        | Necesidades de amor y pertenencia.
      li.mb-2(data-aos="fade-right")
        span.text-bold 4. 
        | Necesidades de estima.
      li.mb-2(data-aos="fade-right")
        span.text-bold 5. 
        | Necesidades de autorrealización.
    
    p.mt-5(data-aos="fade-right") Luego de ver todas las necesidades humanas, entonces se puede pensar en las necesidades del cómo todas las carencias que enfrenta esa persona en el ámbito del mercado y que le mueve a buscar un producto para poder satisfacerlas. Es ahí, en donde las necesidades del consumidor se vuelven oportunidad del #[em marketing], las empresas tratan de identificar aquellas personas insatisfechas con el propósito de preparar un satisfactor que cubra dicha necesidad.
    p.mt-4(data-aos="fade-right") En consecuencia, los satisfactores que las empresas diseñan para cubrir las necesidades del consumidor se denominan productos, porque se compran y se venden en el mercado. Las formas en que los consumidores distribuyen sus gastos al comprar dependen de cierto número de influencias, como puede ser los precios de los demás bienes, las rentas de los consumidores, su riqueza y sus gustos o preferencias entre los distintos bienes; todas estas variables influyen en la cantidad de la demanda.

    separador

    .titulo-segundo(data-aos="fade-right")
      h2#t_2_1 2.1 Demanda de bienes intermediarios 
    
    p(data-aos="fade-right") El concepto de bienes hace referencia a aquellos elementos físicos que, de alguna manera, satisfacen necesidades humanas. Hay una amplia tipología de bienes atendiendo a sus características y los intermediarios, hacen parte según el grado de transformación.
    p.mt-4(data-aos="fade-right") La demanda de bienes intermediarios, son aquellos recursos materiales, bienes y servicios que se utilizan como productos intermedios durante el proceso productivo, tales como materias primas, combustibles, útiles de oficina, etc. Se compran para la reventa o bien se utilizan como insumos o materias primas para la producción y venta de otros bienes.

    separador

    .titulo-segundo(data-aos="fade-right")
      h2#t_2_2 2.2 Métodos y técnicas de pronósticos para mercados
    
    p(data-aos="fade-right") Según Montemayor (2013) “Pronosticar es realizar un enunciado sobre el valor futuro de una variable de interés, fundamentado ya sea por el análisis de datos históricos disponibles, por el juicio de expertos en el tema o por una combinación de ambas cosas” (p.6). 
    p.mt-4(data-aos="fade-right") Es decir, que inferir lo que puede pasar un futuro inmediato o a mediano plazo apoya en el proceso de toma de decisiones y justamente se reducen los riesgos que incurre el lanzamiento y fabricación de productos, como lo expresa Montemayor (2013):

    .col-xl-10.m-auto.mt-5
      .bloque-texto-b.color-primario.p-4
        .bloque-texto-b__texto
          p(data-aos="fade-right") Inherentemente al realizar un pronóstico, está presente el tiempo, la incertidumbre y la confianza en los datos históricos. En ocasiones no se contará con datos históricos y se deberá confiar en el juicio de expertos para realizar pronósticos de escenarios futuros, teniendo cuidado en controlar el sesgo que pudiera estar presente por el optimismo o inclinación de la persona. Sin embargo, cuando se cuente con datos históricos, es preferible utilizar métodos cuantitativos para generar pronósticos objetivos, sin pasar por alto el juicio de expertos, sobre todo cuando se tienen pocos datos o el pasado no es un buen predictor del futuro. (p.6)

    p.mt-5(data-aos="fade-right") A continuación, se presentan los métodos más usados como pronóstico de un mercado o un producto en un mercado:

    TabsA.color-acento-botones.mt-5(data-aos="zoom-in")
      .tarjeta.color-acento-botones--borde.p-4(titulo="Métodos de pronósticos <br> cualitativos")
        p.mt-3 Los métodos de pronósticos cualitativos se utilizan cuando no se cuenta con datos históricos a la mano y para realizar generalmente pronósticos de largo plazo. Estos métodos parten de las opiniones de expertos y los más recurrentes son:
        ul.fa-ul.mb-0.mt-4
          li.mb-1
            i.fas.fa-angle-right.fa-li(style="color:#FE7062;")
            | Pronóstico visionario.
          li.mb-1
            i.fas.fa-angle-right.fa-li(style="color:#FE7062;")
            | Analogía histórica.
          li.mb-1
            i.fas.fa-angle-right.fa-li(style="color:#FE7062;")
            | Consenso de un panel.
          li
            i.fas.fa-angle-right.fa-li(style="color:#FE7062;")
            | Método Delphi.
      .tarjeta.color-acento-botones--borde.p-4(titulo="Métodos de pronósticos <br> cuantitativos")
        p.mt-3 Cuando se tienen datos históricos, los métodos de pronósticos más frecuentemente utilizados son los cuantitativos. Entre ellos se encuentran:
        ul.fa-ul.mb-0.mt-4
          li.mb-3
            i.fas.fa-angle-right.fa-li(style="color:#FE7062;")
            | #[strong Métodos univariados:] asumen que la variable bajo estudio depende de sus niveles pasados. Dentro de este método se encuentran los métodos de suavización y de descomposición utilizados para realizar pronósticos de corto y mediano plazo.
          li.mb-3
            i.fas.fa-angle-right.fa-li(style="color:#FE7062;")
            | #[strong Métodos multivariados:] asumen que es posible determinar el comportamiento de la variable bajo estudio a partir de los niveles de otras variables bajo control. Dentro de este método se encuentran los de regresión lineal simple y múltiple, empleados para realizar pronósticos de corto, mediano y largo plazo.
    
    separador

    .titulo-segundo(data-aos="fade-right")
      h2#t_2_3 2.3  Proyección de la oferta
    
    p(data-aos="fade-right") Según Hernández (2014) 

    .col-xl-5.m-auto.col-lg-7.m-auto.mt-4
      .cont_2_2(style="position:relative;")
        .d-flex
          div(data-aos="zoom-in-right")
            i.fas.fa-quote-left(style="color:#00BCD4;font-size:30px;")
          div.ps-2.mt-3(data-aos="zoom-in-left")
            h5.mb-0 El propósito que se busca mediante el análisis de la oferta es definir y medir las cantidades y condiciones en que se pone a disposición del mercado un bien o un servicio. La oferta, al igual que la demanda, está en función de una serie de factores, cómo es el precio en el mercado del producto o servicio, entre otros. (párr.1)
            .text-end.w-100
              i.fas.fa-quote-right(style="color:#00BCD4;font-size:30px;")
    
    p.mt-5(data-aos="fade-right") La investigación de campo que se utilice deberá tomar en cuenta todos estos factores junto con el entorno económico en que se desarrolle el proyecto.
    p.mt-4(data-aos="fade-right") Para proyectar la oferta se debe estimar la oferta futura, a partir de los datos de consumo aparente, utilizando uno de los métodos de proyección. El método más recomendable es el de extrapolación de tendencia histórica, que podrá reflejar el crecimiento del número de oferentes.

    br
    h4.mt-5(style="color:#1A0F91;" data-aos="zoom-in") <i class="fas fa-globe fa-spin" style="color: #57DBD8; padding-left: 5px"></i> Tipos de oferta
    
    p.mt-4(data-aos="fade-right") Se requiere saber que la oferta a pesar de ser una sola, tiene tres tipos como lo puede ver a continuación: 
    p.mt-4(data-aos="fade-right") La investigación de campo que se utilice deberá tomar en cuenta todos estos factores junto con el entorno económico en que se desarrolle el proyecto.

    .col-xl-11.m-auto.mt-5
      ul.fa-ul.mb-0
        li.mb-3(data-aos="zoom-in")
          i.fas.fa-atom.fa-li(style="color:#FE7062;")
          | #[strong Oferta competitiva o de mercado libre] #[br] Es aquélla en la que los productores o prestadores de servicios se encuentran en circunstancias de libre competencia.
        li.mb-3(data-aos="zoom-in")
          i.fas.fa-atom.fa-li(style="color:#FE7062;")
          | #[strong Oferta oligopólica] #[br] Se caracteriza porque el mercado se halla controlado por sólo unos cuantos productores o prestadores del servicio. Ellos determinan la oferta, los precios y normalmente.
        li(data-aos="zoom-in")
          i.fas.fa-atom.fa-li(style="color:#FE7062;")
          | #[strong Oferta monopólica] #[br] Se encuentra dominada por un sólo productor o prestador del bien o servicio, que impone calidad, precio y cantidad.
    
    separador

    .titulo-segundo(data-aos="fade-right")
      h2#_t_2_4 2.4  Proyección de la demanda
    
    p(data-aos="fade-right") La proyección de la demanda es el resultado de la información recopilada, la cual nos da un pronóstico de la demanda que se presentará a futuro, pudiendo ser esta positiva o negativa de acuerdo al escenario en que se vaya a invertir. Realizar la estimación de esta permite tomar decisiones acertadas en el giro del negocio. 
    p.mt-4(data-aos="fade-right") El pronóstico se hace importante tal como lo expone ESAN Business (2015) conocer el pronóstico de la demanda permite a las empresas contar con un mínimo de inventario suficiente para abastecer un determinado periodo de ventas y así evitar la escasez de productos, así como generar la proyección de las ventas futuras con el fin de generar presupuestos de costos y estimados de ventas, entre otros. Con el fin de realizar un pronóstico de la demanda (ventas) que permita llevar un mejor control de la producción y así reducir los riesgos de pérdida en la empresa, se pueden aplicar los siguientes métodos:

    .col-xl-10.m-auto.mt-5
      figure
        img(src="@/assets/curso/tema2/3.svg" data-aos="zoom-in-up" alt="Muestra infografía métodos de demanda que se describe seguido a la imagen.")
    
    separador

    .titulo-segundo(data-aos="fade-right")
      h2#t_2_5 2.5 Variación estacional aditiva
    
    p(data-aos="fade-right") Este concepto lo presenta Hernández (2015):

    .col-xl-5.m-auto.col-lg-7.m-auto.mt-5
      .cont_2_2(style="position:relative;")
        .d-flex
          div(data-aos="zoom-in-right")
            i.fas.fa-quote-left(style="color:#00BCD4;font-size:30px;")
          div.ps-2.mt-3(data-aos="zoom-in-left")
            h5.mb-0 Los índices de variación estacional (IVE) son los que recogen el incremento o la disminución porcentual que el componente estacional produce en cada estación anual (mes, trimestre, etc.). Estos índices no deben incidir sobre la serie anual, por lo tanto, su promedio anual siempre debe ser igual a 1 (o 1% si está expresado en tanto por ciento). (párr.2).
            .text-end.w-100
              i.fas.fa-quote-right(style="color:#00BCD4;font-size:30px;")
    
    p.mt-5(data-aos="fade-right") Los coeficientes de variación estacional indican el valor en que aumenta o disminuye la tendencia a causa del componente estacional. Para que estos coeficientes no modifiquen la serie anual siempre deberán sumar 0.
    p.mt-4(data-aos="fade-right") Cuando el componente estacional permanece constante aun cuando existan cambios en el nivel de la tendencia. La estacionalidad es independiente de la tendencia ciclo.

    separador

    .titulo-segundo(data-aos="fade-right")
      h2#t_2_6 2.6 Variación estacional multiplicativa
    
    p(data-aos="fade-right") Cuando se observa que la amplitud del componente estacional varía en forma proporcional al nivel medio de la tendencia. Ante aumentos en la tendencia (T), la relación tendencia estacionalidad (T*E) producirá valores mayores. 
    p.mt-4(data-aos="fade-right") Supone que las 4 componentes actúan entre sí de forma multiplicativa, es decir, el valor observado de Y se obtiene mediante el producto de las 4 componentes.

    separador

    .titulo-segundo(data-aos="fade-right")
      h2#t_2_7 2.7 #[em Forecasting and replenishment]
    
    p(data-aos="fade-right") Es el término técnico para con el que se trabaja un planeamiento participativo y un pronóstico para el reabastecimiento que tiene como idea central el ganar-ganar con planes de negocios entre empresas para compartir metas. A continuación, se presentan estos conceptos por separado:

    AcordionA.mt-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul" data-aos="zoom-in")
      .row.col-xl-11.m-auto(titulo="<em>Forecasting</em>")
        p Consiste en la estimación y previsión de la demanda futura de un producto o servicio, para ello se utilizarán los históricos de la venta, y cualquier tipo de información que sea útil, para obtener la cifra más real posible. No se debe confundir la previsión de ventas con los objetivos de venta.
        p.mt-3 Tener controlados los periodos de baja y alta demanda permite estimular las ventas, subir tarifas y aplicar o flexibilizar restricciones, todo con el objetivo de mejorar los resultados obtenidos.
        p.mt-3 Al mismo, tiempo permite tener un mejor control de las necesidades de recursos como materias primas y personal, proyectar los gastos y planificar campañas de promoción.
      .row.col-xl-11.m-auto(titulo="Componentes de un <em>Forecasting</em>")
        .col-lg-4.mb-4.col-md-6.mb-md-0
          figure
            img(src="@/assets/curso/tema2/4.svg" alt="Imagen decorativa")
        .col-lg-8.col-md-6
          p.fw-bold.mb-0 Visión
          p Hace referencia al análisis y la visión estratégica que debe aplicarse al analizar los 3 tipos de datos y así obtener información que resulte útil para optimizar la gestión.
          p.fw-bold.mt-4.mb-0 Datos históricos
          p Determinar los datos históricos. La comprensión de los resultados pasados es una de las claves para tomar buenas decisiones sobre el rendimiento futuro. 
          p.fw-bold.mt-4.mb-0 Datos futuros
          p El cuidadoso y continuo análisis de los datos pasados y presentes ayuda a mejorar el funcionamiento de la demanda. Estos datos también serán necesarios a la hora de tomar las decisiones y realizar estimaciones de la demanda futura y de las necesidades.
          p.fw-bold.mt-4.mb-0 Datos actuales
          p Los datos actuales son los que proporcionan sobre el estado presente.
      .row.col-xl-11.m-auto(titulo="<em>Replenishment</em>")
        p Es un proceso por el cual se notifica en forma diaria al proveedor de las ventas reales realizadas o de los envíos del centro de distribución, y lo comprometen a reabastecer estas ventas (por tamaño, color, etc.) sin producir faltantes de stock y sin recibir órdenes de reaprovisionamiento.
    
    separador

    .titulo-segundo(data-aos="fade-right")
      h2#t_2_8 2.8  Método #[em Delphi]-factores del entorno

    p(data-aos="fade-right") Este es un método que se engloba dentro de los referidos para hacer prospectiva, que estudian el futuro, en lo que se refiere a la evolución de los factores del entorno tecno-socioeconómico y sus interacciones, según Reguant-Álvarez y Torrado (2016) el objetivo del método es “la estructuración de un proceso de comunicación grupal que es efectivo a la hora de permitir a un grupo de individuos, como un todo, tratar un problema complejo” (p.2). Tal como lo necesita una prospección de ventas, en muchos casos.
    p.mt-4(data-aos="fade-right") La capacidad de predicción de la #[em Delphi] se basa en la utilización sistemática de un juicio intuitivo emitido por un grupo de expertos. En el siguiente recurso se presentan sus ventajas, desventajas y su modo de aplicación:

    AcordionA.mt-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul" data-aos="zoom-in")
      .row.col-xl-11.m-auto(titulo="Ventajas del método")
        p Las ventajas notorias del método son estas:
        ol.lista-ol.mt-3
          li.mb-2
            span.text-bold 1. 
            | Permite obtener información de puntos de vista sobre temas muy amplios o muy específicos. Los ejercicios Delphi son considerados “holísticos”, cubriendo una variedad muy amplia de campos.
          li.mb-2
            span.text-bold 2. 
            | El horizonte de análisis puede ser variado.
          li.mb-2
            span.text-bold 3. 
            | Permite la participación de un gran número de personas, sin que se forme el caos.
          li.mb-2
            span.text-bold 4. 
            | Ayuda a explorar de forma sistemática y objetiva problemas que requieren la concurrencia y opinión cualificada.
          li
            span.text-bold 5. 
            | Elimina o aminora los efectos negativos de las reuniones de grupo “Cara-Cara”.
      .row.col-xl-11.m-auto(titulo="Desventajas del método")
        p A pesar de tener varias ventajas, también se cuentan las siguientes desventajas:
        ol.lista-ol.mt-3
          li.mb-2
            span.text-bold 1. 
            | Su elevado coste.
          li.mb-2
            span.text-bold 2. 
            | Su tiempo de ejecución (desde el período de formulación hasta la obtención de los resultados finales)
          li.mb-2
            span.text-bold 3. 
            | Requiere una masiva participación para que los resultados tengan significancia estadística en la que el grupo debe tener un alto grado de correspondencia con los temas a ser tratados en el ejercicio.
          li.mb-2
            span.text-bold 4. 
            | Una parte crítica del método son las preguntas del cuestionario.
          li.mb-2
            span.text-bold 5. 
            | Sesgos en la elección correcta de los participantes.
          li
            span.text-bold 6. 
            | Elevado número de deserciones debido al tiempo.
      .row.col-xl-11.m-auto(titulo="Aplicación del método paso a paso")
        p La aplicación de este tipo de métodos de prospección son los que permiten a las empresas destacar sobre sus competidores, adelantándose a las necesidades que tienen los usuarios y permitiéndoles ofrecer unos productos y servicios más preparados para las demandas del público.
        p.mt-3 El siguiente recurso representa el paso a paso del método. 
        figure.mt-4
          img(src="@/assets/curso/tema2/6.svg" alt="Imagen que muestra representa el paso a paso del método Delphi y se describe cada uno de los 7 componentes en la parte inferior.")
    
    p.mt-5(data-aos="fade-right") Con la aplicación de estos métodos y el estudio constante del mercado se logra hacer la identificación acertado de las necesidades de los clientes para establecer una buena proyección de las ventas con la que se pronostica la elaboración de los productos sin stock sobrante que posteriormente se pierda. 


</template>

<script>
import TabsA from '../components/TabsA.vue'
export default {
  name: 'Tema2',
  components: {
    TabsA,
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

<style lang="sass">

.cont_2_2:before
  content: ''
  position: absolute
  width: 75%
  height: 53%
  bottom: 0
  right: 0
  background-color: #E2EEFE
.acordion .tarjeta.tarjeta--azul
  background-color: #E6FAF9
.tarjeta.tarjeta--azul.acordion__activo
  background: url(../assets/curso/tema2/5.png)
  background-size: cover
  background-position: center
</style>
