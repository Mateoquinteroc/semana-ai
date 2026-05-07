
import { ScheduleItem, Speaker } from './types';

export const THEMATIC_AXES = [
    {
        number: "01",
        title: "IA y creación artística",
        icon: "palette",
        description: "Este eje explora cómo la inteligencia artificial interviene en los procesos creativos y plantea preguntas fundamentales sobre su papel en el arte contemporáneo: ¿es la IA una herramienta que potencia la imaginación humana o puede considerarse un agente autónomo de creación?, ¿hasta qué punto una máquina puede desarrollar sensibilidad estética y generar obras con verdadero valor cultural? Además, se propone indagar qué significa “crear” en un contexto donde los algoritmos producen imágenes, música, textos y experiencias inmersivas, invitando a reflexionar sobre la autoría, la originalidad y la relación entre tecnología y arte.",
        questions: [
            "¿Para qué sirve la IA en el acto creativo?",
            "¿Puede la máquina tener sensibilidad estética?",
            "¿Qué significa “crear” en un contexto donde la IA genera imágenes, música o textos?"
        ]
    },
    {
        number: "02",
        title: "IA y cultura ambiental",
        icon: "eco",
        description: "Este eje considera la relación entre inteligencia artificial y sostenibilidad, preguntándose cuáles son los desafíos que la IA plantea para el cambio climático y la cultura ambiental, y cómo reducir la huella energética y los impactos ecológicos asociados al desarrollo tecnológico. También se exploran acciones de mitigación y proyectos innovadores que pueden surgir desde la IA para enfrentar la crisis ambiental, buscando articular tecnología, ecología y cultura en clave de futuro y responsabilidad colectiva.",
        questions: [
            "¿Qué desafíos plantea la IA para el cambio climático?",
            "¿Qué acciones de mitigación de este impacto se pueden desarrollar?"
        ]
    },
    {
        number: "03",
        title: "Ética e inteligencia artificial",
        icon: "balance",
        description: "Este eje propone una reflexión crítica sobre los desafíos éticos y culturales que plantea la IA: cómo formar públicos capaces de leer, interpretar y evaluar creaciones generadas por sistemas algorítmicos; cómo distinguir entre lo humano y lo artificial en la producción cultural; y qué riesgos existen en la difusión de contenidos automatizados, incluyendo sesgos, opacidad y desinformación. Asimismo, se discute cómo garantizar transparencia y responsabilidad en los procesos de creación y circulación, abordando la ética, la autenticidad y la construcción de confianza en entornos digitales.",
        questions: [
            "¿Cómo formar públicos respecto a las creaciones de IA?",
            "¿Cómo distinguir entre lo humano y lo artificial en la producción cultural?",
            "¿Qué desafíos éticos plantea la IA en la creación y difusión de contenidos?"
        ]
    },
    {
        number: "04",
        title: "IA, trabajo y transformación social",
        icon: "engineering",
        description: "Este eje analiza los impactos de la IA en el mundo laboral y en la organización social, cuestionando si reemplazará empleos en las industrias creativas, científicas y culturales, y cuáles son los nuevos roles y competencias que emergen cuando la IA se integra como herramienta de trabajo. También se examina cómo se reconfiguran las dinámicas laborales y las relaciones humanas en entornos mediadas por algoritmos, para comprender la IA como motor de cambio y sus implicaciones para la equidad, la inclusión y la dignidad en el empleo.",
        questions: [
            "¿Reemplazará la IA el empleo en las industrias creativas y científicas?",
            "¿Qué nuevos roles emergen con la IA como herramienta?"
        ]
    }
];

export const SCHEDULE: ScheduleItem[] = [];

