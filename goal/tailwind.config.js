/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
],
  theme: {
    
    extend: {
        colors:{
          'main':'#6B9080',
          'sub':'#B3B3B3',
          'background':'#F7F7F7'
        },
        fontSize:{
          'xxl':'46px',
          'primary':'22px',
          'secondary':'16px',
          '20':'20px'
        },
        width: {
          '800': '800px',
          '600': '600px',
        },
        height:{
          '100':'100',
          '300':'300',
        },
    },
  },
  plugins: [],
}


