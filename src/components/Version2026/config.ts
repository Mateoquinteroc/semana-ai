
export const FORM_CONFIG = {
    // Fecha de apertura: 2 de febrero de 2026
    releaseDate: new Date('2026-02-02T00:00:00'),
    // Link del formulario (reemplazar por el link real cuando esté disponible)
    formLink: 'https://forms.gle/QidyC3dyxECYV5jr6'
};

export const isFormAvailable = () => {
    const now = new Date();
    return now >= FORM_CONFIG.releaseDate;
};
