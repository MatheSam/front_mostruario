module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        pulseColor: {
          '0%, 100%': { backgroundColor: 'theme(colors.con)', color: 'theme(colors.pri)' }, // Cor normal
          '50%': { backgroundColor: 'theme(colors.pri)', color: 'theme(colors.con)' }, // Cor de hover
        },
      },
      animation: {
        pulseColor: 'pulseColor 5s infinite', // Duração da animação
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        pri: '#e4f1f7',
        seg: '#058cfb',
        ter: '#024882',
        qua: '#025396',
        con: '#D93031',
        tit: '#1c1c1c',
        tex: '#3d3d3d',
      },
      padding: {
        '100': '0px 30px',
        's100': '0px 50px',
        'm100': '0px 100px',
        'l100': '0px 150px',
        'x100': '0px 200px',
      }
    },
  },
  plugins: [],
}
