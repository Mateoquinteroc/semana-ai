import React from 'react';
import styles from './Location2026.module.css';

const LOCATIONS = [
    {
        name: "Centro Cultural Universitario Rogelio Salmona",
        address: "Carrera 28D entre, Cl. 66 #y 67, Manizales, Caldas",
        gmapsUrl: "https://maps.app.goo.gl/xLDidnBNCt297eEUA",
        img: "https://lh3.googleusercontent.com/p/AF1QipNzGA87WG8m2gMMDnFiquapup-reT9NVzVd6cB2=s1360-w1360-h1020-rw",
        tag: "SEDE PRINCIPAL"
    },
    {
        name: "Centro Cultural del Banco de la República de Manizales",
        address: "Cra. 23 #23-06, Manizales, Caldas",
        gmapsUrl: "https://maps.app.goo.gl/6HXKjbkeTLE6iteGA",
        img: "https://d3nmwx7scpuzgc.cloudfront.net/sites/default/files/media/image/manizales.jpg",
        tag: "SEDE PRINCIPAL"
    },
];

const Location2026: React.FC = () => {
    return (
        <section className={styles.section} id="ubicacion">
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.tag}>PUNTOS DE ENCUENTRO</span>
                    <h2 className={styles.title}>Ubicaciones<br />2026</h2>
                </div>

                <div className={styles.grid}>
                    {LOCATIONS.map((loc, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.imageWrapper}>
                                <img src={loc.img} alt={loc.name} className={styles.image} />
                                <div className={styles.cardTag}>{loc.tag}</div>
                                <div className="grainy-overlay" style={{ opacity: 0.3 }} />
                            </div>
                            <div className={styles.cardContent}>
                                <div className={styles.textContent}>
                                    <h3 className={styles.locationName}>{loc.name}</h3>
                                    <p className={styles.locationAddress}>{loc.address}</p>
                                </div>
                                <a
                                    href={loc.gmapsUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.gmapsBtn}
                                >
                                    <span>VER EN MAPA</span>
                                    <span className="material-symbols-outlined">north_east</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Location2026;
