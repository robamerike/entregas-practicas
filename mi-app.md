# 🛡️ Nombre de la App: **ContraINTEL**

---

## 📋 Descripción de la App

**ContraINTEL** es una plataforma web orientada a la **respuesta rápida ante incidentes cibernéticos** y la **colaboración en inteligencia de amenazas**.

Inspirada en sistemas como **Group-IB**, **DFIR Report**, y **CSIRT-as-a-Service**, su objetivo es brindar un espacio donde usuarios, empresas o investigadores puedan:

- **Reportar incidentes en tiempo real** (phishing, fuga de datos, actividad interna sospechosa, etc.)
- **Solicitar apoyo de analistas especializados** (como threat hunters, DFIR o CTI)
- **Compartir información de inteligencia** como hashes, IPs maliciosas, dominios sospechosos, artefactos de malware, entre otros.
- **Visualizar dashboards de amenazas activas** para conocer el panorama actual.

Esta app puede ser utilizada en entornos educativos, corporativos o por analistas independientes.

---

## 🎨 Moodboard

> Una interfaz oscura, profesional, tipo consola cibernética. Combinación de colores como #121212, #1f2937, verde lima y detalles en rojo. Íconos de alerta, tablas de incidentes, gráficas estilo SOC.

![Moodboard](assets/moodboard-contraintel.jpg)

---

## 🧠 Algoritmo de Funcionamiento

1. El usuario accede al portal de **ContraINTEL**.
2. Se le ofrece una opción para **registrar un incidente**, ya sea como anónimo o con cuenta.
3. El usuario llena un formulario que incluye: tipo de amenaza, breve descripción, archivos o URLs relacionados.
4. El incidente se guarda y se muestra en el panel de analistas.
5. Un analista de CTI o DFIR recibe el incidente y puede:
   - Clasificarlo
   - Analizar los artefactos enviados
   - Vincularlo con inteligencia previa
   - Sugerir acciones de contención o mitigación
6. El usuario que reportó puede **dar seguimiento** a través de una bandeja o ticket.
7. En paralelo, existe un **feed público tipo Threat Exchange** donde los usuarios pueden:
   - Publicar observables
   - Compartir alertas activas
   - Comentar o añadir contexto
8. El panel principal muestra un **dashboard de actividad**:
   - Cantidad de incidentes activos
   - Tipos más reportados
   - Estadísticas por categoría o tiempo

---

## 🔁 Diagrama de Flujo del Algoritmo

> El flujo contempla desde el ingreso del incidente hasta el análisis y respuesta por parte de analistas.

![Diagrama de flujo](assets/diagrama-flujo-contraintel.png)

---

## 🔧 Herramientas a utilizar

- HTML / CSS / JS Vanilla (o TailwindCSS para UI pro)
- Simulación de backend con JSON Server o localStorage
- Paneles dinámicos (JS puro, Chart.js para gráficos)
- Posible futura integración con APIs como:
  - VirusTotal
  - AbuseIPDB
  - HaveIBeenPwned

---

## 💡 Funcionalidades previstas

| Módulo                  | Descripción                                                                 |
|------------------------|-----------------------------------------------------------------------------|
| Reporte de Incidentes  | Formulario para registrar incidentes de seguridad                           |
| Feed de Inteligencia   | Espacio para compartir IoCs, URLs maliciosas, hashes, etc.                  |
| Dashboard de Amenazas  | Vista gráfica de la situación de amenazas activas                           |
| Centro de Análisis     | Espacio exclusivo para analistas CTI/SOC/DFIR                               |
| Sistema de Tickets     | Seguimiento de los reportes por parte de los usuarios                       |
| Modo Anónimo           | Permite enviar incidentes sin registro, ideal para whistleblowers o leaks   |

---

## 🔐 Público objetivo

- Estudiantes de ciberseguridad que desean practicar análisis realistas.
- Profesionales que quieren testear ideas de coordinación CTI/CSIRT.
- Organizaciones pequeñas que no tienen un SOC completo.
- Personas que deseen un entorno seguro para reportar amenazas internas o externas.

---
