module.exports = {
  theme: {
    extend: {
      lineHeight: {
        'extra-loose': '2.5',
        12: '3rem',
        16: '4rem',
        20: '5rem',
        48: '9rem',
      },
      height: {
        banner: 'calc(100vh - 150px)',
      },
      zIndex: {
        '-1': -1,
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
      // Define pattern
      backgroundImage: () => ({
        'hero-pattern': "url('/cube 1.png')",
      }),
      // Define animation class
      animation: {
        'wiggle-linear-infinite': 'wiggle 500ms linear infinite',
      },
    },
  },
}
