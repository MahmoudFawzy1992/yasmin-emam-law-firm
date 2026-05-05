# Yasmin Emam Law Firm - Premium Web Application

A sophisticated, highly optimized, bilingual (English/Arabic) web application built for Yasmin Emam Law Firm. The project features a "Luxury Minimalist" design system utilizing deep blacks, crisp whites, and muted gold accents to establish a premium, trustworthy digital presence.

## 🚀 Key Features

*   **Bilingual Architecture:** Native integration of `i18next` providing instantaneous switching between English (LTR) and Arabic (RTL) without reloading. Layouts utilize logical CSS properties to flawlessly mirror the UI.
*   **Premium Animations:** Powered by `framer-motion` for smooth scroll reveals, subtle micro-interactions, and premium page transitions.
*   **Modern Styling:** Built with the high-performance Tailwind CSS v4 `@theme` engine.
*   **SEO Optimized:** Utilizes `react-helmet-async` for robust, dynamic per-page metadata management.
*   **Functional Contact Flow:** Features a professional form component architected to connect with a Google Apps Script webhook, alongside a pulsating floating WhatsApp chat button.
*   **Responsive:** Mobile-first architecture ensuring perfect display across all devices.

## 💻 Tech Stack

*   **Framework:** React 19 + Vite
*   **Styling:** Tailwind CSS v4
*   **Routing:** React Router v7
*   **Localization:** i18next & react-i18next
*   **Animations:** Framer Motion
*   **Icons:** Lucide React

## 📁 Project Structure

```text
yasmeen-website/
├── public/                 # Static assets and Apache .htaccess file
├── src/
│   ├── assets/             # Brand images and SVGs
│   ├── components/
│   │   ├── layout/         # MainLayout, Navbar, Footer
│   │   └── ui/             # PageHero, WhatsAppButton
│   ├── pages/              # Route pages (Home, About, Services, Contact, NotFound)
│   ├── i18n.js             # Translation dictionaries & configuration
│   ├── index.css           # Tailwind v4 directives and CSS variables
│   └── App.jsx             # React Router and global state
└── vite.config.js          # Vite & Tailwind compilation settings
```

## 🛠️ Local Development Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/MahmoudFawzy1992/yasmin-emam-law-firm.git
   cd yasmeen-website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   The site will be available locally at `http://localhost:5173`.

## ⚙️ Configuration Notes

### Contact Form Webhook
The contact form is currently running a front-end simulation of a success state. To make it functional:
1. Open `src/pages/Contact.jsx`.
2. Locate the `GOOGLE_SHEETS_WEBHOOK_URL` variable.
3. Replace the placeholder string with your deployed Google Apps Script URL.
4. Uncomment the `fetch()` block in the `handleSubmit` function.

## 🌍 Production Deployment

This project is configured to be deployed on any standard Apache web server (like Hostinger).

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy:**
   Upload the entire contents of the newly generated `dist/` folder to your server's `public_html` directory. 
   
   *Note: A `.htaccess` file is automatically copied to the `dist/` folder during the build process to ensure React Router handles page refreshes correctly without throwing 404 errors.*
