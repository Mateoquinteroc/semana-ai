import React from 'react';
import { Instagram, Facebook, Youtube } from 'lucide-react';
import styles from './Footer2026.module.css';
import { VISIBLE_COMPONENTS } from './config';

const Footer2026: React.FC = () => {
    const navItems = [
        { name: 'Agenda', id: 'agenda', visible: VISIBLE_COMPONENTS.schedule },
        { name: 'Exponentes', id: 'speakers', visible: VISIBLE_COMPONENTS.speakers },
        { name: 'Ubicación', id: 'ubicacion', visible: VISIBLE_COMPONENTS.location },
        { name: 'Registro', id: 'registro', visible: VISIBLE_COMPONENTS.registration }
    ];

    return (
        <footer className={styles.footer}>
            <div className={styles.grid}>
                <div className={styles.section}>
                    <h3 className={styles.brand}>TERCERA SEMANA<br />DE LA IA</h3>
                    <p className={styles.tagline}>
                        Encuentro de inteligencia artificial, artes y ciencia. Manizales, 2026.
                    </p>
                </div>

                <div className={styles.section}>
                    <h4 className={styles.label}>Invitan y organizan</h4>
                    <p className={styles.organizerText}>
                        Centro de Ciencia Francisco José de Caldas de la Universidad de Caldas y el Centro Cultural del Banco de la República de Manizales.
                    </p>
                </div>

                <div className={styles.section}>
                    <h4 className={styles.label}>Navegación</h4>
                    <ul className={styles.linkList}>
                        {navItems.map(item => (
                            <li key={item.id}>
                                <a
                                    href={item.visible ? `#${item.id}` : undefined}
                                    className={`${styles.link} ${!item.visible ? styles.disabledLink : ''}`}
                                    onClick={e => !item.visible && e.preventDefault()}
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className={`${styles.section} ${styles.sectionDark}`}>
                    <h4 className={styles.label}>Redes Sociales</h4>
                    <ul className={styles.linkList}>
                        <li>
                            <a href="https://www.instagram.com/centrodecienciafjc/" target="_blank" rel="noopener noreferrer" className={styles.link} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <Instagram size={16} color="white" />
                                Instagram
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/BanrepculturalManizales/?locale=es_LA" target="_blank" rel="noopener noreferrer" className={styles.link} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <Facebook size={16} color="white" />
                                Facebook
                            </a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/@CentroDeCienciaFJC" target="_blank" rel="noopener noreferrer" className={styles.link} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <Youtube size={16} color="white" />
                                YouTube
                            </a>
                        </li>
                    </ul>
                    <p className={styles.copyright}>
                        © 2026 SEMANA DE LA IA. TODOS LOS DERECHOS RESERVADOS.
                    </p>
                </div>
            </div>

            <div className={styles.logosBanner}>
                <div className={styles.logosContainer}>
                    <img
                        src="/logossemana2026.png"
                        alt="Logos Organizadores"
                        className={styles.logosImage}
                    />
                </div>
            </div>
        </footer>
    );
};

export default Footer2026;
