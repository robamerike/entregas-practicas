# ContraINTEL

**Alumno:** Roberto Vilchis  
**Profesor:** Mtro. Jonathan U. Miranda Charles  
**Materia:** Seguridad en Apps Móviles  
**Entrega:** Examen Extraordinario 2025-2

---

## 📌 Descripción General

**ContraINTEL** es una aplicación web para el registro y análisis de incidentes de ciberseguridad.  
Implementa autenticación segura, separación de roles y sandbox simplificado, simulando un flujo profesional de gestión de incidentes tipo SOC/CSIRT.

---

## 👤 Roles del Sistema

### 📝 Reportante
- Registra incidentes mediante un formulario
- Adjunta un archivo relacionado al incidente
- El archivo se sube al storage y se calcula su hash SHA-256
- Visualiza el historial de sus reportes

### 🔍 Analista
- Visualiza todos los incidentes registrados
- Filtra y cambia el estado del incidente
- Descarga cada archivo como `.zip` protegido con contraseña (`ContraINTEL2025`) para mantener prácticas seguras tipo sandbox

---

## 🔐 Seguridad Implementada

- ✅ Autenticación con Supabase (`email + password`)
- ✅ Control de acceso por rol (`reportante` / `analista`)
- ✅ Reglas RLS (
