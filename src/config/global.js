export default {
  global: {
    numeroUnidad: '2',
    tituloUnidad: 'El iusnaturalismo y el positivismo jurídico',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Presentación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'El iusnaturalismo',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'El positivismo jurídico',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'La libertad',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'La libertad en la filosofía',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'La libertad en el Derecho',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo:
              'La Libertad en el iusnaturalismo y en el positivismo jurídico',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'La violencia',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'La violencia en la filosofía',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'La libertad en el Derecho',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'La violencia en los enfoques iusnaturalista y positivista',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'La autoridad',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'La autoridad en la filosofía',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'La autoridad en el Derecho',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo:
              'La autoridad en el iusnaturalismo y en el positivismo jurídico',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: '',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'El deber en la filosofía',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'El deber en el Derecho',
            hash: 't_5_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.3',
            titulo:
              'El deber en el iusnaturalismo y en el positivismo jurídico',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
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
    ],
  },
  referencias: [
    {
      referencia:
        'Chomsky, N & Saramago, J. (2017) Temas de filosofía del derecho. Editorial: Corporación de Estudios y Publicaciones.',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/116618/?fs_q=Contratos%20derecho%20civil&prev=fs',
    },
    {
      referencia:
        'Fau, M. (2011). John Locke: clásicos resumidos. Editorial: La Bisagra.',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/76836?fs_q=Contratos%20derecho%20civil&prev=fs',
    },
    {
      referencia: 'Kelsen, H. (2010). Teoría pura del derecho: (ed.). Eudeba.',
      link:
        'https://elibro.net/es/lc/tecnologicadeloriente/titulos/66163?as_all=kelsen&as_all_op=unaccent__icontains&prev=as',
    },
    {
      referencia:
        'Matos, A. S. de M. C. (2019). Revolución, violencia y Derecho: Hans Kelsen y el surgimiento de la Constitución Federal Brasileña de 1934. DOXA. Cuadernos De Filosofía Del Derecho, (42), 63–84',
      link: 'https://rua.ua.es/dspace/bitstream/10045/99635/1/DOXA_42_03.pdf',
    },
    {
      referencia:
        'Paulson, S. L. (2012). La interpretación débil de la autoridad en la Teoría Pura del Derecho de Hans Kelsen. Revista derecho del Estado, (29), 5–49',
      link:
        'https://revistas.uexternado.edu.co/index.php/derest/article/view/3291/2941',
    },
  ],
  glosario: [
    {
      termino: 'Autoridad',
      significado:
        'Capacidad legítima de una persona o institución para ordenar, dirigir o tomar decisiones vinculantes. En el derecho, la autoridad se fundamenta en normas jurídicas que confieren poder de mando y exigibilidad.',
    },
    {
      termino: 'Deber',
      significado:
        'Obligación jurídica o moral que impone una conducta determinada a una persona o grupo. En el derecho, los deberes pueden derivar de normas legales, contratos o principios éticos.',
    },
    {
      termino: 'Estado de naturaleza',
      significado:
        'Concepto filosófico utilizado por teóricos del derecho y la política (como Hobbes, Locke y Rousseau) para describir la condición humana antes de la existencia del Estado y las Leyes. Dependiendo del autor, se concibe como un estado de libertad, igualdad o conflicto permanente.',
    },
    {
      termino: 'Iusnaturalismo',
      significado:
        'Corriente filosófica del derecho que sostiene la existencia de principios jurídicos universales y eternos, derivados de la naturaleza humana o de un orden moral superior, y que sirven como criterio de validez para el derecho positivo.',
    },
    {
      termino: 'Iuspositivismo',
      significado:
        'Doctrina jurídica que afirma que el derecho es un conjunto de normas creadas y aplicadas por el Estado, independientemente de su contenido moral. Según esta corriente, la validez del derecho depende de su origen y no de su justicia.',
    },
    {
      termino: 'Legitimidad',
      significado:
        'Calidad de una norma, institución o acto jurídico que es aceptado como válido y justo por la comunidad. Puede basarse en el derecho positivo (legalidad) o en principios éticos y sociales más amplios.',
    },
    {
      termino: 'Libertad',
      significado:
        'Facultad del ser humano de actuar según su voluntad dentro de los límites establecidos por el derecho y la moral. Puede entenderse como un derecho fundamental que garantiza la autonomía individual frente a la coerción injustificada.',
    },
    {
      termino: 'Naturaleza humana',
      significado:
        'Conjunto de características esenciales y distintivas del ser humano, que pueden incluir la racionalidad, la sociabilidad y la tendencia a crear normas y valores. En filosofía y derecho, es un concepto clave para teorías sobre los derechos naturales y la moralidad.',
    },
    {
      termino: 'Ordenamiento jurídico',
      significado:
        'Conjunto de normas jurídicas que rigen la vida en sociedad, organizadas de manera sistemática y jerárquica. Su estructura suele estar encabezada por la Constitución, seguida de Leyes, reglamentos y otras disposiciones normativas.',
    },
    {
      termino: 'Violencia',
      significado:
        'Uso de la fuerza, ya sea física, psicológica o simbólica, para imponer una voluntad sobre otra persona o grupo. En el ámbito jurídico, puede analizarse desde el derecho penal, el derecho civil (vicios del consentimiento) o los derechos humanos.',
    },
  ],
}
