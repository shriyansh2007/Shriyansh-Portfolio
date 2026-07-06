# Shriyansh Goyal — Portfolio



## Run it locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

Deploy the generated `dist/` folder to Vercel, Netlify, GitHub Pages, or
any static host.

## File structure

```
portfolio/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx              # React entry point
    ├── App.jsx                # Composes all sections + scroll progress bar
    ├── index.css              # Design tokens + global styles
    ├── data/
    │   └── content.js         # ALL your personal content lives here
    ├── hooks/
    │   └── useActiveSection.js
    └── components/
        ├── Loader.jsx          # Boot animation
        ├── Navbar.jsx          # Responsive nav + mobile menu
        ├── SignalTrace.jsx     # Signature scroll-linked side trace
        ├── ThreeScene.jsx      # 3D hero background (react-three-fiber)
        ├── Hero.jsx            # Landing section
        ├── About.jsx
        ├── Skills.jsx
        ├── Projects.jsx
        ├── Contact.jsx
        └── Footer.jsx
```


