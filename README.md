# 🦔 tech.hub // forcexdev ⚡️

A clean, responsive, and retro-inspired personal tech hub and link directory compiling all the useful pages, websites, and resources I find valuable as a developer. 

The aesthetic is inspired by the classic **Sega Genesis (Sonic the Hedgehog)** era merged with modern, sleek **Vercel** design elements.

## 🎨 Aesthetic & Features
- **Curated Theme**: Highly polished Dark and Light modes mimicking the iconic Green Hill Zone palettes and Sonic's signature blue.
- **Golden Rings Hover Effects**: Nostalgic retro gold rings that spin dynamically on card hovers.
- **Responsive Grid**: Fluid layout displaying categorized links beautifully across mobile, tablet, and desktop devices.
- **Instant Search**: Quick "Stage" search to filter resources in real time.
- **Decorations**: Retro pixel art Sonic sprites integrated seamlessly throughout the page sections.

## 🛠️ Stack
- **Core**: React 19 + Vite 6
- **Styling**: Tailwind CSS v4 + Custom Vanilla CSS
- **Icons**: Lucide React
- **Typography**: Google Fonts (Silkscreen & JetBrains Mono) + Geist Mono via Vercel CDN

---

## 🚀 Local Development

To run this project locally, execute the following commands in your terminal:

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

> [!TIP]
> **Windows (PowerShell) Note:** If your execution policy restricts running node scripts, you can run CMD directly or prefix the commands with `cmd.exe /c` (e.g., `cmd.exe /c npm run build`).

---

## 🐙 Uploading to GitHub

If you make modifications or need to push the organized structure to your repository:

1. **Stage all changes**:
   ```bash
   git add .
   ```

2. **Commit changes**:
   ```bash
   git commit -m "style: organize folder structure and update README"
   ```

3. **Push to GitHub**:
   ```bash
   git push
   ```

---

## 📐 Deploying on Vercel

This project is fully optimized for **Vercel** and will be auto-detected instantly:

1. Log in to [Vercel](https://vercel.com/) and import your repository.
2. Vercel automatically detects the **Vite** configuration.
3. Keep the default, pre-configured settings:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Click **Deploy**, and your custom tech hub will be live in under a minute!
