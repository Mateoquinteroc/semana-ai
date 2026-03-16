Documentacion tecnica - Semana AI


## 1. Contexto del sistema


Este proyecto es una aplicacion web desarrollada con React + TypeScript + Vite para publicar y mantener el sitio del evento "Semana de la Inteligencia Artificial" en diferentes ediciones (2024, 2025 y 2026).


El foco actual del enrutamiento es la edicion 2026 (ruta raiz `/`), mientras que las versiones anteriores se conservan como contenido historico.


## 2. Proposito y problema que resuelve


La plataforma centraliza la comunicacion del evento en un unico frontend:


* Presentación institucional del evento.
* Difusion de ejes temáticos y condiciones de postulacion.
* Acceso a formularios de participacion.
* Consulta de agenda desde Google Sheets (cuando se habilita la seccion).
* Navegacion entre versiones del evento por ano.


## 3. Alcance funcional actual


### 3.1 Rutas publicas disponibles


* `/` -> Carga `Version2026`.
* `/2026` -> Carga `Version2026`.
* `/2026/condiciones` -> Carga vista de condiciones (`TermsOfReference2026`).
* `/2025` -> Carga `Version2025`.
* `/2024` -> Carga `Version2024` (iframe externo).
* `/documento` -> Visor PDF de convocatoria 2025.


### 3.2 Rutas del proyecto (vista funcional)


* `/` - Landing principal vigente (equivalente funcional de 2026).
* `/2026` - Home oficial de la edicion 2026.
* `/2026/condiciones` - Documento interactivo de condiciones de postulacion.
* `/2025` - Sitio historico de la edicion 2025.
* `/2024` - Sitio historico de la edicion 2024 embebido por iframe.
* `/documento` - Visor del PDF de convocatoria 2025.


### 3.3 Secciones 2026 habilitadas por configuracion


La visibilidad se controla desde `src/components/Version2026/config.ts` mediante el objeto `VISIBLE_COMPONENTS`.


Estado actual:


* `hero`: activo
* `intro`: activo
* `thematicLines`: activo
* `schedule`: inactivo
* `speakers`: inactivo
* `location`: activo
* `registration`: inactivo
* `liveStream`: inactivo
* `footer`: activo
* `aiGuide`: inactivo


## 4. Arquitectura y componentes principales


### 4.1 Stack tecnico


* Framework UI: React 19.
* Lenguaje: TypeScript.
* Bundler/dev server: Vite 6.
* Enrutamiento: `react-router-dom`.
* Animaciones: `framer-motion`.
* Iconografia: `lucide-react` + Material Symbols (Google Fonts).
* Analitica: `@vercel/analytics`.


### 4.2 Estructura de alto nivel


* `src/main.tsx`: punto de entrada, monta `App` y `Analytics`.
* `src/App.tsx`: router principal y reglas de visualizacion global (fondo, flecha, tabs).
* `src/pages/Version2026.tsx`: orquestador de la version 2026 y cambio entre home/condiciones.
* `src/components/Version2026/*`: componentes y configuracion especifica de 2026.
* `src/pages/Version2025.tsx` + componentes asociados: version historica 2025.
* `src/pages/Version2024.tsx`: version historica 2024 embebida por iframe.


### 4.3 Fuentes de datos


* Datos estaticos en codigo:
  - `THEMATIC_AXES`, `SPEAKERS` (`constants.ts`).
  - Configuracion de formularios y visibilidad (`config.ts`).
* Datos externos:
  - Agenda 2026 (CSV de Google Sheets) en `Schedule2026.tsx`.
  - Agenda 2025 (CSV de Google Sheets) en `ProgramacionSection.tsx`.
  - Registro 2025 (POST a SheetBest) en `RegistroForm.tsx`.


No existe backend propio dentro del repositorio.


## 5. Flujo operativo


### 5.1 Flujo de navegacion


## 1. Usuario entra a `/`.
## 2. `App` renderiza `Version2026` y barra de tabs.
## 3. Si el usuario pulsa "Condiciones de postulacion", se cambia estado local a `terms` y se navega a `/2026/condiciones`.
## 4. Desde condiciones, el boton "Volver al inicio" regresa a `/2026`.


### 5.2 Flujo de postulacion 2026


## 5. Usuario pulsa "Postulate" (Hero o Terms).
## 6. Se evalua `isFormAvailable()` comparando fecha actual vs `releaseDate`.
## 7. Si esta disponible: abre `FORM_CONFIG.formLink` en una nueva pestana.
## 8. Si no esta disponible: muestra `CustomAlert2026`.


### 5.3 Flujo de agenda (cuando se habilita)


## 9. Componente consume CSV remoto desde Google Sheets.
## 10. Parsea filas y las agrupa por dia (`Lunes` a `Viernes`).
## 11. Muestra tabs de dias y lista/tabla de eventos por dia.
## 12. Si falla la carga, se registra error por consola y no hay datos visibles.


## 6. Guia de uso para usuarios finales


### 6.1 Visitante general


* Consultar informacion principal en la home 2026.
* Revisar condiciones de postulacion en la vista documental.
* Abrir ubicaciones en Google Maps desde seccion de sedes.
* Cambiar entre ediciones 2024/2025/2026 desde tabs superiores.


