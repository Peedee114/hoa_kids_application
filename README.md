# HOA Kids Component Library

A small React component starter for the HOA Kids application using the selected `Calm & Friendly` palette, accessible typography, and reusable UI building blocks.

## Stack
- `React`
- `Vite`
- Plain CSS with design tokens

## Components
- `Button`
- `Card`
- `Icon`
- `Tag`
- `Modal`

## Project structure
- `index.html` — Vite entry HTML
- `src/main.jsx` — React bootstrap
- `src/App.jsx` — component showcase screen
- `src/components/` — reusable React components
- `src/styles.css` — design tokens and component styling

## Quick start

```powershell
Set-Location "c:\Users\preci\OneDrive\Desktop\HOA Projects\Children's App\hoa_kids_application"
npm install
npm run dev
```

Open the local URL shown by Vite, usually `http://localhost:5173`.

## Build

```powershell
Set-Location "c:\Users\preci\OneDrive\Desktop\HOA Projects\Children's App\hoa_kids_application"
npm run build
```

## Storybook

```powershell
Set-Location "c:\Users\preci\OneDrive\Desktop\HOA Projects\Children's App\hoa_kids_application"
npm run storybook
```

Build the static Storybook site with:

```powershell
Set-Location "c:\Users\preci\OneDrive\Desktop\HOA Projects\Children's App\hoa_kids_application"
npm run build-storybook
```

## Notes
- Google Fonts are loaded inside the React stylesheet.
- The app currently serves as a component foundation that can be expanded into full screens.
- Storybook documents the current `Button`, `Card`, `Icon`, `Tag`, and `Modal` components plus the selected design foundations.
