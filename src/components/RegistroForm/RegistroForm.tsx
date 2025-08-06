import { useState } from "react";
import styles from "./RegistroForm.module.css";

const SHEET_URL = "https://api.sheetbest.com/sheets/190f68ca-4335-4dca-86e9-a1fa4378a9f6";

const RANGOS_EDAD = [
  "Menor de 18",
  "18-25",
  "26-35",
  "36-50",
  "51 o más"
] as const;

export default function RegistroForm() {
  const [form, setForm] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    institucion: "",
    rangoEdad: "",
    charlas: false,
    talleres: false,
    networking: false,
    generoMasculino: false,
    generoFemenino: false,
    generoNoBinario: false,
    generoOtro: false,
  });
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;
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
      "Institución": form.institucion,
      "Rango de Edad": form.rangoEdad,
      "Charlas y Conferencias": form.charlas ? "Sí" : "",
      "Talleres Prácticos": form.talleres ? "Sí" : "",
      "Eventos de Networking": form.networking ? "Sí" : "",
      "Masculino": form.generoMasculino ? "Sí" : "",
      "Femenino": form.generoFemenino ? "Sí" : "",
      "No Binario": form.generoNoBinario ? "Sí" : "",
      "Otro": form.generoOtro ? "Sí" : "",
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
      institucion: "",
      rangoEdad: "",
      charlas: false,
      talleres: false,
      networking: false,
      generoMasculino: false,
      generoFemenino: false,
      generoNoBinario: false,
      generoOtro: false,
    });
    setTimeout(() => setDone(false), 4000);
  };

  return (
    <div className={styles.formWrapper} id="registro-formulario">
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
        <label className={styles.label}>Institución
          <input className={styles.input} name="institucion" type="text" value={form.institucion} onChange={handleChange} />
        </label>
        <label className={styles.label}>Rango de Edad
          <select className={styles.input} name="rangoEdad" required value={form.rangoEdad} onChange={handleChange}>
            <option value="">Selecciona una opción</option>
            {RANGOS_EDAD.map((rango) => (
              <option key={rango} value={rango}>{rango}</option>
            ))}
          </select>
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
            <label>
              <input type="checkbox" name="networking" checked={form.networking} onChange={handleChange} />
              Eventos de Networking
            </label>
          </div>
        </div>
        <div className={styles.checkSection}>
          <div className={styles.label}>Género</div>
          <div className={styles.checkRow}>
            <label>
              <input type="checkbox" name="generoMasculino" checked={form.generoMasculino} onChange={handleChange} />
              Masculino
            </label>
            <label>
              <input type="checkbox" name="generoFemenino" checked={form.generoFemenino} onChange={handleChange} />
              Femenino
            </label>
            <label>
              <input type="checkbox" name="generoNoBinario" checked={form.generoNoBinario} onChange={handleChange} />
              No Binario
            </label>
            <label>
              <input type="checkbox" name="generoOtro" checked={form.generoOtro} onChange={handleChange} />
              Otro
            </label>
          </div>
        </div>
        <button className={styles.submitBtn} type="submit" disabled={sending}>
          {sending ? "Enviando…" : "Enviar Registro"}
        </button>
        {done && <div className={styles.confirmMsg}>¡Registro enviado!</div>}
      </form>
    </div>
  );
}
