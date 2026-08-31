/**
 * @BAUTO_REFACTOR 2026-08-30
 * @Modulo: 0. HUB (frontend — GitHub Pages, NO sube a Apps Script)
 * @Propósito: Única constante que comparten las 4 páginas del hub
 *             (index.html, login.html, enrolar.html, acceso-tienda.html):
 *             la URL /exec del despliegue del backend. Se llama config-web.js
 *             y no config.js para que no choque con los archivos .js del
 *             backend en esta misma carpeta plana (ver .claspignore).
 * @Capa: Técnica
 * @Riesgo_Evaluado: Bajo - una sola constante, sin lógica.
 */

// URL del despliegue del backend del Hub Maestro BAUTO
const HUB_URL = 'https://script.google.com/macros/s/AKfycbzuWMgia3R3tfTwOtQuFPKk5nvVgeEKVV4wBGOTvwMFUpRa1eO-P3ejQCSoBQTQt1L4/exec';