export const SPEAKERS: Speaker[] = [
    {
        id: "1",
        name: "Ana Guzmán",
        role: "Diseñadora de Imagen y Sonido · Especialista en IA",
        bio: "Líder del MediaLab de la Cinemateca de Bogotá. Creadora de Estación Espacial Kennedy (EEK) y Máquinas de Estados Infinitos (MEI).",
        imageUrl: "/Ponentes2026/Ana Guzman.png",
        conference: "Máquinas de Estados Infinitos: una aproximación poética a la técnica de los modelos de aprendizaje automático",
        workshop: "Del caos al Cosmos: Taller de creación de ruido cósmico con ComfyUI",
        profile: "Ana Guzmán es diseñadora de Imagen y Sonido, especialista en Inteligencia Artificial de la Facultad de Ingeniería de la Universidad de Buenos Aires. Fue investigadora junior en \"Diseño Audiovisual y Nuevas Poéticas Tecnológicas\" y docente ad honorem en \"Teoría y Estética de los Medios\" de la FADU‑UBA. Su trabajo indaga los gestos poéticos presentes en las matemáticas teóricas y en los discursos científicos occidentales que configuran nuestra visión sobre la tecnología. Combinando métodos de producción y enfoques experimentales, integra herramientas artísticas que enriquecen la comprensión de las interacciones humano‑máquina y la historia tecnológica en el sur global. Actualmente lidera el MediaLab de la Cinemateca de Bogotá y es la creadora de los proyectos Estación Espacial Kennedy (EEK) y Máquinas de Estados Infinitos (MEI)."
    },
    {
        id: "2",
        name: "Olga Ocampo López",
        role: "Profesora Titular · Investigadora Senior",
        bio: "Coordinadora del Doctorado en Sostenibilidad de la Universidad Autónoma de Manizales.",
        imageUrl: "/Ponentes2026/Olga Ocampo Lopez.jpg",
        conference: "IA: aplicaciones e implicaciones para la Sostenibilidad Ambiental",
        workshop: "IA para la investigación y el desarrollo en Sostenibilidad Ambiental",
        profile: "Olga Lucía Ocampo López es ingeniera química, especialista en Ingeniería Ambiental con Maestría y Doctorado en Ingeniería. Tiene una experiencia profesional de 15 años en Gestión Ambiental y Gestión de la Innovación en Empresas privadas y una experiencia académica de 15 años como profesora investigadora. Actualmente, es profesora titular, investigadora Senior, Coordinadora del Doctorado en Sostenibilidad de la Universidad Autónoma de Manizales. Ejecuta diversos proyectos de investigación y desarrollo con énfasis en competitividad y sostenibilidad en Pymes y en gestión integral del cambio climático."
    },
    {
        id: "3",
        name: "Juan David Gutiérrez",
        role: "Ph.D. Políticas Públicas · Oxford University",
        bio: "Profesor asociado y Coordinador de la Maestría en Políticas Públicas de la Universidad de los Andes.",
        imageUrl: "/Ponentes2026/Juan David Gutierrez.JPG",
        conference: "Retos de gobernanza de la IA",
        workshop: "Buenas prácticas en el uso de herramientas de IA en el sector público",
        profile: "Juan David Gutiérrez es profesor asociado y Coordinador de la Maestría en Políticas Públicas de la Escuela de Gobierno de la Universidad de los Andes, en donde enseña e investiga sobre políticas públicas, gestión pública, e inteligencia artificial. Doctor (PhD) y máster (MSc) en política pública de la Universidad de Oxford. Máster en derecho y economía (LLM) otorgado conjuntamente por la Universidad de Bolonia y la Universidad Erasmus de Rotterdam. Abogado de la Universidad Javeriana. Colidera la Mesa de Trabajo Multiactor sobre Regulación de Inteligencia Artificial coorganizada por la Universidad de los Andes y la Universidad Externado. Es integrante del grupo de expertos del Global Partnership on Artificial Intelligence – GPAI en donde colideró el proyecto sobre Transparencia Algorítmica en el Sector Público. Juan David tiene casi 20 años de experiencia como consultor en asuntos legales y de políticas públicas, asesorando a gobiernos de América Latina y el Caribe, organizaciones multilaterales, organizaciones de la sociedad civil, asociaciones gremiales y empresas."
    },
    {
        id: "4",
        name: "Reinel Tabares",
        role: "Profesor · Fac. de IA e Ingenierías",
        bio: "PhD en Ingeniería línea informática por la UAM. Magister en Automatización Industrial por la UNAL. Profesor e investigador.",
        imageUrl: "/Ponentes2026/ReinelTabares.jpeg",
        conference: "De aprendizaje automático a IA generativa: Transformaciones en el mundo del trabajo",
        profile: "Reinel Tabares Soto es Ingeniero Electrónico de la Universidad Nacional de Colombia, Ingeniero de Sistemas y Computación de la Universidad de Caldas, Magister en Automatización Industrial de la Universidad Nacional de Colombia y PhD en Ingeniería línea informática por la Universidad Autónoma de Manizales. Sus líneas de trabajo académico son Aprendizaje de Máquina, Minería de Datos, Computación de alto desempeño, Bioinformática e Inteligencia Artificial Responsable. Su tesis de maestría fue en programación paralela sobre arquitecturas heterogéneas y su tesis doctoral fue sobre redes neuronales convolucionales para el esteganalisis de imágenes en el dominio espacial. PhD en Ingeniería línea informática por la Universidad Autónoma de Manizales, Colombia. Magister en Ingeniería Automatización Industrial por la Universidad Nacional de Colombia. Profesor asistente e investigador de la Facultad de Ingeniería de la Universidad Autónoma de Manizales."
    }
];
