<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-ip")
      .titulo-principal__numero
        span 1
      h1 Conceptos generales de #[em marketing]

    p(data-aos="fade-right") Se conoce como mercadeo o #[em marketing] todas las acciones que hacen las personas para interactuar en el mercado con otras personas de forma clara buscando un ganar–ganar y es común encontrar en algunos documentos la palabra #[em marketing] que a pesar de estar en inglés se acuñó desde hace un buen tiempo en el mercado hispano o por otro lado la palabra mercadeo que es su traducción al español, para efectos de este componente formativo la palabra mercadeo y #[em marketing] van a funcionar como sinónimos. 
    p.mt-4(data-aos="fade-right") Se inicia por presentar la oferta y la demanda que son los dos conceptos que hacen posible la existencia de un mercado, se puede decir que esta relación es la balanza del mercado como se muestra en el siguiente video:

    figure.mt-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/j33Q8KiaWiw?si=zhLEZueBf0QWib0f" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    separador

    .titulo-segundo(data-aos="fade-right")
      h2#t_1_1 1.1 Plan de mercadeo o #[em marketing] 

    .col-xl-10.m-auto
      .bloque-texto-b.color-secundario.p-4
        .bloque-texto-b__texto
          p(data-aos="fade-right") Para llevar a cabo una negociación es necesario establecer una estrategia para generar una oferta y una demanda específica con la que beneficia un mercado, es ahí cuando se presenta el concepto de plan de mercadeo o #[em marketing] que es el proceso de desarrollo y ejecución de tácticas empresariales que buscan un objetivo comercial. En el ecosistema empresarial, los planes de mercadeo son el apoyo y la guía para que las empresas decidan el camino a tomar, facilitando la búsqueda de los objetivos metas que habitualmente son comerciales o también llamados de ventas y participación en el mercado.<br><br>
          p.mt-4(data-aos="fade-right") El plan de #[em marketing] se suele adecuar a las decisiones y actuaciones que aseguren la supervivencia de la empresa a largo plazo, por lo que suele relacionarse más con el ámbito estratégico que con el operativo. El plan de mercadeo es un instrumento que se recomienda para toda persona que busca ser competitiva. La American #[em Marketing] Asociation - A.M.A. (2021) lo define como un documento compuesto por un análisis de la situación de mercadotecnia actual, el análisis de las oportunidades y amenazas, los objetivos de mercadotecnia, la estrategia de mercadotecnia, los programas de acción y los ingresos proyectados.<br><br>
          p.mt-4(data-aos="fade-right") Es una herramienta que permite juzgar si las estrategias definidas están obteniendo los resultados esperados o no e ir incorporando correcciones antes, durante y al final de todo el proceso de ejecución, gracias a la monitorización y evaluación constante de todas las actuaciones puestas en práctica dentro del ámbito de la compañía.

    br
    h4.mt-5(style="color:#1A0F91;" data-aos="fade-right") ¿Qué debería incluir un buen plan de mercadeo? 
    p.mt-5(data-aos="fade-right") Hacer un buen plan de mercadeo requiere de algunos conocimientos de economía y de la relación que las personas tienen entre sí, cuando una relación comercial, hay que saber que el mercado se realiza entre personas que pueden ser personas naturales o personas jurídicas conocidas como empresas. A manera de generalidades se entiende que un plan de mercadeo para que llegue a ser bueno debe considerar los siguientes elementos: 

    figure.mt-5
      img(src="@/assets/curso/tema1/1.svg" data-aos="zoom-in-up" alt="Muestra  los 5  elementos de un plan  marketing que se definen en la parte inferior de la imagen")
    
    separador

    .titulo-segundo(data-aos="fade-right")
      h2#t_1_2 1.2 Variables del #[em marketing]
    
    p(data-aos="fade-right") Estas variables son más conocidas como #[em marketing] mix y es la metodología basada en el diseño y la ejecución de estrategias de mercados, para el posicionamiento del producto; hace referencia a cuatro áreas de actuación del #[em marketing], denominadas 4p´s (por sus siglas en inglés) #[em Product, Price, Place], Promotion que en español serían: producto, precio, distribución y promoción y/o comunicación.
    p.mt-4(data-aos="fade-right") Entre las variables se dan los instrumentos del mercado que cada empresa debe combinar adecuadamente para conseguir los objetivos comerciales, son cuatro elementos que al parecer pueden ser controlables (aunque el precio varía de acuerdo a la oferta y la demanda), sobre las que debe apoyarse toda acción de #[em marketing].
    p.mt-4(data-aos="fade-right") Para la ejecución de estas, deben diseñarse planes específicos y políticas claras para cada uno de estos componentes, estos planes deben ser medibles y alcanzables en el corto, mediano y largo plazo.

    .col-xl-8.m-auto.mt-5.col-lg-10
      .titulo-sexto.color-acento-contenido(data-aos="fade-right")
        h5 Figura 1
        span #[em Marketing] Mix
      figure.mt-4
        img(src="@/assets/curso/tema1/2.svg" data-aos="zoom-in-up" alt="Muestra los componentes del marketing mix: mercado, producto, precio, promoción y distribución")

    p.mt-5(data-aos="fade-right") La relación e interrelación de estas variables son las que les dan la esencia a los planes comerciales de muchas empresas. A continuación, se hace relación a cada una de estas variables:

    TabsB.tabs1.color-acento-contenido.mt-5(data-aos="zoom-in")
      .py-4.py-md-5(titulo="Producto" :icono="require('@/assets/curso/tema1/3.svg')")
        .row.col-xl-11.m-auto
          .col-lg-7.mb-4.mb-lg-0
            p El producto es cualquier bien o servicio que se ofrece al mercado y que representa el medio para satisfacer las necesidades o deseos del consumidor, por ello, los beneficios que reportan los productos son más importantes que sus características.
          .col-lg-5
            figure
              img(src='@/assets/curso/tema1/10.png' alt="Imagen decorativa")
      .py-4.py-md-5(titulo="Niveles del producto" :icono="require('@/assets/curso/tema1/4.svg')")
        .row.col-xl-11.m-auto
          .col-lg-7.mb-4.mb-lg-0
            p Para Kottler, & Keller, (2016), el producto debe ser observado en tres niveles: #[strong producto básico, producto real y producto aumentado].
            p.mt-3 #[strong Producto básico:] hace referencia a lo que realmente compra el cliente con el fin de resolver un problema de necesidad básica. #[strong Ej].: Una mujer compra un perfume, lo que realmente se compra es el buen olor que se tendrá al utilizarlo.
            p.mt-3 #[strong Producto real:]  es un producto que tiene ciertas características, como calidad, características específicas, nombres, empaques, etc. #[strong Ej].: Cuando una mujer compra un perfume, además de recibir un producto que sirve para cautivar con su olor, recibe un producto con determinadas características físicas como tamaño o color, de igual manera recibe la marca y la calidad del producto.
            p.mt-3 #[strong Producto aumentado:] el producto es mucho más que el beneficio esperado básicos y que las características de los productos, se refiere a aspectos como la garantía, el servicio posventa, el crédito, la entrega, la instalación, #[strong Ej].: Cuando un cliente adquiere una lavadora de ropa, adquiere también una garantía por uno, dos o tres años, adquiere la posibilidad de acceder a un crédito directo y en ocasiones incluso tiene la posibilidad de que la entrega del producto se la realice a domicilio e inclusive que la instalación sea gratis por parte de la empresa.
          .col-lg-5
            figure
              img(src='@/assets/curso/tema1/11.svg' alt="Imagen decorativa")
      .py-4.py-md-5(titulo="Precio" :icono="require('@/assets/curso/tema1/5.svg')")
        .row.col-xl-11.m-auto
          .col-lg-7.mb-4.mb-lg-0
            p El precio es la cantidad que el cliente paga por el producto y determina los beneficios económicos que obtendrá la empresa en cada venta; al establecer el precio, se debe tener en cuenta el valor percibido por el cliente y cuánto está dispuesto a pagar por el producto. El precio va a determinar a su vez la imagen que tendrá el cliente del producto, puesto que en muchas ocasiones un precio alto es sinónimo de calidad, mientras que un precio bajo refleja lo contrario.
            p.mt-3 Al contrario que en el producto, las decisiones sobre precios pueden ser a corto plazo, ya que se pueden modificar con rapidez.
            p.mt-3 #[strong Las decisiones relativas al precio incluyen estudiar:]
            ul.fa-ul.mt-3
              li.mb-2
                i.fas.fa-angle-right.fa-li(style="color:#FE7062;")
                | Los costes en los que se debe incurrir para elaborar el producto.
              li.mb-2
                i.fas.fa-angle-right.fa-li(style="color:#FE7062;")
                | Los márgenes que se van a aplicar en la venta de cada producto, es decir, la diferencia entre el precio de venta y los costes de producción.
              li.mb-2
                i.fas.fa-angle-right.fa-li(style="color:#FE7062;")
                | Los descuentos que se aplicarán por volumen, por pronto pago, etc.
              li 
                i.fas.fa-angle-right.fa-li(style="color:#FE7062;")
                | La repercusión que tendrá la modificación del precio de un producto en la demanda del resto de productos de la empresa. 
          .col-lg-5
            figure
              img(src='@/assets/curso/tema1/12.png' alt="Imagen decorativa")
      .py-4.py-md-5(titulo="Cálculo del precio" :icono="require('@/assets/curso/tema1/6.svg')")
        .row.col-xl-11.m-auto
          .col-lg-6.mb-4.mb-lg-0
            p Formas para calcular el precio:
            ul.fa-ul.mt-3
              li.mb-2
                i.fas.fa-angle-right.fa-li(style="color:#FE7062;")
                | #[strong Precios en función de la demanda:] precio que el comprador está dispuesto a pagar frente a un producto según su necesidad (calidad, confiabilidad, marca, etc., ) Es necesario realizar estudios de mercado para disponer esta dinámica.
              li.mb-2
                i.fas.fa-angle-right.fa-li(style="color:#FE7062;")
                | #[strong Precios con base en datos históricos:] requiere de una investigación para obtener los precios de los productos o servicios similares a través de un determinado periodo de tiempo hacia atrás.
              li.mb-2
                i.fas.fa-angle-right.fa-li(style="color:#FE7062;")
                | #[strong Precios en función al ciclo de vida:] los productos nacen, se desarrollan y decrecen en todos los mercados. Por ello, en la medida a que el producto entra al mercado, se pueden establecer precios altos si las características del mercado lo permiten. 
              li.mb-2
                i.fas.fa-angle-right.fa-li(style="color:#FE7062;")
                | #[strong Precios en función de la competencia:] requiere de una investigación para obtener los precios de la competencia por productos similares a los propios.
              li.mb-2
                i.fas.fa-angle-right.fa-li(style="color:#FE7062;")
                | #[strong Precios dependiendo de las zonas geográficas:] se determina las características del lugar donde se va a vender el producto. Eje.: El clima, por adquisitivo de los clientes.
              li.mb-2
                i.fas.fa-angle-right.fa-li(style="color:#FE7062;")
                | #[strong Precios en función de los costos:] consiste en añadir un margen comercial de utilidad al precio del costo del producto.
              li
                i.fas.fa-angle-right.fa-li(style="color:#FE7062;")
                | #[strong Precios con base en los Incoterms:] para procesos de comercialización internacional.
          .col-lg-6
            figure
              img(src='@/assets/curso/tema1/13.svg' alt="Muestra las 7 formas de calcular el precio y se definen enseguida de la imagen.")
      .py-4.py-md-5(titulo="Promoción" :icono="require('@/assets/curso/tema1/7.svg')")
        .row.col-xl-11.m-auto
          .col-lg-6.mb-4.mb-lg-0
            p La promoción de un producto analiza todos los esfuerzos de comunicación y elección de medios que la empresa utiliza para dar a conocer el producto y aumentar sus ventas en el mercado. Se consideran variables como publicidad, relaciones públicas, medios de difusión, #[em marketing] digital, ferias nacionales e internacionales, etc.
            p.mt-3 La empresa debe estudiar cómo se van a combinar los diferentes instrumentos de comunicación para optimizar los recursos y conseguir los mejores resultados. El empleo de una u otra forma de comunicación depende de las características del producto, del mercado en el que se opere, de la competencia existente o del público objetivo, entre otros.
            p.mt-3 Las decisiones relativas a la comunicación implican establecer:
            ul.fa-ul.mt-3
              li.mb-2
                i.fas.fa-angle-right.fa-li(style="color:#FE7062;")
                | La estrategia de la dirección de ventas, que incluye determinar el tamaño y composición del equipo de ventas, el reparto de tareas, el diseño de las zonas de venta, etc.
              li.mb-2
                i.fas.fa-angle-right.fa-li(style="color:#FE7062;")
                | El presupuesto destinado a comunicación.
              li
                i.fas.fa-angle-right.fa-li(style="color:#FE7062;")
                | Las herramientas de comunicación que se van a emplear.
            p.mt-4 En muchas empresas estas estrategias se conocen como “publicidad”.
          .col-lg-6
            figure
              img(src='@/assets/curso/tema1/14.svg' alt="Imagen decorativa")
      .py-4.py-md-5(titulo="Distribución" :icono="require('@/assets/curso/tema1/8.svg')")
        .row.col-xl-11.m-auto
          .col-lg-6.mb-4.mb-lg-0
            p La distribución comprende todas las actividades que deben realizarse para trasladar o colocar el producto/servicio de los productores a los consumidores desde el lugar de origen o producción al consumidor, eliminando brechas importantes de tiempo, lugar y posesión que los separan de quienes los usarán.
            p.mt-3 En un canal de distribución participan tres actores importantes:
            ul.fa-ul.mt-3
              li.mb-2
                i.fas.fa-angle-right.fa-li(style="color:#FE7062;")
                | Los productores.
              li.mb-2
                i.fas.fa-angle-right.fa-li(style="color:#FE7062;")
                | Los mayoristas, compran los productos a los fabricantes o a otros mayoristas y los venden a los minoristas o a otros mayoristas, pero nunca al consumidor final.
              li
                i.fas.fa-angle-right.fa-li(style="color:#FE7062;")
                | Los minoristas o detallistas, compran las mercancías a los fabricantes o a los mayoristas y los venden directamente al consumidor final.
            p.mt-4 Estos participantes pueden ser almacenes, empresas de transporte, comercios, entre otros.
            p.mt-3 Desde que comienza su camino, desde su lugar de fabricación hasta el establecimiento comercial, el producto pasa por diversos intermediarios que representan las distintas fases del canal de distribución.
          .col-lg-6
            figure
              img(src='@/assets/curso/tema1/15.png' alt="Imagen decorativa")
      .py-4.py-md-5(titulo="Canales de distribución" :icono="require('@/assets/curso/tema1/9.svg')")
        .row.col-xl-11.m-auto
          .col-lg-6.mb-4.mb-lg-0
            p Los procesos de distribución son variables, por eso se establecen unos parámetros que dependen de las fases que se deben cubrir con esa cadena como lo puede ver en la siguiente figura: 
            p.mt-3 En función de cuántas sean estas fases, se distinguen cuatro tipos de canales de acuerdo a las características.
            .tabla-a.color-acento-botones.mt-4(style="min-width:100%;max-width:100%;width:100%;") 
              table(style="min-width:100%;max-width:100%;width:100%;")
                tbody
                  tr
                    td.p-4.fw-bold.text-center(style="border-color:#AFAFAF;background-color:#E8E8E8;border-left:5px #3BC192 solid !important; width:35%;") Corto/directo
                    td.p-4.text-center(style="border-color:#AFAFAF;background-color:#fff;") No existe ningún intermediario: el producto llega al consumidor final directamente desde el fabricante.
                  tr
                    td.p-4.fw-bold.text-center(style="border-color:#AFAFAF;background-color:#E8E8E8;border-left:5px #3BC192 solid !important; width:35%;") Corto
                    td.p-4.text-center(style="border-color:#AFAFAF;background-color:#fff;") Consta de un intermediario, minorista, que ofrece el producto al consumidor final.
                  tr
                    td.p-4.fw-bold.text-center(style="border-color:#AFAFAF;background-color:#E8E8E8;border-left:5px #3BC192 solid !important; width:35%;") Largo
                    td.p-4.text-center(style="border-color:#AFAFAF;background-color:#fff;") Introduce dos intermediarios entre el fabricante y el consumidor final.
                  tr
                    td.p-4.fw-bold.text-center(style="border-color:#AFAFAF;background-color:#E8E8E8;border-left:5px #3BC192 solid !important; width:35%;") Muy largo
                    td.p-4.text-center(style="border-color:#AFAFAF;background-color:#fff;") Introduce dos intermediarios entre el fabricante y el consumidor final.
          .col-lg-6
            figure
              img(src='@/assets/curso/tema1/16.svg' alt="Imagen decorativa")
    
    separador

    .titulo-segundo(data-aos="fade-right")
      h2#t_1_3 1.3 Ciclo de vida del producto
    
    p(data-aos="fade-right") El ciclo de vida de un producto se puede considerar como el concepto más importante en el proceso de logística y comercialización, es prudente conocerlo porque se debe entender que la mayoría de los productos tienen competidores de mercado y eso da un comportamiento que se puede prever o conocer, aunque en algunas ocasiones es inesperado. Cada día nacen cantidades de productos que fallecen rápidamente sin encontrar el secreto de la vida. 
    p.mt-4(data-aos="fade-right") Todo producto atraviesa distintas etapas a lo largo del tiempo. Una vez introducido un producto nuevo en el mercado, este sigue una evolución que asocia al ciclo de vida de cualquier ser vivo, se puede decir que los productos “nacen, crecen, maduran y mueren”; el ciclo de vida de los productos se puede ver como una línea de tiempo que transcurre desde su creación y lanzamiento en el mercado hasta su declive logrando en algunos casos desaparecer el producto de un mercado.

    .col-xl-8.m-auto.mt-5.col-lg-10
      .titulo-sexto.color-acento-contenido(data-aos="fade-right")
        h5 Figura 2
        span Ciclo de vida de los productos
      figure.mt-5
        img(src="@/assets/curso/tema1/17.svg" data-aos="zoom-in-up" alt="Muestra gráfica del ciclo de vida de productos donde esta con una curva que pasa por las fases de introducción, crecimiento, madurez es la parte alta y declive donde baja nuevamente.")
    
    br
    h4.mt-5(style="color:#1A0F91;" data-aos="fade-right") Fases del ciclo de vida del producto
    p.mt-4(data-aos="fade-right") Los productos (en las empresas de productos) son los elementos más importantes de una empresa y en gran medida determina su existencia. No todos los productos permanecen en el mismo período e incluso las fluctuaciones de ventas de la mayoría de productos son diferentes y no existe la misma situación en términos de precio, publicidad y #[em marketing] entre dos productos que puedan parecer similares, aunque su proceso es el mismo como lo dice Gódas (2006) “la vida de cada producto tiene un desarrollo diferente, pero sigue el mismo ciclo, es decir, su ciclo de vida” (p.110).
    p.mt-4(data-aos="fade-right") Se pueden entender las fases en el siguiente orden dentro del ciclo:

    .cont_1_2.mt-5
      .col-xl-8.m-auto.col-lg-10
        .row
          .col-lg-4.col-md-6.mb-md-0.mb-4(style="place-self:center;")
            figure
              img(src="@/assets/curso/tema1/18.svg" data-aos="zoom-in-right" alt="Imagen decorativa")
          .col-lg-8.col-md-6(style="place-self:center;")
            ul.fa-ul.mb-0
              li.mb-2(data-aos="zoom-in-left")
                i.fas.fa-angle-right.fa-li(style="color:#FE7062;")
                | Introducción.
              li.mb-2(data-aos="zoom-in-left")
                i.fas.fa-angle-right.fa-li(style="color:#FE7062;")
                | Crecimiento.
              li.mb-2(data-aos="zoom-in-left")
                i.fas.fa-angle-right.fa-li(style="color:#FE7062;")
                | Madurez.
              li.mb-2(data-aos="zoom-in-left")
                i.fas.fa-angle-right.fa-li(style="color:#FE7062;")
                | Declive.
              li(data-aos="zoom-in-left")
                i.fas.fa-angle-right.fa-li(style="color:#FE7062;")
                | Desaparición.

    p.mt-5(data-aos="fade-right") Cada una de las fases se presenta con mayor detalle en el siguiente recurso:

    LineaTiempoD.color-secundario.mt-5(data-aos="zoom-in")
      div(numero="1" titulo="Introducción")
        p Es el punto de partida en la vida comercial de un producto e inicia con su puesta en el mercado. Es una etapa crítica en la salida del producto al mercado, puesto que normalmente entre el 50% y el 70% de los productos lanzados fracasan en el mercado.
        p.mt-3 Algunos indicadores de esta fase son:
        ul.fa-ul.mb-0.mt-3
          li.mb-2
            i.fas.fa-angle-right.fa-li(style="color:#FE7062;")
            | Al tratarse de un período inicial, tanto ventas como beneficios son bajos. Hay posibles barreras de entrada al mercado.
          li.mb-2
            i.fas.fa-angle-right.fa-li(style="color:#FE7062;")
            | Se debe realizar una importante inversión técnica, comercial y de comunicación para el lanzamiento del producto
          li.mb-2
            i.fas.fa-angle-right.fa-li(style="color:#FE7062;")
            | Es una etapa cuya duración está directamente relacionada con las características del producto, su complejidad, grado de novedad y capacidad de satisfacción de las necesidades de los consumidores.
          li.mb-2
            i.fas.fa-angle-right.fa-li(style="color:#FE7062;")
            | Se trata de un período caracterizado por la rentabilidad negativa, donde son necesarios esfuerzos en publicidad y distribución que no se ven acompañados por un alto volumen de ventas y beneficios. 
          li.mb-2
            i.fas.fa-angle-right.fa-li(style="color:#FE7062;")
            | Desde un punto de vista estratégico, el objetivo principal es expandir el mercado.
          li
            i.fas.fa-angle-right.fa-li(style="color:#FE7062;")
            | Se consiguen pocos clientes, el precio del producto es alto y el futuro del producto incierto.
      div(numero="2" titulo="Crecimiento")
        p En esta etapa el producto ya es conocido, por lo tanto, aumentan los clientes y las ventas rápidamente, y se genera la etapa de despegue del producto. Atraídos por la novedad, aparecen los primeros competidores, por lo que la competencia se intensifica aumentando por tanto el número de puntos de venta y los nuevos canales de distribución.
        p.mt-3 Algunos indicadores de este paso son:
        ul.fa-ul.mb-0.mt-3
          li.mb-2
            i.fas.fa-angle-right.fa-li(style="color:#FE7062;")
            | El número de compradores aumenta también, atraídos tanto por la novedad como por la publicidad realizada.
          li.mb-2
            i.fas.fa-angle-right.fa-li(style="color:#FE7062;")
            | Con el incremento de las ventas, aparecen nuevas versiones del producto y mejoran sus prestaciones. 
          li.mb-2
            i.fas.fa-angle-right.fa-li(style="color:#FE7062;")
            | La inversión en publicidad es alta y se intenta atraer a nuevos compradores.
          li.mb-2
            i.fas.fa-angle-right.fa-li(style="color:#FE7062;")
            | A pesar de que en esta etapa los precios son altos, generalmente empiezan a descender.
          li
            i.fas.fa-angle-right.fa-li(style="color:#FE7062;")
            | Es posible que en esta etapa se produzcan turbulencias debidas tanto a la propia trayectoria del producto como a las presiones internas de la empresa o las propias del mercado.
      div(numero="3" titulo="Madurez")
        p Una vez finalizada la fase de crecimiento, se inicia la de madurez; esta fase se caracteriza por un crecimiento moderado de las ventas, e incluso su estabilización, a la vez que se da un estancamiento primero y un descenso después de los beneficios.
        p.mt-3 La madurez suele ser el paso más largo del ciclo y se caracteriza por:
        ul.fa-ul.mb-0.mt-3
          li.mb-2
            i.fas.fa-angle-right.fa-li(style="color:#FE7062;")
            | La demanda se produce por reposición de producto o por la extensión a través de la aparición de familias de producto, ello es consecuencia de la mayor dificultad para colocar el producto en el mercado y la presión cada vez mayor de los competidores. 
          li.mb-2
            i.fas.fa-angle-right.fa-li(style="color:#FE7062;")
            | Paralela a la competencia en productos, se hace intensa la competencia en precios y, por tanto, la presión a la baja de éstos.
          li.mb-2
            i.fas.fa-angle-right.fa-li(style="color:#FE7062;")
            | La estrategia en publicidad disminuye y se centra en conseguir la lealtad a la marca, a la vez que en encontrar nuevos usos del producto.
          li.mb-2
            i.fas.fa-angle-right.fa-li(style="color:#FE7062;")
            | La rentabilidad sigue siendo positiva, aunque menor.
          li.mb-2
            i.fas.fa-angle-right.fa-li(style="color:#FE7062;")
            | No son necesarias grandes inversiones tecnológicas, lo que permite extender las familias de producto o invertir en otros productos que se hallan en las primeras fases de vida. 
          li
            i.fas.fa-angle-right.fa-li(style="color:#FE7062;")
            | Desde un punto de vista estratégico, el objetivo principal es defender la participación o cuota de mercado.
      div(numero="4" titulo="Declive")
        p Esta fase es la anterior a la desaparición del producto del mercado. Las ventas son cada vez menores y los beneficios tienden a desaparecer; la producción se concentra en pocas empresas, que ofrecen una menor variedad de producto, lo que hace que la industria se reduzca. 
        p.mt-3 Algunas de las características de este paso son:
        ul.fa-ul.mb-0.mt-3
          li.mb-2
            i.fas.fa-angle-right.fa-li(style="color:#FE7062;")
            | Los precios que habían empezado a descender tienden a estabilizarse y pueden llegar incluso a subir si la oferta de los competidores disminuye.
          li.mb-2
            i.fas.fa-angle-right.fa-li(style="color:#FE7062;")
            | No todas las empresas son conscientes que han llegado o se encuentran en esta etapa, en la que la caída de las ventas puede tener su origen en la aparición de productos alternativos más económicos, cambio en las preferencias de los consumidores, avances tecnológicos, etc.
          li.mb-2
            i.fas.fa-angle-right.fa-li(style="color:#FE7062;")
            | Las inversiones en publicidad son mínimas y se trata principalmente de mantener la lealtad de los consumidores que todavía adquieren el producto.
          li
            i.fas.fa-angle-right.fa-li(style="color:#FE7062;")
            | Desde un punto de vista estratégico, el objetivo principal se centra en la productividad, lo que implica renovar o abandonar el producto.
      div(numero="5" titulo="Desaparición")
        p Es la fase final del ciclo de vida del producto.
        p.mt-3 Ante los continuos descensos en ventas y los negativos resultados, se decide retirar el producto del mercado. La decisión de retirar un producto del mercado depende en gran medida de las posibilidades de su sustitución por otro más rentable, de rediseñar el propio producto, de encontrar nuevos usos al producto, de conseguir atraer a nuevos consumidores o la desaparición o coexistencia de competidores.
    
    br
    h4.mt-5(style="color:#1A0F91;" data-aos="fade-right") Estrategias para alargar el ciclo de vida del producto
    p.mt-4(data-aos="fade-right") En el caso de que se decida la permanencia del producto y no su desaparición, existen opciones para potenciar existencia de un producto y alargar su vida, tanto desde el punto de vista del producto como del mercado, tal como lo comparte Loaiza (2018) en la siguiente tabla:

    .col-xl-8.m-auto.mt-5.col-lg-10
      .titulo-sexto.color-acento-contenido(data-aos="fade-right")
        h5 Tabla 1
        span Estrategias para alargar el ciclo de vida del producto.
    
    .col-xl-10.m-auto.mt-5
      .tabla-a.color-acento-botones
        table.tabla1
          thead(style="border:0;")
            tr(style="background-color:#57DBD8;" data-aos="fade-right")
              th
              th Introducción
              th Crecimiento
              th Madurez
              th Declive
          tbody
            tr(data-aos="fade-right")
              td.fw-bold(colspan="5") Características del mercado
            tr(style="background-color:#F6F6F6;" data-aos="fade-right")
              td.fw-bold Ventas
              td.text-center Bajas
              td.text-center Crecimiento rápido
              td.text-center Llegando a la cima
              td.text-center Decayendo
            tr(style="background-color:#fff;" data-aos="fade-right")
              td.fw-bold Coste para el cliente
              td.text-center Alto
              td.text-center Medio
              td.text-center Bajo
              td.text-center Bajo
            tr(style="background-color:#F6F6F6;" data-aos="fade-right")
              td.fw-bold Beneficios
              td.text-center Negativos
              td.text-center Creciendo
              td.text-center Altos
              td.text-center Decayendo / Negativos
            tr(style="background-color:#fff;" data-aos="fade-right")
              td.fw-bold Tipo de cliente
              td.text-center Innovadores
              td.text-center Adoptadores tempranos
              td.text-center Mayoría
              td.text-center Rezagados
            tr(style="background-color:#F6F6F6;" data-aos="fade-right")
              td.fw-bold Competidores
              td.text-center Pocos
              td.text-center Creciendo. Algunos imitadores
              td.text-center Muchos. Comienza a disminuir.
              td.text-center Rápida disminución
            tr(data-aos="fade-right")
              td.fw-bold(colspan="5") Estrategias de #[em marketing] para alargar el ciclo de vida
            tr(style="background-color:#F6F6F6;" data-aos="fade-right")
              td.fw-bold Producto
              td.text-center Producto básico
              td.text-center Desarrollo de productos y servicios
              td.text-center Modificaciones y diferenciación. Nueva generación
              td.text-center Eliminación productos débiles
            tr(style="background-color:#fff;" data-aos="fade-right")
              td.fw-bold Precio
              td.text-center Alto/Bajo
              td.text-center Estrategia de penetración
              td.text-center Precio competitivo
              td.text-center Reducción
            tr(style="background-color:#F6F6F6;" data-aos="fade-right")
              td.fw-bold Publicidad
              td.text-center Gasto alto. Dar a conocer el producto
              td.text-center Gasto moderado. Dar a conocer el producto (todo el mercado)
              td.text-center Imagen y diferenciación. Ofertas especiales
              td.text-center Mantener lealtad. Ofertas reducir inventario
            tr(style="background-color:#fff;" data-aos="fade-right")
              td.fw-bold Promociones de ventas
              td.text-center Fomentar la prueba
              td.text-center Moderada
              td.text-center Promover cambio de marca
              td.text-center Reducidas
            tr(style="background-color:#F6F6F6;" data-aos="fade-right")
              td.fw-bold Distribución
              td.text-center Selectiva
              td.text-center Intensiva. Descuentos al canal limitados
              td.text-center Intensiva. Descuentos al canal elevados
              td.text-center Selectiva. Eliminar distribuidores débiles
            tr(style="background-color:#fff;" data-aos="fade-right")
              td.fw-bold Remuneración
              td.text-center Variable. Alto/fijo bajo. Ligado a resultados
              td.text-center Equilibrio entre fijo y variable
              td.text-center Variable bajo / Fijo alto
              td.text-center Fijo
    
    separador

    .titulo-segundo(data-aos="fade-right")
      h2#t_1_4 1.4 Oferta y demanda
    
    p(data-aos="fade-right") La oferta y la demanda son los pesos que hacen que las economías de mercado o capitalistas anden, estos pesos logran establecer las cantidades de productos que requiere el mercado con un precio acorde a las necesidades y demanda, estos dos pesos interactúan en tiempo real gracias a los mercados, entendiendo por mercado toda institución social en la que los bienes y servicios, así como los factores productivos, se intercambian. Así las cosas, se presentan a continuación los conceptos mejor expuestos:

    AcordionA.mt-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul" data-aos="fade-right")
      .row.col-xl-11.m-auto(titulo="Demanda")
        .col-md-6.col-lg-4.mb-md-0.mb-4(style="place-self:center;")
          figure
            img(src='@/assets/curso/tema1/21.svg' alt="Imagen decorativa")
        .col-md-6.col-lg-8(style="place-self:center;")
          p Este concepto refleja la cantidad requerida de un bien o servicio según las necesidades de las personas en precios que el mercado logre soportar y se cumpla con el abastecimiento de las necesidades de los clientes.
          p.mt-4 Todas las personas son demandantes de muchas cosas como se puede ver en las necesidades que se estudiarán más adelante. Demandar significa estar en disposición de adquirir un producto en el precio que el mercado lo presenta.
      .row.col-xl-11.m-auto(titulo="Oferta")
        .col-md-6.col-lg-4.mb-md-0.mb-4(style="place-self:center;")
          figure
            img(src='@/assets/curso/tema1/20.svg' alt="Imagen decorativa")
        .col-md-6.col-lg-8(style="place-self:center;")
          p Completando la definición anterior y haciendo una sola balanza se tiene a la oferta que se define como la cantidad de productos que puede tener una empresa en el mercado para satisfacer la demanda de sus clientes en los precios que le den una utilidad para seguir existiendo. Esta demanda se puede dar por medio del mercado regional o global, ya que la globalización ha hecho posible que desde cualquier esquina del mundo se demanden productos en diferentes latitudes y hay que cumplir con esas entregas por medio de la oferta. 
          p.mt-4 La oferta juega un papel fundamental en la determinación del precio, ya que es la interacción de esta con la demanda no tienen por qué ser iguales para cada tipo de productos e incluso en un mismo producto, dos oferentes diferentes pueden decidir poner un precio diferente.
          p.mt-4 Ofertar es tener la intención clara de comercializar según las intenciones de compra de los usuarios, se debe tener en cuenta que la oferta debe suplir también las necesidades de los productores o de lo contrario se desequilibra la balanza.
        
    separador

    .titulo-segundo(data-aos="fade-right")
      h2#t_1_5 1.5 Mercado Potencial
    
    p(data-aos="fade-right") Se puede considerar como lo dice Economipedia (2021) como el nivel máximo de demanda alcanzable por un determinado producto dada una serie de condiciones. En otras palabras, las probabilidades de éxito del mismo en un mercado.
    p.mt-4(data-aos="fade-right") Continuando con la presentación de Economipedia (2021) se puede entender que por medio de cálculos específicos es posible estimar hipotéticamente la capacidad de mercado de un determinado bien o servicio, por medio del estudio de la demanda potencial es posible conocer la posible acogida de estos. Lo más común es ver este concepto en términos matemáticos con valores de dinero o cantidades físicas del producto en cuestión; en otras palabras, se busca establecer los volúmenes de ventas y sus valores.
    p.mt-4(data-aos="fade-right") Las empresas buscan establecer los niveles de demanda que tendrá en un determinado producto en el sector o espacio geográfico referido, en varios casos se ve como un producto se vende de manera diferente en varios sitios llegando a no ser necesario en algunos puntos de venta.
    p.mt-4(data-aos="fade-right") Existe una fórmula para calcular la demanda potencial y es la siguiente:

    .cont_1_3.mt-5
      .col-xl-11.m-auto
        .row
          .col-lg-5.col-md-6.mb-4.mb-md-0(style="place-self:center;")
            figure
              img(src="@/assets/curso/tema1/23.svg" data-aos="zoom-in-right" alt="Imagen decorativa")
          .col-lg-5.col-md-6(style="place-self:center;")
            .p-4(style="background-color:#BED9FB;border-radius:10px;max-width:250px;" data-aos="zoom-in-left")
              h4.text-center.mb-0 Q : n. p. q
            p.mt-4(data-aos="zoom-in-left") Desde donde:
            p.mt-3(data-aos="zoom-in") #[strong Q:] demanda potencial.
            p.mt-3(data-aos="zoom-in") #[strong n:] número de compradores posibles para el mismo tipo de producto en un determinado mercado.
            p.mt-3(data-aos="zoom-in") #[strong p:] precio promedio del producto en el mercado.
            p.mt-3(data-aos="zoom-in") #[strong q:] cantidad promedio de consumo Per cápita en el mercado.
            p.mt-3(data-aos="zoom-in") #[strong .]: signo de multiplicación

    separador

    .titulo-segundo(data-aos="fade-right")
      h2#t_1_6 1.6 Mercado real
    
    p(data-aos="fade-right") Puesto que los mercados están construidos por personas, hogares, empresas o instituciones que demandan productos, las acciones de #[em marketing] de una empresa deben estar sistemáticamente dirigidas a cubrir los requerimientos particulares de estos mercados para proporcionarles una mejor satisfacción de sus necesidades específicas.
    p.mt-4(data-aos="fade-right") Dentro de esta se encuentra el mercado real, que es aquel que está compuesto por un grupo de personas que tiene necesidad de un producto o servicio y que poseen los medios financieros necesarios para cubrirlo sumado a su interés por adquirirlo.

      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
.tabs1 .tabs-b__tab
  border-bottom: 0px
.cont_1_2
 position: relative
.cont_1_2:before
  content: ''
  position: absolute
  width: 125%
  height: 100%
  top: 0
  left: -15%
  background: url(../assets/curso/tema1/19.png)
  background-size: cover
  background-position: center
.linea-tiempo-d__item.row.linea-tiempo-d__item--selected .linea-tiempo-d__item__content
  background-color: #E9F0FE
.tabla1 th, .tabla1 td
  border: 0
  border-right: 1px #AFAFAF solid
  border-color: #AFAFAF
.tabla1 th:last-child, .tabla1 td:last-child
  border: 0 !important
.acordion .tarjeta.tarjeta--azul
  background-color: #EEFCFB
.tarjeta.tarjeta--azul.acordion__activo
  background-color: #DDF8F7
.cont_1_3
 position: relative
.cont_1_3:before
  content: ''
  position: absolute
  width: 125%
  height: 100%
  top: 0
  left: -15%
  background: url(../assets/curso/tema1/19.png)
  background-size: cover
  background-position: top
</style>
