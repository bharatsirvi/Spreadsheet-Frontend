# Spreadsheet Frontend

A React + TypeScript spreadsheet-like UI built with Vite and Tailwind CSS.  
You can navigate with arrow keys, and enjoy a modern, Excel-like experience.  
**Note:** Data editing is temporary and not persisted.

## Features

- Editable table cells (click to edit, press Enter/Escape to finish)
- Keyboard navigation (arrow keys to move between cells)
- Sticky headers with Excel-like look
- Responsive and clean UI using Tailwind CSS

## Setup

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Run the development server:**
   ```sh
   npm run dev
   ```

3. **Type check (optional):**
   ```sh
   npm run type-check
   ```

4. **Lint (optional):**
   ```sh
   npm run lint
   ```

## Trade-offs

- **No Real Data Sync:** The table is for UI demonstration and does not update the underlying data source.
- **Accessibility:** Basic keyboard navigation is supported, but advanced accessibility features may be limited.
- **Performance:** Suitable for small to medium datasets; large datasets may require virtualization for best performance.

## Tech Stack

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Icons](https://react-icons.github.io/react-icons/)

---

