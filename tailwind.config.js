/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
          bar: 'bar 3s',
          bar2: 'bar2 0.5s',
          typewriter: 'typewriter 3s steps(15) 1s, cursor 500ms step(15) infinite',
      },
      keyframes: {
        bar:{
          '0%' : {transform: 'scaleX(0)'
        },
          '100%' :{transform: 'scaleX(1)'},
        },
        bar2:{
          '0%' : {transform: 'scaleX(0)'
        },
          '100%' :{transform: 'scaleX(1)'},
        },
        typewriter:{
          '0%' : {width: '0ch'},
          '100%' : {width: '15ch' },
        },
      }
    },
  },
  plugins: [],
}