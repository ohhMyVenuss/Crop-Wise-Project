/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'primary': '#2A9D8F',         // Xanh mòng két - Màu chủ đạo
        'primary-dark': '#264653',    // Xanh đen - Cho text chính, hover
        'accent': '#F4A261',         // Cam đất - Màu nhấn ấm
        'neutral-text': '#5A7D7C',    // Xám xanh - Cho văn bản phụ
        'subtle-bg': '#F7F7F7',      // Xám siêu nhạt - Nền chính
        'light-border': '#EAEAEA',    // Viền nhạt
        // Giữ lại các màu cũ để tương thích
        primary: {
          50: '#f0f9ff',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },
        green: {
          50: '#f0fdf4',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
        }
      }
    },
  },
  plugins: [],
}
