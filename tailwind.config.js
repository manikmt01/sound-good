/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  // coustomize your brand style
  theme: {
    screens: {
      xsm: '370px',
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1200px',
      '1xl': '1300px',
      '2xl': '1500px',
    },

    fontFamily: {
      Helvetica: ['Helvetica'],
      NeueMontreal: ['Neue Montreal'],
      Futura: ['Futura Display BQ'],
      Roboto: ['Roboto', 'sans-serif'],
    },
    // extend your classes
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem',
        '120px': '120px',
        container: '1394px',
        boxWidth: '538px',
      },
      colors: {
        link: '#292985',
        bannerBg: '#151544',
        buttonColor: '#00a949',
        textColor: '#232479',
      },
      fontSize: {
        '35px': '35px',
        '32px': '32px',
      },
      backgroundImage: {
        heroSection: "url('../img/banner.jpg')",
      },
      borderRadius: {
        '4xl': '4.375rem',
      },
    },
  },
  plugins: [],
};
