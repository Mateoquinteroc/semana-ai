import React from 'react';
import styles from './Registration2026.module.css';

const Registration2026: React.FC = () => {
    return (
        <section className={styles.section} id="registro">
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Regístrate Ahora</h2>
                    <p className={styles.subtitle}>Acceso limitado — Edición 2026</p>
                </div>

                <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                    <div className={styles.grid}>
                        <div className={styles.inputGroup}>
                            <label className={styles.label}>Nombre Completo</label>
                            <input type="text" className={styles.input} placeholder="Ej. Alex Smith" />
                        </div>
                        <div className={styles.inputGroup}>
                            <label className={styles.label}>Correo Electrónico</label>
                            <input type="email" className={styles.input} placeholder="alex@dominio.com" />
                        </div>
                        <div className={styles.inputGroup}>
                            <label className={styles.label}>Teléfono (Opcional)</label>
                            <input type="tel" className={styles.input} placeholder="+52 ..." />
                        </div>
                        <div className={styles.inputGroup}>
                            <label className={styles.label}>Institución</label>
                            <input type="text" className={styles.input} placeholder="Universidad / Empresa" />
                        </div>
                    </div>

                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Rango de Edad</label>
                        <select className={styles.select}>
                            <option>Selecciona una opción</option>
                            <option>Menor de 18</option>
                            <option>18 - 25 años</option>
                            <option>26 - 35 años</option>
                            <option>36 - 50 años</option>
                            <option>Más de 50</option>
                        </select>
                    </div>

                    <button className={styles.submitBtn}>
                        Enviar Registro
                        <span className={`material-symbols-outlined ${styles.icon}`}>arrow_right_alt</span>
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Registration2026;
