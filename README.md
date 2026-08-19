# HSK · Chino 1–3

Una aplicación para aprender vocabulario de chino que **se instala en el teléfono,
funciona sin internet y no pide cuenta**. Orden de trazos animado, pinyin, audio,
lecturas, gramática explicada en español y simulacro de examen.

Hecha en [Meridian Vision](https://meridianvision.cl). Es gratis y lo va a seguir siendo.

**Ábrela ahora:** https://meridianvision.github.io/hsk1/

---

## Qué trae

| Nivel | Palabras | Contenido |
|---|---|---|
| **HSK 1** | 150 | Ejemplos, 50 frases para conversar, 10 historias, 10 diálogos, simulacro de 40 preguntas |
| **HSK 2** | 147 | Ejemplos, 54 frases, 10 historias, 10 diálogos, simulacro de 60 preguntas con la estructura oficial |
| **HSK 3** | 86 | Repartidas en las 5 lecciones del temario, 19 puntos de gramática con 70 ejercicios que explican el porqué |

- **Trazos animados** carácter por carácter, con velocidad regulable.
- **Audio** con voz de mandarín nativa en la mayor parte del contenido, y voz del
  navegador en el resto.
- **Modo sombra** para repetir encima de la locución a media velocidad.
- **Simulacro de examen** cronometrado, con el formato de las ocho partes oficiales,
  corrección por sección y revisión de las respuestas una por una.
- **Tu avance se guarda solo**, y puedes exportarlo a un archivo para pasarlo a otro
  dispositivo.

## Instalación

1. Abre el enlace en el teléfono.
2. **Android (Chrome):** menú ⋮ → *Instalar aplicación*.
   **iPhone (Safari):** Compartir → *Añadir a pantalla de inicio*.
3. Ábrela una vez con internet. Desde ahí funciona en modo avión.

## Qué no hace

- No es un curso completo: es práctica de vocabulario, lectura y examen.
- No corrige tu pronunciación ni escucha el micrófono.
- No tiene HSK 4, 5 ni 6 todavía. La estructura ya los soporta; falta poblarlos.
- No sube nada a ningún servidor. No hay cuentas, no hay analítica, no hay rastreo.
- **No tiene relación con Hanban, CLEC ni Chinese Testing International.** «HSK» se
  menciona solo para describir el nivel. El puntaje del simulacro no tiene validez oficial.

## Cómo está hecho

`index.html` lleva todo dentro: contenido, estilos y lógica. Los datos de trazos
están auto-hospedados en `data/` (467 archivos), así que la app no depende de ningún
servicio externo para funcionar. `audio/` guarda los clips de voz nativa pregenerados.

Para correrlo local:

```bash
python3 -m http.server 8080
# y abre http://localhost:8080
```

## Créditos y licencias

El código de la aplicación es MIT. Los componentes de terceros conservan la suya,
y el detalle completo está en [`LICENSES.txt`](LICENSES.txt) y en la pantalla
«Acerca de» de la propia app:

- [hanzi-writer](https://hanziwriter.org) — MIT.
- **hanzi-writer-data**, derivado de *Make Me a Hanzi* — **Arphic Public License**.
  El conjunto de datos de trazos en `data/` **no está modificado** y conserva su
  licencia original; consérvala si lo reutilizas.
- Las listas de vocabulario HSK son de dominio público.
- Las frases, historias, diálogos, ejercicios de gramática e ítems del simulacro
  están redactados por Meridian Vision.
- Los archivos de audio en `audio/` **no** se distribuyen bajo la licencia MIT:
  son voces sintéticas generadas con ElevenLabs bajo la cuenta de Meridian Vision
  y el permiso no es transferible. Si haces un fork, genera los tuyos.

## Licencia

MIT para el código, con las excepciones de arriba. Sin garantía de ningún tipo.

---

<sub>Meridian Vision SpA · Santiago de Chile · parte del
[Taller Abierto](https://github.com/meridianvision): las herramientas que
construimos para trabajar y publicamos gratis.</sub>
