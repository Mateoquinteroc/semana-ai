
export const FORM_CONFIG = {
    // Fecha de apertura: 3 de febrero de 2026
    releaseDate: new Date('2026-02-03T00:00:00'),
    // Link del formulario (reemplazar por el link real cuando esté disponible)
    formLink: 'https://forms.gle/QidyC3dyxECYV5jr6'
};

export const isFormAvailable = () => {
    const now = new Date();
    return now >= FORM_CONFIG.releaseDate;
};

// CONFIGURACIÓN: Cambia a 'true' para mostrar o 'false' para ocultar
export const VISIBLE_COMPONENTS = {
    hero: true,
    intro: true,
    thematicLines: true,
    schedule: false,
    speakers: false,
    location: true,
    registration: false,
    liveStream: false,
    footer: true,
    aiGuide: false
};
