/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-1': '#2C5CA3',
        'blue-2': '#408DFF',
        'gray-1': '#727272',
        'gray-cards': '#B8BDC1',
      },
      fontFamily: {
        'outfit': ['Outfit', 'sans-serif'],
        'ovo': ['Ovo', 'sans-serif'],
      },
      fontSize: {
        //fuentes para el encabezado
        'header': '8rem',
        'sub-header': '2.66rem',
        //fuentes para el contenido
        'titulo': '3.438rem',
        'subtitulo-btn': '2.124rem',
        'texto': '1.313rem',
        //fuentes para el footer
        'titulos-footer': '2.023rem',
        'links': '1.25rem',
        'derechos': '0.875rem',
      },
    },
  },
  plugins: [],

}

