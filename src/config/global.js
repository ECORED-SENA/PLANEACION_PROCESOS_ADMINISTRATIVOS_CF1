export default {
  global: {
    componenteFormativo: 'Diagnóstico y análisis organizacional.',
    descripcionCurso:
      'El diagnóstico y análisis organizacional son procesos vitales para una efectiva planeación estratégica que permiten conocer el estado actual de una organización e identificar falencias y oportunidades de mejora, lo que facilita la toma de decisiones y el establecimiento de estrategias que permiten a la organización afrontar los retos que se presentan en un entorno cambiante, competitivo y globalizado. ',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Diagnóstico empresarial',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Técnicas de recolección de información',
            hash: 't_1_1',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Análisis organizacional',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Herramientas de análisis estratégico',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Definición de estrategias',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Plan de acción',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Direccionamiento estratégico',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Objetivos y metas',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Actividades, recursos y responsables',
            hash: 't_3_3',
          },
        ],
      },
    ],
    subMenu: [
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
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
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
  referencias: [
    {
      referencia:
        'Bautista, V., y Robayo, E. (2019). <i>Resumen analítico en educación.</i>',
      link:
        'https://repository.ucatolica.edu.co/bitstream/10983/23371/2/resumen-analitico-en-educacion.pdf',
    },
    {
      referencia:
        'Entrepreneur. (2021). <i>Plan de acción: 6 pasos efectivos para hacerlo sin equivocarte.</i> https://www.entrepreneur.com.',
      link: 'https://www.entrepreneur.com/article/263648',
    },
    {
      referencia:
        'Interactuar.org.co. (2020). <i>Direccionamiento estratégico: claves para entenderlo. Interactuar.org.co.</i>',
      link:
        'https://interactuar.org.co/direccionamiento-estrategico-claves-para-entenderlo/',
    },
    {
      referencia: 'Lugo, Z. (2020). <i>Meta y objetivo.</i>',
      link: 'https://www.diferenciador.com/meta-y-objetivo/',
    },
    {
      referencia: 'Orozco, Y. (2011). <i>Matriz PEYEA.</i>',
      link: 'https://yomaira-orozcocorrea.webnode.es/news/matriz-peyea/',
    },
    {
      referencia: 'Pérez, M. (2021). <i>Tipos de estrategias.</i>',
      link: 'https://www.zonaeconomica.com/tipos-estrategias',
    },
    {
      referencia:
        'Programa de transformación productiva. (2015). <i>Guía de metodología para el diseño e implementación de estrategias de mercadeo innovadoras.</i>',
      link:
        'https://www.colombiaproductiva.com/CMSPages/GetFile.aspx?guid=b12c50cd-d23e-471c-94b5-2ccb64896313',
    },
    {
      referencia:
        'SENA. (2014). <i>Especialización tecnológica diagnóstico y análisis organizacional para unidades productivas. SENA.</i>',
      link: '',
    },
    {
      referencia: 'Universidad ESAN. (2020). <i>Matriz BCG: qué es.</i>',
      link:
        'https://www.esan.edu.pe/apuntes-empresariales/2020/10/matriz-bcg-que-es-y-como-aplicarla-en-las-empresas/',
    },
    {
      referencia: 'Westreicher, G. (2020). <i>Estrategia.</i>',
      link: 'https://economipedia.com/definiciones/estrategia.html',
    },
  ],
  glosario: [
    {
      termino: 'Productividad',
      significado:
        'relación entre la cantidad de productos obtenida por un sistema productivo y los recursos utilizados para obtener dicha producción.',
    },
    {
      termino: 'Competitividad',
      significado:
        'capacidad de generar la mayor satisfacción de los consumidores fijando un precio o la capacidad de poder ofrecer un menor precio fijando la calidad.',
    },
    {
      termino: 'Organizaciones',
      significado:
        'estructuras y sistemas administrativos creadas para lograr metas u objetivos con el apoyo de las propias personas, o con apoyo del talento humano, los recursos disponibles, entre otras.',
    },
    {
      termino: 'Procesos administrativos',
      significado:
        'en una empresa es el modo en que se afronta la gestión de la actividad de esta, a través de sus cuatro fases: planeamiento, organización, dirección y control.',
    },
    {
      termino: 'Entono',
      significado:
        'conjunto de circunstancias o factores sociales, culturales, morales, económicos, profesionales, etc., que rodean una cosa o a una persona, colectividad o época e influyen en su estado o desarrollo.',
    },
    {
      termino: 'Recurso',
      significado:
        'fuente o suministro del cual se produce un beneficio. Recurso se refiere a cuando alguien tiene algo. Normalmente, los recursos son materiales u otros activos que son transformados para producir un beneficio y en el proceso pueden ser consumidos o no estar más disponibles.',
    },
  ],
  complementario: [
    {
      texto:
        'Servicio Nacional de Aprendizaje – SENA. (2014). Microentorno empresarial, Especialización en diagnóstico y análisis organizacional para unidades productivas. SENA.',
      tipo: 'PDF',
      descarga: '/downloads/Anexo_4_Micro_Entorno_Empresarial.pdf',
    },
    {
      texto:
        'Servicio Nacional de Aprendizaje – SENA. (2014). Macroentorno empresarial, Especialización en diagnóstico y análisis organizacional para unidades productivas. SENA.',
      tipo: 'PDF',
      descarga: '/downloads/Anexo_5_Macro_Entorno_Empresarial.pdf',
    },
    {
      texto:
        'Ingenio empresa. (2016), Diagrama de Pareto: Qué es y cómo se hace. Ejemplo práctico paso a paso. [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=vd7QVKpW27Q&t=138s',
    },
    {
      texto:
        'Enplanta Medellín. (2015). Diagrama de causa y efecto en 120 segundos. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=HO-hgBMR9ts',
    },
    {
      texto:
        'Ecosistema de recursos educativos digitales SENA. (2021). Matriz DOFA. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=84fuGpQeYg0',
    },
    {
      texto:
        'Administración y contabilidad. (2021). Matriz DOFA Cruzada. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=g1Vpdv_1WMs',
    },
    {
      texto:
        'Investiguemos. (2018). Elaboración de matriz PEYEA. [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=yXewH37egdw',
    },
    {
      texto:
        'Ideas entre amigos. (2021). Qué es la matriz BCG - Cómo hacer la Matriz BCG de Samsung. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=I5bPUXSe3h8',
    },
    {
      texto:
        'Despegue media. (2021). El poder de la estrategia en los negocios y marketing. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=jwiV9gbjEi8',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Nombre 1', 'Nombre 2'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
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
