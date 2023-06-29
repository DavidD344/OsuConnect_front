/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // extends: {
  theme: {
    fontFamily: {
      sans: 'valor do fontdfamyl',
    },
    fontSize: {
      zs: '1.2rem',
      xs: '1.4rem',
      sm: '1.6rem',
      md: '1.8rem',
      lg: ['2.4rem', 1],
      xl: ['3.6rem', 1.3],
      '2xl': ['4.8rem', 1.3],
      '3xl': ['5.6rem', 1.3],
      '5xl': ['8rem', 1.3],
    },
    colors: {
      white: '#fff',
      'white-a08': 'rgba(255,255,255,0.7)',
      background: '#fff',
      'black-900': '#000000',
      'black-700': '#212121',
    },
    spacing: {
      0: '0',
      1: '0.4rem',
      2: '0.8rem',
      3: '1.2rem',
      4: '1.6rem',
      5: '2.0rem',
      6: '2.4rem',
      7: '2.8rem',
      8: '3.2rem',
      9: '3.6rem',
      10: '4.0rem',
      11: '4.4rem',
      12: '4.8rem',
    },
    backgroundImage: {
      'primary-gradient':
        'linear-gradient(92.88deg, rgb(69, 94, 181) 9.16%, rgb(86, 67, 204) 43.89%, rgb(103, 63, 215) 64.72%)',
    },
    boxShadow: {
      primary: 'rgb(80 63 205 / 50%) 0px 1px 40px',
    },
  },

  // },
  plugins: [],
};
