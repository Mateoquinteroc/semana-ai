import React, { useState } from 'react';
import styles from './Registration2026.module.css';

// URL del Web App de Google Apps Script para el registro 2026
const SHEET_API_URL = "https://script.google.com/macros/s/AKfycby92Bek0Sf0heK12gVmZBXUcxqZ-P13ytjx7DbVTYaduVdRQRkyRDkEhtzFCvJlpHK2/exec";

const Registration2026: React.FC = () => {
    const [form, setForm] = useState({
        nombre: '',
        correo: '',
        telefono: '',
        institucion: '',
        rangoEdad: ''
    });
    const [sending, setSending] = useState(false);
    const [done, setDone] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSending(true);

        try {
            const data = {
                "Fecha Registro": new Date().toLocaleString('es-CO', { timeZone: 'America/Bogota' }),
                "Nombre Completo": form.nombre,
                "Correo Electrónico": form.correo,
                "Teléfono": form.telefono,
                "Institución": form.institucion,
                "Rango de Edad": form.rangoEdad
            };

            // Usamos mode: 'no-cors' porque Google Scripts a veces da problemas de CORS en preflight, 
            // aunque el POST suele funcionar bien.
            await fetch(SHEET_API_URL, {
                method: "POST",
                mode: "no-cors",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            // Con no-cors no podemos leer la respuesta, pero si no hay error asumimos éxito
            setDone(true);
            setForm({ nombre: '', correo: '', telefono: '', institucion: '', rangoEdad: '' });
            setTimeout(() => setDone(false), 5000);
        } catch (error) {
            console.error("Error al enviar registro:", error);
            alert("Hubo un error al enviar el registro. Por favor intente de nuevo.");
        } finally {
            setSending(false);
        }
    };

    return (
        <section className={styles.section} id="registro">
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Regístrate Ahora</h2>
                    <p className={styles.descriptionText}>
                        Nos estamos preparando para la Tercera Semana de la Inteligencia Artificial en las artes y la ciencia y queremos compartir toda la información contigo. Regístrate en este formulario para recibir la información de agenda, invitados y novedades de esta edición.
                    </p>
                </div>

                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.grid}>
                        <div className={styles.inputGroup}>
                            <label className={styles.label}>Nombre Completo</label>
                            <input
                                type="text"
                                name="nombre"
                                value={form.nombre}
                                onChange={handleChange}
                                required
                                className={styles.input}
                                placeholder="Ej. Alex Smith"
                            />
                        </div>
                        <div className={styles.inputGroup}>
                            <label className={styles.label}>Correo Electrónico</label>
                            <input
                                type="email"
                                name="correo"
                                value={form.correo}
                                onChange={handleChange}
                                required
                                className={styles.input}
                                placeholder="alex@dominio.com"
                            />
                        </div>
                        <div className={styles.inputGroup}>
                            <label className={styles.label}>Teléfono</label>
                            <input
                                type="tel"
                                name="telefono"
                                value={form.telefono}
                                onChange={handleChange}
                                required
                                className={styles.input}
                                placeholder="+57 ..."
                            />
                        </div>
                        <div className={styles.inputGroup}>
                            <label className={styles.label}>Institución</label>
                            <input
                                type="text"
                                name="institucion"
                                value={form.institucion}
                                onChange={handleChange}
                                required
                                className={styles.input}
                                placeholder="Universidad / Empresa"
                            />
                        </div>
                    </div>

                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Rango de Edad</label>
                        <select
                            name="rangoEdad"
                            value={form.rangoEdad}
                            onChange={handleChange}
                            required
                            className={styles.select}
                        >
                            <option value="">Selecciona una opción</option>
                            <option value="Menor de 18">Menor de 18</option>
                            <option value="18 - 25 años">18 - 25 años</option>
                            <option value="26 - 35 años">26 - 35 años</option>
                            <option value="36 - 50 años">36 - 50 años</option>
                            <option value="Más de 50">Más de 50</option>
                        </select>
                    </div>

                    <button className={styles.submitBtn} disabled={sending}>
                        {sending ? "Enviando..." : (done ? "¡Registro Exitoso!" : "Enviar Registro")}
                        {!sending && !done && <span className={`material-symbols-outlined ${styles.icon}`}>arrow_right_alt</span>}
                    </button>

                    {done && <p className={styles.successMessage}>Gracias por registrarte. Te mantendremos informado.</p>}
                </form>
            </div>
        </section>
    );
};

export default Registration2026;
