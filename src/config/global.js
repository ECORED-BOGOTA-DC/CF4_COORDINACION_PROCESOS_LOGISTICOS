export default {
  global: {
    componenteFormativo:
      'Identificación de los componentes del mercado y necesidades del cliente',
    descripcionCurso:
      'En este componente formativo se trabajan los conceptos necesarios para conocer los mercados, algunas necesidades de los clientes dentro de sus niveles y las formas de pronosticar cómo se trabaja una proyección de la oferta y la demanda para cada producto, todo eso en el marco de la logística y la economía empresarial.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-5.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Conceptos generales de marketing',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Plan de mercadeo o marketing',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Variables del marketing',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Ciclo de vida del producto',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Oferta y demanda',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Mercado Potencial',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Mercado real',
            hash: 't_1_6',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Diagnostico de necesidades de los clientes',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Demanda de bienes intermediarios',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Métodos y técnicas de pronósticos para mercados',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Proyección de la oferta',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Proyección de la demanda',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Variación estacional aditiva',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Variación estacional multiplicativa',
            hash: 't_2_6',
          },
          {
            numero: '2.7',
            titulo: '<em>Forecasting and replenishment</em>',
            hash: 't_2_7',
          },
          {
            numero: '2.8',
            titulo: 'Método Delphi-factores del entorno',
            hash: 't_2_8',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      /*{
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },*/
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/121523_CF04_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '',
      referencia: '',
      tipo: '',
      link: '#',
    },
  ],
  glosario: [
    {
      termino: 'Bienes complementarios',
      significado:
        'bienes que se consumen conjuntamente para satisfacer una necesidad y que presentan una elasticidad cruzada negativa.',
    },
    {
      termino: 'Bien inferior',
      significado:
        'bien cuya cantidad demandada disminuye cuando se produce un aumento en la renta del consumidor, manteniéndose todo lo demás constante. Su elasticidad renta es negativa.',
    },
    {
      termino: 'Cantidad demandada',
      significado:
        'cantidad de un bien que los compradores quieren y pueden comprar a determinado precio.',
    },
    {
      termino: 'Curva de demanda',
      significado:
        'gráfico que muestra la relación entre el precio de un bien y la cantidad demandada de dicho bien.',
    },
    {
      termino: 'Curva de oferta',
      significado:
        'gráfico que muestra la relación entre el precio de un bien y la cantidad ofrecida de dicho bien.',
    },
    {
      termino: 'Exceso de demanda',
      significado:
        'situación en que la cantidad demandada excede a la cantidad ofrecida para un valor determinado del precio.',
    },
    {
      termino: 'Exceso de oferta',
      significado:
        'situación en que la cantidad ofrecida excede a la cantidad demandada, para un valor determinado del precio.',
    },
    {
      termino: 'Ley de la demanda',
      significado:
        'relación inversa entre el precio de un bien y la cantidad demandada de ese bien. Esto es, cuando sube el precio de un bien, disminuye la cantidad demandada de ese bien.',
    },
    {
      termino: 'Ley de la oferta',
      significado:
        'relación positiva entre el precio de un bien y la cantidad ofrecida de dicho bien.',
    },
    {
      termino: 'Ley de la oferta y la demanda',
      significado:
        'ley que establece que el precio de un bien se ajustará para equilibrar su oferta y su demanda.',
    },
  ],
  referencias: [
    {
      referencia:
        'American Marketing Asociation - A.M.A. (2021). <em>Marketing Plan Presentation</em>.',
      link: 'https://www.ama.org/marketing-plan-presentation/',
    },
    {
      referencia: 'Banco de la República. (2021). <em>Oferta y demanda</em>.',
      link:
        'https://enciclopedia.banrepcultural.org/index.php/Oferta_y_demanda',
    },
    {
      referencia:
        'Economipedia. (2021). <em>¿Por qué crece el sector del lujo en tiempos de crisis?</em>',
      link:
        'https://economipedia.com/actual/por-que-crece-el-sector-del-lujo-en-tiempos-de-crisis.html#:~:text=Ahora%20bien%2C%20la%20respuesta%20se,valor%20e%20incluso%20lo%20incrementan',
    },
    {
      referencia:
        'ESAN Business. (2015). <em>¿Cómo realizar un pronóstico de la demanda?</em> ESAN Business.',
      link:
        'https://www.esan.edu.pe/apuntes-empresariales/2015/08/realizar-pronostico-demanda/',
    },
    {
      referencia: 'Hernández, I. (2014). <em>Análisis de la oferta</em>.',
      link:
        'https://es.slideshare.net/iTzCoAlThDeZ/analisis-de-la-oferta-38037954',
    },
    {
      referencia:
        'Hernández, R., C. y Cano F. M. (2017). La importancia del benchmarking como herramienta para incrementar la calidad en el servicio en las organizaciones. 31 - 42.',
      link: '',
    },
    {
      referencia:
        'Gódas, L. (2006). El ciclo de vida del producto. <em>Ambito farmacéutico</em>, 25, 8, 110-115.',
      link: '',
    },
    {
      referencia:
        'Kottler, & Keller, (2016). <em>Dirección de marketing</em>. Person. p. 326.',
      link: '',
    },
    {
      referencia:
        'Loaiza, T. J. S. (2018). Del ciclo de vida del producto al ciclo de vida del cliente: Una aproximación hacia una construcción teórica del ciclo de vida del cliente. <em>Investigación & Negocios</em>, 100 - 110.',
      link: '',
    },
    {
      referencia:
        'Maslow, A. (1943). <em>Teoría de la Motivación Humana</em>. Pirámide de necesidades humanas.',
      link: '',
    },
    {
      referencia:
        'Montemayor, G., J. E. (2013). <em>Método de pronósticos para negocios</em>. México: Tecnológico de Monterrey.',
      link: '',
    },
    {
      referencia: 'Parkin, M. (2018). <em>Economía</em>. Editorial Pearson.',
      link: '',
    },
    {
      referencia:
        'Reguant-Álvarez, M.y Torrado-Fonseca, M. (2016). El método Delphi. <em>REIRE</em>, Vol. 9, núm. 1, 87 - 102.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizábal Gutiérrez',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Rodríguez Cuéllar',
          cargo: 'Instructor',
          centro:
            'Regional Huila - Centro de la Industria, la Empresa y los Servicios',
        },
        {
          nombre: 'Luis Fernando Botero Mendoza',
          cargo: 'Diseñador Instruccional',
          centro:
            'Regional Distrito Capital - Centro para la Industria de la Comunicación Gráfica',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Revisor Metodológico y Pedagógico',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Sandra Patricia Hoyos Sepúlveda',
          cargo: 'Revisión y corrección de estilo',
          centro: 'Centro para la Industria de la Comunicación Gráfica',
        },
        {
          nombre: 'Nelly Parra Guarín',
          cargo: 'Adecuación instruccional',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Adriana Marcela Suarez Eljure',
          cargo: 'Diseño web',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Luis Jesús Pérez Madariaga',
          cargo: 'Desarrollo Fullstack',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Lady Adriana Ariza Luque',
          cargo: 'Animación y Producción audiovisual',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Laura Gisselle Murcia Pardo',
          cargo: 'Animación y Producción audiovisual',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animación y Producción audiovisual',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluación de contenidos inclusivos y accesibles',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo: 'Validación de recursos educativos digitales',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Leyson Fabian Castaño Pérez',
          cargo: 'Validación de recursos educativos digitales',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
