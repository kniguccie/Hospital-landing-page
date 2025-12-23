# Medic — Hospital Landing Page 🚑

**Medic** is a simple, responsive hospital/clinic landing page built with React. It showcases services, doctors, facilities, partners, testimonials and other components commonly used for healthcare websites.

---

## 🚀 Features

- Clean, responsive UI built with React
- Modular components: `Navbar`, `Banner`, `Services`, `Doctors`, `Facilities`, `Testimonials`, `Partners`, `Footer`
- Local assets and data in `src/assets` for easy customization
- Ready-to-build production bundle via `react-scripts` (Create React App)

---

## 🧰 Tech stack

- React (v19) with Create React App
- JavaScript (ES6+)
- CSS modules / component-level styles

---

## ⚙️ Prerequisites

- Node.js (LTS recommended) and npm installed

Verify with:

```bash
node -v
npm -v
```

---

## 💻 Quick Start

1. Clone the repo and change into the `medic` folder (or open the workspace in your editor):

```bash
git clone <repo-url>
cd Hospital-landing-page/medic
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm start
```

This launches the app at http://localhost:3000 by default.

---

## 📦 Available Scripts

These scripts come from `package.json`:

- `npm start` — Runs the app in development mode
- `npm run build` — Builds the app for production to the `build` folder
- `npm test` — Launches the test runner
- `npm run eject` — Ejects Create React App configuration (irreversible)

---

## 📁 Project Structure

```
medic/
├─ public/
│  └─ index.html
├─ src/
│  ├─ assets/ (images, services, doctors data)
│  ├─ components/ (Banner, Navbar, Services, Doctors, Facilities, Testimonials, Partners, Footer)
│  ├─ App.js
│  └─ index.js
├─ package.json
└─ README.md
```

Key component files:

- `src/components/banner/Banner.jsx`
- `src/components/services/Services.jsx`
- `src/components/doctors/Doctors.jsx`
- `src/components/facilities/Facilities.jsx`
- `src/components/testimonials/Testimonials.jsx`
- `src/components/partners/Partners.jsx`
- `src/components/footer/Footer.jsx`
- `src/components/navbar/Navbar.jsx`

---

## 🔧 Customization Tips

- Replace images in `src/assets/images` and update references in asset files.
- Update `src/assets/services.js` and `src/assets/doctors.js` to change displayed content.
- Edit component CSS files (e.g., `src/components/*/*.css`) for styling changes.

---

## 🚀 Deployment

You can deploy the `build` folder produced by `npm run build` to many static hosts:

- Netlify — drag & drop the `build/` folder or connect via Git
- Vercel — seamless Create React App deployments
- GitHub Pages — use `gh-pages` package or deploy `build/` assets via GitHub Actions

---

## 🤝 Contributing

Contributions are welcome. Please open issues for bugs or feature suggestions and submit pull requests for improvements.

---

## 📄 License

This project is provided under the **MIT License**. Feel free to adapt and use it for personal or commercial projects.

---

## ✉️ Contact

For questions or help with the project, open an issue or contact the repository owner.

---

_Updated README for the Medic hospital landing page._
