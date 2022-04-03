<script>
/**
 * Descripción: pag AboutViewComponent
 *
 * @displayName AboutViewComponent
 */

  const ThePost = () =>
    import(
      /* webpackChunkName: "TenantEditorViewComponent" */ '@/views/sections/ThePost'
    )

  export default {
    name: 'DetailsViewComponent',

    components: {
      ThePost,
    },

    data () {
      return {
        setting: null,
      }
    },

    computed: {
      /**
       * Configuracion BaseLocalDataTable
       */
      list () {
        return [
          {
            id: 1,
            banner: 'maquinaria/Excavadora ZE370E/2.jpg',
            img: 'maquinaria/Excavadora ZE370E/1.jpg',
            url: '/portfolio',
            html: '<div><h1>Excavadora ZE370E</h1><strong>Alta configuración y eficiencia</strong><p>El motor Cummins potente, robusto y duradero reduce el consumo de combustible y ofrece la máxima eficiencia, potencia nominal de hasta 241 kW.Las piezas centrales, como la bomba principal, la válvula principal, el cilindro de aceite y el reductor, adoptan marcas de renombre mundial para garantizar una vida útil superlarga y una alta fiabilidad.</p><br/><strong>Estructura de la máquina confiable y duradera</strong><p>El diseño reforzado de la mesa giratoria, el tren de rodaje, la pluma, el balancín y el cucharón hace que la vida útil del diseño aumente a 15.000 horas.</p><br/><strong>Operación cómoda</strong><p>Cabina de operación espaciosa, un 8% más grande que la de la industria.</p><p>El asiento suspendido proporciona un alto nivel de comodidad al operador.</p><p>El monitor de pantalla grande está equipado con un nuevo sistema operativo de interacción hombre-máquina.</p><p>Todas las funciones recreativas como radio CANBus, USB y Bluetooth están disponibles.</p><br/><strong>Mantenimiento conveniente</strong><p>Todas las piezas de mantenimiento en distribución centralizada son fácilmente accesibles, realizando un mantenimiento integral para garantizar tiempos de mantenimiento cortos.</p><br/><strong>Operación eficiente</strong><p>Con el motor de máxima potencia del mismo tonelaje en la industria, la máquina disfruta de un potente rendimiento y suficiente reserva de marcha al tiempo que garantiza la potencia de salida en diversas condiciones de trabajo.El gran tren de aterrizaje con distancia entre ejes de 4140 mm y ancho de vía de 2590 mm puede garantizar la estabilidad de la máquina dentro del rango de trabajo de primera clase en la industria.</p></div>',
          },
          {
            id: 2,
            banner: 'maquinaria/Excavadora ZE135E-10/2.jpg',
            img: 'maquinaria/Excavadora ZE135E-10/1.jpg',
            url: '/portfolio',
            html: '<div><h1>Excavadora ZE135E-10</h1><strong>Poder fuerte y eficiente</strong><p>El motor CUMMINS diseñado profesionalmente tiene ventajas tales como alta confiabilidad y eficiencia de combustible, baja tasa de fallas y costo de mantenimiento, así como un mantenimiento conveniente. Con una potencia más fuerte, el costo operativo también se reduce. Gracias al sistema hidráulico a medida, el sistema de potencia y el sistema hidráulico se combinan perfectamente, logrando una mayor eficiencia de combustible en más del 13% en el modo económico.</p><br/><strong>Estructura de la máquina confiable y duradera</strong><p>El diseño de perfil grande de los elementos estructurales moldeados integralmente fortalece especialmente las partes clave de la pluma, el balancín, la plataforma superior y el bastidor inferior, obteniendo así una mayor capacidad de carga y una mayor adaptabilidad a las duras condiciones de trabajo.</p><br/><strong>Operación cómoda e inteligente</strong><p>Cabina de operación espaciosa, un 8% más grande que la de la industria.</p><p>Excelente visibilidad panorámica, con más del 51% de transmitancia de vidrio.</p><p>El asiento suspendido proporciona un alto nivel de comodidad al operador.</p><p>El monitor de pantalla grande de 8 pulgadas está equipado con un nuevo sistema operativo de interacción persona-computadora. Todas las funciones recreativas como radio CANBus, USB y Bluetooth están disponibles.</p><br/><strong>Mantenimiento conveniente</strong><p>Todas las piezas de mantenimiento en distribución centralizada son fácilmente accesibles, realizando un mantenimiento integral para garantizar tiempos de mantenimiento cortos.</p><br/><strong>Operación eficiente y estable</strong><p>Equipada con el motor de máxima potencia del mismo tonelaje en la industria, la máquina disfruta de las fuerzas de excavación líderes en la industria del cucharón y el balancín.Además de eso, con el máximo alcance de excavación y el tren de rodaje más grande del mismo tonelaje en la industria, la máquina lidera la industria en eficiencia y estabilidad en el trabajo.</p></div>',
          },
          {
            id: 3,
            banner: 'maquinaria/Excavadora ZE550EK-10/2.jpg',
            img: 'maquinaria/Excavadora ZE550EK-10/1.jpg',
            url: '/portfolio',
            html: '<div><h1>Excavadora ZE550EK-10</h1><strong>Gran poder</strong><p>El motor Stage III CUMMINS es potente, robusto y duradero.</p><p>El control de ralentí automático de tres etapas, el control inteligente y la adaptación razonable mantienen las RPM del motor cerca del punto de trabajo de par máximo para reducir el consumo de combustible.</p><br/><strong>Sistema hidráulico confiable y preciso</strong><p>La combinación meticulosa del sistema hidráulico diseñado profesionalmente con el sistema de potencia garantiza un consumo de aceite reducido y una mayor eficiencia, proporcionando así una experiencia de operación precisa y sensible.</p><p>Se puede proporcionar una fuerza de giro excelente y movimientos simultáneos más sensibles gracias al motor de giro de gran par equipado en la máquina.</p><p>El control eléctrico de procedimiento de la bomba hidráulica y el carrete de la válvula de control refinado brindan un funcionamiento más suave, una mayor eficiencia y un rendimiento de ahorro de energía más excelente.</p><p>Las piezas hidráulicas clave de marcas reconocidas mundialmente cuentan con alta confiabilidad y calidad.</p><br/><strong>Estructura de la máquina confiable y duradera</strong><p>Al adoptar un diseño integrado de gran perfil de piezas estructurales y un diseño resistente de la mesa giratoria y el marco inferior, las ubicaciones clave reforzadas disfrutan de una alta durabilidad.</p><p>La fabricación integrada de pluma y brazo reduce el riesgo de soldadura abierta.</p><p>El cucharón D-ARCS refinado ofrece un mejor ángulo de corte y una experiencia de excavación más fácil de usar. La resistencia al desgaste del tablero trasero se refuerza en un 40%.</p><p>La optimización del diseño de durabilidad de los rodillos de oruga brinda una mayor adaptabilidad a las duras condiciones de trabajo.</p><br/><strong>Operación cómoda e inteligente</strong><p>Cabina de operación espaciosa, un 8% más grande que la de la industria.</p><p>El asiento suspendido proporciona un alto nivel de comodidad al operador.</p><p>El monitor de pantalla grande está equipado con un nuevo sistema operativo de interacción persona-computadora. Todas las funciones recreativas como radio CANBus, USB y Bluetooth están disponibles.</p><p>El sistema IPCS (control de potencia inteligente) recientemente desarrollado, un controlador para maquinaria de construcción profesional, adopta la tecnología CANBus para lograr un control compuesto del motor, la bomba y la válvula de control hidráulico, de modo que la potencia del motor y la bomba principal se pueda llevar al máximo.</p><br/><strong>Mantenimiento conveniente</strong><p>Todas las piezas de mantenimiento en distribución centralizada son fácilmente accesibles, realizando un mantenimiento integral para garantizar tiempos de mantenimiento cortos.</p></div>',
          },
          {
            id: 4,
            banner: 'maquinaria/Excavadora ZE245E/2.jpg',
            img: 'maquinaria/Excavadora ZE245E/1.jpg',
            url: '/portfolio',
            html: '<div><h1>Excavadora ZE245E</h1><strong>Alta configuración y eficiencia</strong><p>El motor Cummins potente, robusto y duradero reduce el consumo de combustible y ofrece la máxima eficiencia.</p><p>Las piezas centrales, como la bomba principal, la válvula principal, el cilindro de aceite y el reductor, adoptan marcas de renombre mundial para garantizar una vida útil superlarga y una alta fiabilidad.</p><br/><strong>Estructura de la máquina confiable y duradera</strong><p>Heredando las ventajas del modelo clásico ZE230E, ZE245E se ha actualizado de forma integral. El diseño reforzado de la mesa giratoria, el tren de aterrizaje, la pluma, el balancín y el cucharón hace que la vida útil del diseño aumente a 12000 horas.</p><br/><strong>Rendimiento excepcional</strong><p>El sistema hidráulico desarrollado y personalizado profesionalmente con tecnología de control automático hace que la combinación precisa de bomba y motor sea una realidad.</p><p>Los movimientos simultáneos son más flexibles, suaves y ahorran energía gracias a la resistencia optimizada de la tubería.</p><p>El cucharón D-ARCS con resistencia reducida y mayor capacidad está bendecido con un diseño de ángulo de corte óptimo. Se pueden seleccionar cucharones con diferentes capacidades (1,0 m³ – 1,3 m³).</p><p>El excelente par de giro entre excavadoras del mismo tonelaje ofrece movimientos de giro más potentes, lo que garantiza de manera efectiva la eficiencia del trabajo de movimientos simultáneos.</p><br/><strong>Operación cómoda</strong><p>Cabina de operación espaciosa, un 8% más grande que la de la industria.</p><p>El asiento suspendido proporciona un alto nivel de comodidad al operador.</p><p>El monitor de pantalla grande está equipado con un nuevo sistema operativo de interacción hombre-máquina.</p><p>Todas las funciones recreativas como radio CANBus, USB y Bluetooth están disponibles.</p><br/><strong>Mantenimiento conveniente</strong><p>Todas las piezas de mantenimiento en distribución centralizada son fácilmente accesibles, realizando un mantenimiento integral para garantizar tiempos de mantenimiento cortos.</p></div>',
          },
          {
            id: 5,
            banner: 'maquinaria/Excavadora ZE75E-10/2.jpg',
            img: 'maquinaria/Excavadora ZE75E-10/1.jpg',
            url: '/portfolio',
            html: '<div><h1>Excavadora ZE75E-10</h1><strong>Ahorro de energía y alta eficiencia</strong><p>El coste del combustible se controla de forma eficaz y se pueden garantizar las devoluciones de los clientes gracias al concepto de diseño de bajo consumo de combustible.</p><p>Motor y componentes hidráulicos de alta eficacia, así como el modo inteligente avanzado de ahorro de combustible.</p><br/><strong>Operación sensible</strong><p>La distribución precisa del flujo de carga variable de múltiples actuadores brinda movimientos simultáneos más coordinados.</p><p>La combinación de respuesta dinámica entre la red de resistencia a líquidos y el sistema hidráulico reduce el impacto del movimiento.</p><br/><strong>Excelente confiabilidad y durabilidad</strong><p>El diseño de perfil grande de los elementos estructurales moldeados integralmente refuerza especialmente las piezas clave, lo que hace que la máquina obtenga una mayor capacidad de carga y mejore la adaptabilidad a condiciones de trabajo adversas.</p><br/><strong>Gran comodidad e inteligencia</strong><p>Cabina de operación espaciosa, excelente visibilidad panorámica, asiento suspendido, proporciona un alto nivel de comodidad al operador.</p><p>Todas las funciones recreativas como monitor de pantalla grande de 5,7 pulgadas, radio CANBus, USB y Bluetooth están disponibles.</p><br/><strong>Mantenimiento conveniente</strong><p>Las cubiertas delantera y trasera se pueden abrir por completo, proporcionan un gran espacio.</p><p>La inspección y el mantenimiento se pueden realizar cómodamente para reducir el tiempo de mantenimiento.</p></div>',
          },
          {
            id: 6,
            banner: 'maquinaria/Excavadora ZE490EK-10/2.jpg',
            img: 'maquinaria/Excavadora ZE490EK-10/1.jpg',
            url: '/portfolio',
            html: '<div><h1>Excavadora ZE490EK-10</h1><strong>Alta configuración y eficiencia</strong><p>El potente, robusto y duradero motor CUMMINS QSM11 reduce el consumo de combustible y ofrece la máxima eficiencia.</p><p>Las piezas centrales, como la bomba principal, la válvula principal, el cilindro de aceite y el reductor, adoptan marcas de renombre mundial para garantizar una vida útil superlarga y una alta fiabilidad.</p><br/><strong>Estructura de la máquina confiable y duradera</strong><p>El diseño reforzado de la mesa giratoria, el tren de rodaje, la pluma, el balancín y el cucharón hace que la vida útil del diseño aumente a 15.000 horas.</p><br/><strong>Operación cómoda</strong><p>Cabina de operación espaciosa, un 8% más grande que la de la industria.</p><p>El asiento suspendido proporciona un alto nivel de comodidad al operador.</p><p>El monitor de pantalla grande está equipado con un nuevo sistema operativo de interacción hombre-máquina.</p><p>Todas las funciones recreativas como radio CANBus, USB y Bluetooth están disponibles.</p><br/><strong>Sistema de control eléctrico avanzado y de clase mundial</strong><p>El sistema de control eléctrico, investigado y desarrollado de forma independiente, con una combinación razonable, puede mejorar eficazmente el cambio de las RPM del motor y reducir el consumo de combustible del motor.</p><p>Sobre la base de la mejora de la eficiencia de carga, el consumo de combustible es básicamente equivalente al de Volvo y Komatsu.</p><br/><strong>Mantenimiento conveniente</strong><p>Todas las piezas de mantenimiento en distribución centralizada son fácilmente accesibles, realizando un mantenimiento integral para garantizar tiempos de mantenimiento cortos.</p><br/><strong>Operación eficiente</strong><p>Equipada con el cucharón más grande del mismo tonelaje en la industria, la máquina disfruta de las mayores fuerzas de excavación del cucharón y el brazo, lo que brinda una construcción de mina fuerte y eficiente y demuestra un comportamiento majestuoso.</p></div>',
          },
          {
            id: 7,
            banner: 'maquinaria/Excavadora ZE215E/2.jpg',
            img: 'maquinaria/Excavadora ZE215E/1.jpg',
            url: '/portfolio',
            html: '<div><h1>Excavadora ZE215E</h1><strong>Ahorro de energía y alta eficiencia.</strong><p>Control de integración electromecánico-hidráulico preciso que combina con cuatro modos de trabajo.</p><p>El flujo de la bomba principal se puede ajustar automáticamente para realizar el control de la proporción de flujo de los actuadores y reducir la pérdida de potencia del flujo de la bomba.</p><p>Con una reducción del consumo de combustible y una alta eficiencia operativa, también disfruta de un rendimiento óptimo.</p><br/><strong>Equipo de trabajo confiable</strong><p>Pluma y balancín reforzados, la vida útil de diseño es de más de 12.000 horas.</p><p>Estructura de gran perfil de alta resistencia, el soporte adopta piezas fundidas y forjadas, la placa de la cabina del cubo adopta acero de alta resistencia y resistencia al desgaste.</p><br/><strong>Rendimiento estable</strong><p>Equipado con motor turboalimentado CUMMINS (ISUZU opcional) para garantizar una gran potencia de salida y menos contaminación.</p><p>El sistema hidráulico de nuevo diseño hace que la potencia del motor y la bomba principal alcancen el estado óptimo.</p><br/><strong>Tren de rodaje robusto y duradero</strong><p>Tren de rodaje de servicio pesado, la vida útil de diseño es de más de 15000 horas.</p><p>Rodillo portador con forma de rodillo inferior, capacidad de carga superior.</p><br/><strong>Operación conveniente</strong><p>Sistema de control de válvulas avanzado, dispositivo de amortiguación suave durante la operación, logrando movimientos más coordinados.</p><p>Palancas de control largas, sistema de control electrónico e interfaz de operación totalmente nuevos.</p></div>',
          },
          {
            id: 8,
            banner: 'maquinaria/Excavadora ZE60E-10/2.jpg',
            img: 'maquinaria/Excavadora ZE60E-10/1.jpg',
            url: '/portfolio',
            html: '<div><h1>Excavadora de cadenas ZE60E-10</h1><h5>Excavadora ZE60E-10</h5><strong>Ahorro de energía y alta eficiencia</strong><p>El sistema de detección de carga especializado y personalizado brinda una operatividad más excelente y una operación más eficiente.</p><p>Junto con la velocidad de giro rápida y la gran capacidad del cucharón, se puede crear más valor para los clientes.</p><br/><strong>Operación sensible</strong><p>La distribución precisa del flujo de carga variable de múltiples actuadores brinda movimientos simultáneos más coordinados.</p><p>Las funciones perfectas de arranque y parada de los joysticks operados por piloto ofrecen un mejor rendimiento del control de microposicionamiento.</p><br/><strong>Excelente confiabilidad y durabilidad</strong><p>El diseño de perfil grande de los elementos estructurales moldeados integralmente fortalece especialmente las piezas clave, lo que hace que la máquina obtenga una mayor capacidad de carga y mejore la adaptabilidad a condiciones de trabajo adversas.</p><br/><strong>Gran comodidad e inteligencia</strong><p>Cabina de operación espaciosa, excelente visibilidad panorámica, asiento suspendido, proporciona un alto nivel de comodidad al operador.</p><p>Todas las funciones recreativas como monitor de pantalla grande de 5,7 pulgadas, radio CANBus, USB y Bluetooth están disponibles.</p><br/><strong>Mantenimiento conveniente</strong><p>Las cubiertas delantera y trasera se pueden abrir por completo, proporcionan un gran espacio.</p><p>La inspección y el mantenimiento se pueden realizar cómodamente para reducir el tiempo de mantenimiento.</p></div>',
          },
          {
            id: 9,
            banner: 'maquinaria/Manipulador ST940/2.jpg',
            img: 'maquinaria/Manipulador ST940/1.jpg',
            url: '/portfolio',
            html: '<div><h1>Manipulador ST940</h1><h2>PRIMERA Y ÚNICA CARRETILLA ELEVADORA TELESCÓPICA DE PRODUCCIÓN NACIONAL DE TURQUÍA “MST”</h2><p>Los montacargas telescópicos MST son los verdaderos amigos de los propietarios de máquinas al priorizar la comodidad del operador, el bajo costo de mantenimiento y el consumo económico de combustible.</p><p>Las carretillas elevadoras telescópicas MST fabricadas con componentes universalmente válidos con tecnología avanzada están a su servicio con 7 modelos, equipos y amplias opciones de accesorios adecuados para las industrias de agricultura, construcción, uso industrial y reciclaje.</p><br/><h2>MOTOR</h2><p>El motor Perkins de validez universal es compatible con el medio ambiente con las normas TIER II-III y también ofrece un trabajo rápido a los operadores con su alto valor de par a baja velocidad y una eficiencia de combustible del 10% entre sus pares.</p><p>Tiene la ventaja sobre sus competidores con disponibilidad de repuestos y bajos costos de mantenimiento.</p><br/><h2>CAJA DE CAMBIOS</h2><p>La bomba hidrostática de desplazamiento variable y el hidromotor conectados a una caja de cambios de dos niveles ofrecen un gran esfuerzo de tracción y un excelente control para el operador.</p><p>Las carretillas elevadoras telescópicas MST tienen motor hidrostático y bomba hidráulica Rexroth y ejes Daha para un máximo rendimiento y comodidad de conducción. En el sistema hidráulico se utilizan componentes de fabricante de validez universal.</p><br/><h2>CHASIS Y PLUMA</h2><p>Chasis monobloque resistente y duradero diseñado con programas de diseño tridimensional y tecnologías de producción avanzadas.</p><p>El diseño se verifica con programas de análisis de durabilidad y se valida con estándares de prueba antes de la producción en masa. Por lo tanto, se garantiza un alto rendimiento y una larga vida útil.</p></div>',
          },
          {
            id: 10,
            banner: 'maquinaria/Retroexcavadora MST 542S/2.jpg',
            img: 'maquinaria/Retroexcavadora MST 542S/1.jpg',
            url: '/portfolio',
            html: '<div><h1>Retroexcavadora MST 542S</h1><h2>CABINA ERGONÓMICA Y CÓMODA DE MÁXIMA EFICIENCIA</h2><p>El nuevo diseño de la cabina del operador de la serie MST 6 PLUS tiene como objetivo maximizar la eficiencia del operador durante turnos largos y ocupados y minimizar las fatigas relacionadas con el trabajo.</p><p>ALTA PRODUCTIVIDAD Y EFICIENCIA DE COMBUSTIBLE CON BOMBA TIPO DE PISTÓN OPCIONAL Y VÁLVULAS COMPARTIDAS DE FLUJO</p><p>Con la bomba hidráulica de pistón opcional en las nuevas cargadoras excavadoras de la serie MST 6 Plus, el sistema proporciona la potencia hidráulica necesaria al operador de acuerdo con la carga y permite un control preciso y eficiencia en todas las velocidades del motor.</p><br/><h2>ALTO RENDIMIENTO EN CONDICIONES DIFÍCILES GRACIAS A UN DISEÑO FUERTE Y DURADERO</h2><p>Los ejes delanteros y traseros de servicio pesado de la serie MST 6 PLUS tienen una alta capacidad de carga y ofrecen un alto rendimiento y durabilidad en las condiciones más difíciles.</p><p>La serie MST 6 PLUS tiene el poder de destrucción más alto de su clase y su sólida y avanzada tecnología, el chasis especialmente diseñado para trabajos pesados ​​ofrece una estructura duradera en las condiciones más duras.</p><br/><h2>MOTOR</h2><p>El motor diesel PERKINS de 100 HP especialmente diseñado para aplicaciones de excavadora cargadora tiene una capacidad de 4.4 Lt cúbicos. Las especificaciones de turbo y postenfriador para un funcionamiento del motor más potente y eficiente proporcionan un alto par a bajas velocidades y, por lo tanto, un bajo consumo de combustible.</p><br/><h2>CAJA DE CAMBIOS</h2><p>Uno de los aspectos más fuertes de la serie MST 6 PLUS es la caja de cambios AutoPowershift que ofrece Autoshift de tipo resistente con 4 marchas hacia adelante y 4 hacia atrás. La combinación perfecta de caja de cambios y motor proporciona un consumo mínimo de combustible. Esta caja de cambios proporciona un cambio automático y suave junto con la función de tracción en las 4 ruedas durante el trabajo. Esta función se desactiva automáticamente en la 3ª y 4ª marcha, lo que permite ahorrar combustible.</p><br/><h2>EJES</h2><p>Los ejes delanteros y traseros de servicio pesado de la serie MST 6 PLUS tienen una alta capacidad de carga y ofrecen un alto rendimiento y durabilidad en las condiciones más difíciles</p><p>La serie MST 6 PLUS tiene el poder de destrucción más alto de su clase y su sólida y avanzada tecnología, el chasis especialmente diseñado para trabajos pesados ​​ofrece una estructura duradera en las condiciones más duras.</p><br/><h2>SISTEMA HIDRÁULICO</h2><p>El sistema hidráulico potente y eficiente con alta capacidad de flujo ofrece el máximo rendimiento incluso en las condiciones más difíciles</p></div>',
          },
        ]
      },
    },

    created () {
      /**
       * Determinar si Es nuevo / editor
       */
      this.$_getObject()
    },

    methods: {
      /**
       * Determinar si Es nuevo / editor
       */
      $_getObject () {
        const data = this.$router.currentRoute.params.Id
        if (data) {
          this.setting = this.list.find((element) => element.id === data)
          if (this.setting === null || this.setting === undefined) {
            this.$_returnToFilter()
          }
        } else {
          this.setting = null
          this.$_returnToFilter()
        }
      },

      /**
       * Volver al Filtro
       */
      $_returnToFilter () {
        this.$router.push({
          name: 'Portfolio',
        })
      },
    },
  }
</script>

<template>
  <div v-if="setting != null || setting == undefined">
    <the-post :setting="setting">
      <div slot="RenderBody">
        <div v-html="setting.html" />
      </div>
    </the-post>
  </div>
</template>
