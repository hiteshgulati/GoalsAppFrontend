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
          '20':'20px',
          '26':'26px',
        },
        width: {
          '800': '800px',
          '600': '600px',
        },
        height:{
          '100':'100',
          '300':'300',
        },
        dropShadow: {
          '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
          '4xl': [
              '0 35px 35px rgba(0, 0, 0, 0.25)',
              '0 45px 65px rgba(0, 0, 0, 0.15)'
          ]
        }
  
    },
  },
  plugins: [],
}


