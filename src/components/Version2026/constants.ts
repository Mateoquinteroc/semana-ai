
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
        title: "IA, trabajo y transformación social",
        icon: "engineering",
        description: "Este eje analiza los impactos de la IA en el mundo laboral y en la organización social, cuestionando si reemplazará empleos en las industrias creativas, científicas y culturales, y cuáles son los nuevos roles y competencias que emergen cuando la IA se integra como herramienta de trabajo. También se examina cómo se reconfiguran las dinámicas laborales y las relaciones humanas en entornos mediados por algoritmos, para comprender la IA como motor de cambio y sus implicaciones para la equidad, la inclusión y la dignidad en el empleo.",
        questions: [
            "¿Reemplazará la IA el empleo en las industrias creativas y científicas?",
            "¿Qué nuevos roles emergen con la IA como herramienta?"
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
        title: "IA y cultura ambiental",
        icon: "eco",
        description: "Este eje considera la relación entre inteligencia artificial y sostenibilidad, preguntándose cuáles son los desafíos que la IA plantea para el cambio climático y la cultura ambiental, y cómo reducir la huella energética y los impactos ecológicos asociados al desarrollo tecnológico. También se exploran acciones de mitigación y proyectos innovadores que pueden surgir desde la IA para enfrentar la crisis ambiental, buscando articular tecnología, ecología y cultura en clave de futuro y responsabilidad colectiva.",
        questions: [
            "¿Qué desafíos plantea la IA para el cambio climático?",
            "¿Qué acciones de mitigación de este impacto se pueden desarrollar?"
        ]
    }
];

export const SCHEDULE: ScheduleItem[] = [];

export const SPEAKERS: Speaker[] = [
    {
        id: "1",
        name: "Dr. Aris Thorne",
        role: "Neural Architect",
        bio: "Lead researcher at the Cognitive Frontiers Lab, focusing on self-correcting neural pathways.",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuD9DIOOncS9wQFU7vIgPl5rj5rKJtt6v6XI7MsXL9xJ0YIvTaqf_z_zsqur8VXylk6cD-u4aUEg_kp9be84SpBXXj2FMMehP9HwkoakdydpBFmPK4eBXa1RPPHmKoU8Dn_46-nXPDJlmn4iViTfJjMv5CnxACrz7mS3KKae7YVju4ll_9qUOvPArQJKRqph9KcHMgXVNkkay0Qg4BMM2aJXA2KPR__OqhV2-dFAw8r9CAmo_TtYFuL3SZXUuL-3G0_xv5CNgsMPHtBm"
    },
    {
        id: "2",
        name: "Elena Vox",
        role: "Generative Artist",
        bio: "Renowned for 'The Ghost in the Code' series, displayed at MoMA and TATE.",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBxSF5NI52jQV67vU1CiqvEaJ1ET8R3rFguSgdLZMEn2eJlRRakY6eLr7brHJhyv5E2ahba7NRY7KF9cyFYNbsfigMl-tKXm9pSIWehdmoT_PUu_l5cPFHK-FyCsuNt5uaJkHcIY5-EvyLJAMNxbMmgbk-SlW9Tfob1p3sOzL_E9FE97cS5aorySoOs4cCpYOq_fo2NkAbAcgh3PKnm9gqXQR3ZZrY2fLfn0YjjWgdw-qHqRT7sICOeVqGcPDpGiEHR-3gpod6XBm90"
    },
    {
        id: "3",
        name: "Marcus Rei",
        role: "Tech Ethicist",
        bio: "Author of 'Post-Human Silhouettes', exploring the moral boundaries of artificial souls.",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-QWCQPGrAhcpjeNUgT8l3vspQ_-wUDV0F93UtDu_qcQ5U3eOLJqeIr5ThHlai_-UHE_74EeF_J3Q7pOS8U_MAS5X5lf-vVJaqzRPArbExBswLUvUABsyKW86MKKQGg5znGXkEQ99TGW2Cpjqy18JOYm_k8mZDsvHuEqEpagsjrJ-HWLtK63eNifAuz4Q-nELEgDbAvbM7HWgvPodb9H60iq-FpeX1eEEAhX0JkiIXHkCzimf3aVGuzkD_N3VcfPabtAxMbL2rqxXG"
    },
    {
        id: "4",
        name: "Sia Chen",
        role: "Data Scientist",
        bio: "Pioneer in decentralized AI training protocols and open-source intelligence.",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuC65YdUEq4vjLX5157wDxQB_OJZ7D7vSV1lGzca8arrE6JaO8FRCl06zsk3k0fxpVKtvH4sbuRXa4YdjeemKD8q9eUvWrbFnMkO8n-HhtFI6Jv7e_vaeNg1N5qItqtyGS8ildJJ7HG6ECrbvsDb11xz64l_nPFwPQ-AwwXSqN0jjaX1Gr-T0dN9kTJ5YK9ow5vrsXb7ae6h_B6lwSDGgn5h_aU9og-Z9_328oF57ZCxDWl4yTheNT0FCiHeCDsbcsoWLMbTI63Z76x7"
    }
];
