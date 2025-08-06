import styles from "./LocationsSection.module.css";

const LOCATIONS = [
  {
    name: "Centro Cultural Universitario Rogelio Salmona",
    address: "Carrera 28D entre, Cl. 66 #y 67, Manizales, Caldas",
    gmapsUrl: "https://maps.app.goo.gl/xLDidnBNCt297eEUA",
    img: "https://lh3.googleusercontent.com/p/AF1QipNzGA87WG8m2gMMDnFiquapup-reT9NVzVd6cB2=s1360-w1360-h1020-rw",
  },
  {
    name: "Biblioteca Banco de la República",
    address: "Cra. 23 #23-06, Manizales, Caldas",
    gmapsUrl: "https://maps.app.goo.gl/6HXKjbkeTLE6iteGA",
    img: "https://d3nmwx7scpuzgc.cloudfront.net/sites/default/files/media/image/manizales.jpg",
  },
];

export default function LocationsSection() {
  return (
    <section className={styles.section} id="locations">
      <h2 className={styles.title}>Ubicaciones del Evento</h2>
      <div className={styles.cards}>
        {LOCATIONS.map((loc) => (
          <div key={loc.name} className={styles.card}>
            <img
              src={loc.img}
              alt={`Foto de ${loc.name}`}
              className={styles.mapImg}
              loading="lazy"
            />
            <div className={styles.cardFooter}>
              <div className={styles.locationName}>{loc.name}</div>
              <div className={styles.locationAddress}>{loc.address}</div>
              <a
                href={loc.gmapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.gmapsButton}
              >
                Ver en Google Maps
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
