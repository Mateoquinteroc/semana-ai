import { useState } from "react";
import styles from "./RegistroForm.module.css"; // crea tus propios estilos o pide ejemplo

const SHEET_URL = "https://api.sheetbest.com/sheets/190f68ca-4335-4dca-86e9-a1fa4378a9f6"; // Pega aquí tu endpoint sheet.best

export default function RegistroForm() {
  const [form, setForm] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    charlas: false,
    presentaciones: false,
    talleres: false,
    networking: false,
  });
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({
      ...f,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    // Prepara el objeto para enviar tal como espera Sheet
    const data = {
      "Nombre Completo": form.nombre,
      "Correo Electrónico": form.correo,
      "Teléfono": form.telefono,
      "Charlas y Conferencias": form.charlas ? "Sí" : "",
      "Presentaciones Artísticas": form.presentaciones ? "Sí" : "",
      "Talleres Prácticos": form.talleres ? "Sí" : "",
      "Eventos de Networking": form.networking ? "Sí" : "",
    };
    await fetch(SHEET_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    setSending(false);
    setDone(true);
    setForm({
      nombre: "",
      correo: "",
      telefono: "",
      charlas: false,
      presentaciones: false,
      talleres: false,
      networking: false,
    });
    setTimeout(() => setDone(false), 4000);
  };

  return (
    <div className={styles.formWrapper}>
      <h2 className={styles.title}>Regístrate Ahora</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>Nombre Completo
          <input className={styles.input} name="nombre" type="text" required value={form.nombre} onChange={handleChange} />
        </label>
        <label className={styles.label}>Correo Electrónico
          <input className={styles.input} name="correo" type="email" required value={form.correo} onChange={handleChange} />
        </label>
        <label className={styles.label}>Teléfono (Opcional)
          <input className={styles.input} name="telefono" type="text" value={form.telefono} onChange={handleChange} />
        </label>
        <div className={styles.checkSection}>
          <div className={styles.label}>¿Qué actividades te interesan?</div>
          <div className={styles.checkRow}>
            <label>
              <input type="checkbox" name="charlas" checked={form.charlas} onChange={handleChange} />
              Charlas y Conferencias
            </label>
            <label>
              <input type="checkbox" name="talleres" checked={form.talleres} onChange={handleChange} />
              Talleres Prácticos
            </label>
          </div>
          <div className={styles.checkRow}>
            <label>
              <input type="checkbox" name="presentaciones" checked={form.presentaciones} onChange={handleChange} />
              Presentaciones Artísticas
            </label>
            <label>
              <input type="checkbox" name="networking" checked={form.networking} onChange={handleChange} />
              Eventos de Networking
            </label>
          </div>
        </div>
        < button className={styles.submitBtn} type="submit" disabled={sending}>
          {sending ? "Enviando…" : "Enviar Registro"}
        </button>
        {done && <div className={styles.confirmMsg}>¡Registro enviado!</div>}
      </form>
    </div>
  );
}
