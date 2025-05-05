# 🧩 Modelado de Datos – App ContraINTEL

---

## 1️⃣ Modelo Entidad–Relación (MER)

### 🔸 Entidades principales:

#### 🧑 Usuario
- `id_usuario` (PK)
- `nombre`
- `correo`
- `password`
- `rol` (usuario / analista / admin)
- `fecha_registro`

---

#### 📝 Reporte
- `id_reporte` (PK)
- `id_usuario` (FK)
- `tipo_incidente` (phishing, ransomware, fuga, etc.)
- `descripcion`
- `archivo_adjunto`
- `fecha_reporte`
- `estatus` (nuevo, en análisis, cerrado)

---

#### 👨‍💻 Analista
> (en este modelo puede estar separado de usuario o ser un tipo especial de usuario)

- `id_analista` (PK)
- `id_usuario` (FK)
- `especialidad` (CTI, DFIR, SOC)
- `activo` (bool)

---

#### 📊 Respuesta
- `id_respuesta` (PK)
- `id_reporte` (FK)
- `id_analista` (FK)
- `comentario`
- `recomendacion`
- `fecha_respuesta`
- `estatus_final` (resuelto, requiere más info, descartado)

---

#### 🧠 Feed_Inteligencia
- `id_feed` (PK)
- `titulo`
- `descripcion`
- `tipo` (hash, IP, URL, CVE, etc.)
- `fuente`
- `fecha_publicacion`
- `id_usuario` (FK)

---

## 2️⃣ Diagrama Relacional

> 📌 Puedes crearlo en:
- https://drawio.com (sencillo)
- https://chartdb.io (automático para ERD)
- https://dbdiagram.io (rápido para SQL → diagrama)

---

### 📥 Ejemplo visual en texto (por si lo haces en Draw.io):

