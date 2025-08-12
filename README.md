# 🛠️ PWA Boilerplate con MDL

Este proyecto es un entorno base para desarrollar Progressive Web Apps (PWA) utilizando **Material Design Lite (MDL)**. Incluye configuración de herramientas modernas para desarrollo profesional, incluyendo:

- 📡 Servidor de desarrollo con recarga en vivo
- ✅ Herramientas de calidad de código (ESLint y Prettier)
- ⚙️ Scripts para desarrollo y producción
- 📱 Estructura base con Service Worker y manifest.json

## 📂 Estructura del Proyecto

```bash
├── index.html
├── manifest.json
├── sw.js
├── css/
├── js/
├── assets/
├── .eslintrc.json
├── .prettierrc
├── package.json
```


## 🚀 Scripts NPM

- `npm run dev` → Inicia live-server con recarga en vivo.
- `npm run lint` → Analiza el código con ESLint.
- `npm run format` → Formatea el código automáticamente.
- `npm run serve` → Sirve la app con http-server (producción). **Incluye `-c-1` para desactivar caché**, esencial para probar correctamente el Service Worker.

## 💡 ¿Por qué usamos `-c-1` en producción?

El cache de `http-server` puede interferir con el cache que maneja tu Service Worker, generando falsos positivos o pruebas incorrectas. Este flag asegura que las pruebas sean reales y controladas por el Service Worker.

## 🧱 Requisitos

- Node.js y NPM instalados.
- Editor de texto como VSCode.

## ✅ ¿Para qué sirve este boilerplate?

Para comenzar cualquier PWA de forma profesional, sin tener que configurar todo manualmente. Solo clona y ejecuta:
```bash
git clone https://github.com/appkalorder/pwa_boilerplate
cd pwa-boilerplate
npm install
npm run dev
```

