# 💡 Lit.js + Tailwind CSS + Vite Web Components Starter

This project demonstrates how to build Web Components using [Lit.js](https://lit.dev/) with scoped styling powered by [Tailwind CSS](https://tailwindcss.com/) and [Vite](https://vitejs.dev/).

It includes:

- Atomic components (`CardImage`, `CardTitle`, `CardText`, `CardButton`)
- A composed `CardContainer` component
- Tailwind styles scoped via `adoptedStyleSheets` and Shadow DOM
- Fast development with Vite

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Open: [http://localhost:5173](http://localhost:5173)

---

## 🧱 Project Structure

```
src/
├── components/
│   ├── CardContainer.js
│   ├── CardImage.js
│   ├── CardTitle.js
│   ├── CardText.js
│   └── CardButton.js
├── index.css         # Tailwind file
└── main.js           # Entry point
```

---

## 🔧 Tooling Setup

### ✅ Scoped Styles with Shadow DOM

We use `adoptedStyleSheets` to scope Tailwind to each Web Component:

```js
import tailwindCss from '../main.css' assert { type: 'css' };

static styles = [tailwindCss];
```

To make this work, we use:

```bash
npm install -D vite-plugin-lit-css
```

...and update `vite.config.js`:

```js
import { defineConfig } from 'vite';
import litcss from 'vite-plugin-lit-css';

export default defineConfig({
  plugins: [litcss({ include: '**/*.css' })],
});
```

---

## 🧪 Example Usage

In `index.html`:

```html
<card-container
  img="https://via.placeholder.com/300"
  title="Hello World"
  text="This is a Lit + Tailwind Card"
  button="Click me!"
></card-container>
```

---

## 📦 Build for Production

```bash
npm run build
```

The compiled app will be in the `dist/` folder.

---

## 📘 Resources

- [Lit Documentation](https://lit.dev/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev/)
