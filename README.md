# 🦔 tech.hub // forcexdev ⚡️

Un portal minimalista y responsivo de enlaces y recursos de tecnología con una estética retro inspirada en **Sega Genesis (Sonic the Hedgehog)** combinada con toques modernos de **Vercel**.

## 🎨 Características Estéticas y Funcionales
- **Paleta de Colores Curada**: Modos oscuro y claro sumamente cuidados que evocan los cielos de Green Hill Zone y el clásico azul de Sonic.
- **Detalles Pixel Art**: GIFs clásicos de Sonic integrados dinámicamente y efectos retro de anillos dorados giratorios (*Golden Rings*) al pasar el cursor sobre las tarjetas.
- **Fondo GHZ Dinámico**: Un patrón cuadriculado verde/azul retro que se desplaza suavemente en sintonía con la página.
- **Barra de Navegación Pegajosa (Sticky Header)**: Navegación unificada con barra de búsqueda rápida para filtrar etapas (*stages*) y cambio de tema dinámico.
- **Skeleton Loaders**: Efecto shimmer para las capturas de pantalla de los enlaces durante su carga inicial.

## 🛠️ Stack Tecnológico
- **Core**: React 19 + Vite 6
- **Estilos**: Tailwind CSS v4 + Custom Vanilla CSS
- **Iconos**: Lucide React
- **Fuentes**: Google Fonts (Silkscreen & JetBrains Mono) + Geist Mono desde el CDN de Vercel

---

## 🚀 Desarrollo Local

Sigue estos pasos para ejecutar el proyecto en tu entorno local:

1. **Instalar dependencias**:
   ```bash
   npm install
   ```

2. **Iniciar el servidor de desarrollo**:
   ```bash
   npm run dev
   ```

3. **Compilar para producción** (para verificar que todo compila sin problemas):
   ```bash
   npm run build
   ```

> [!TIP]
> **Nota para Windows (PowerShell):** Si experimentas problemas ejecutando comandos de Node debido a las políticas de ejecución de scripts, puedes usar CMD directamente o anteponer `cmd.exe /c` (por ejemplo: `cmd.exe /c npm run build`).

---

## 🐙 Cómo subirlo a GitHub

Para subir esta carpeta a un nuevo repositorio en tu cuenta de GitHub, ejecuta los siguientes comandos en tu terminal desde la raíz de este proyecto:

1. **Asegúrate de que Git está inicializado** (este proyecto ya contiene una carpeta `.git`):
   ```bash
   git status
   ```

2. **Añade todos los archivos** al área de preparación (gracias al `.gitignore` configurado, carpetas pesadas como `node_modules` y archivos generados como `dist` no serán añadidos):
   ```bash
   git add .
   ```

3. **Haz tu primer commit**:
   ```bash
   git commit -m "feat: initial commit - sonic techhub portal"
   ```

4. **Crea la rama principal (main)** si no estás en ella:
   ```bash
   git branch -M main
   ```

5. **Vincula tu repositorio remoto** (crea un repositorio vacío en GitHub primero y copia su dirección URL):
   ```bash
   git remote add origin https://github.com/TU-USUARIO/TU-REPOSITORIO.git
   ```

6. **Sube tus archivos a GitHub**:
   ```bash
   git push -u origin main
   ```

---

## 📐 Cómo desplegar en Vercel

Desplegar este proyecto en Vercel es sumamente sencillo ya que está optimizado y auto-detecta la configuración de Vite:

1. Ve a **[Vercel](https://vercel.com/)** e inicia sesión con tu cuenta de GitHub.
2. Haz clic en **"Add New..."** y selecciona **"Project"**.
3. Importa el repositorio de GitHub que acabas de subir (`techhub-forcexdev`).
4. Vercel detectará automáticamente que es un proyecto de **Vite**.
5. Deja los valores predeterminados (los cuales ya están optimizados):
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Haz clic en **"Deploy"** y ¡listo! En menos de un minuto tu portal de enlaces estará en línea.

---

*Creado con 💍 y Esmeraldas del Caos por forcexdev.*