### 6.2 Postulante


* Ingresar a condiciones y revisar requisitos/criterios.
* Ir al formulario externo cuando este habilitado por fecha.


## 7. Guia tecnica de administracion y mantenimiento


### 7.1 Requisitos de entorno


* Node.js compatible con Vite 6 (se recomienda version LTS actual).
* npm.


### 7.2 Comandos del proyecto


* Desarrollo: `npm run dev`
* Build: `npm run build`
* Preview local de build: `npm run preview`
* Lint: `npm run lint`


### 7.3 Parametros de mantenimiento frecuentes


Activar/desactivar bloques de la landing 2026


Editar `VISIBLE_COMPONENTS` en `src/components/Version2026/config.ts`.


Cambiar fecha y enlace de formulario


Editar `FORM_CONFIG.releaseDate` y `FORM_CONFIG.formLink` en `src/components/Version2026/config.ts`.


Actualizar ejes tematicos o speakers


Editar `src/components/Version2026/constants.ts`.


Actualizar agenda desde hoja de calculo


* 2026: actualizar `SHEET_URL` en `src/components/Version2026/Schedule2026.tsx`.
* 2025: actualizar URL en `src/components/ProgramacionSection/ProgramacionSection.tsx`.


Actualizar PDF de convocatoria 2025


* Reemplazar archivo en `public/`.
* Verificar referencia en `src/components/PDFViewerSection/PDFViewerSection.tsx`.


### 7.4 Despliegue


* Proyecto preparado para hosting estatico (Vite).
* `vercel.json` define rewrite global a `index.html` para soportar rutas SPA.
* La carpeta `dist/` contiene artefactos de build.


## 8. Dependencias e integraciones externas


* Google Fonts (tipografias + Material Symbols).
* Google Sheets CSV (agenda).
* Google Forms (postulacion 2026).
* Google Maps links (ubicaciones).
* SheetBest API (registro 2025).
* YouTube (videos 2025 y componentes de streaming embebido).
* Vercel Analytics.


## 9. Automatizaciones y disparadores


* Cambio de estado de disponibilidad de formulario por fecha (`isFormAvailable`).
* Carga automatica de agenda en `useEffect` al montar componente.
* Cambio de keyword animada en Hero 2025 por intervalo (`setInterval`).
* Deteccion responsive por `window.innerWidth` en varios componentes.


No se identifican jobs de backend, colas, cron server-side ni pipelines de datos internos.


## 10. Riesgos, limitaciones y consideraciones


* Dependencia alta de servicios externos (Sheets, Forms, SheetBest, recursos de imagen remotos).
* No hay manejo robusto de errores de red para usuarios (varios casos solo registran en consola).
* Sin backend propio: no hay capa interna para validacion, auditoria o resiliencia.
* Inconsistencias de fechas 2026 detectadas en textos (ejemplo: 27-29 mayo vs 25-28 mayo vs 19-22 mayo en mensajes).
* `SPEAKERS` 2026 contiene datos de ejemplo en ingles; puede no corresponder al contenido final.
* No se observan pruebas automatizadas (unitarias/integracion/e2e) en el repositorio.
* `README.md` aun corresponde al template base de Vite y no documenta el proyecto real.


## 11. Recomendaciones técnicas


## 13. Centralizar en un único archivo de configuración todas las fechas y textos criticos del evento para evitar divergencias.
## 14. Incorporar un modulo de configuración por entorno (por ejemplo, variables `import.meta.env`) para URLs externas.
## 15. Implementar manejo de errores visible al usuario en cargas remotas (agenda, formularios).
## 16. Definir y documentar estrategia de datos para 2026 (que se mantiene hardcodeado y que viene de fuentes externas).
## 17. Agregar pruebas basicas para rutas y renderizado condicional de secciones.
## 18. Reemplazar el `README.md` por documentacion operativa del proyecto.


## 12. Informacion faltante o no verificable desde codigo


* No hay evidencia en repo de credenciales, panel de gestion ni CMS.
* No hay definición formal de SLA, politicas de respaldo o monitoreo.
* No hay pipeline CI/CD declarada en archivos visibles.
* No hay documento funcional oficial que confirme el calendario definitivo del evento 2026.


## 13. Referencias de ubicacion del proyecto


* URL publica del sitio: `https://www.semanadelaia.xyz/`
* Repositorio fuente (GitHub): https://github.com/Mateoquinteroc/semana-ai
* Proyecto en Vercel: configurado, pero URL/referencia de panel no compartible por decision operativa.


---


Anexo A - Archivos clave


* `package.json`
* `vercel.json`
* `src/main.tsx`
* `src/App.tsx`
* `src/pages/Version2026.tsx`
* `src/components/Version2026/config.ts`
* `src/components/Version2026/constants.ts`
* `src/components/Version2026/Hero2026.tsx`
* `src/components/Version2026/TermsOfReference2026.tsx`
* `src/components/Version2026/Schedule2026.tsx`
* `src/components/ProgramacionSection/ProgramacionSection.tsx`
* `src/components/RegistroForm/RegistroForm.tsx`