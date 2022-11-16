import { ColorScheme } from "./.nuxt/components";

export default {
  darkMode: 'class',
  plugins: [
    require('daisyui')
  ],
  content: [
    'components/**/*.{vue,js}',
    'composables/**/*.{js,ts}',
    'layouts/**/*.vue',
    'pages/**/*.vue',
    'plugins/**/*.{js,ts}',
    'App.{js,ts,vue}',    
    'app.{js,ts,vue}',    
    'content/**/*.md'
  ],
  daisyui: {
    themes: [
      {
        'theaterpedia-flip': {
          ...require('daisyui/src/colors/themes')['[data-theme=cyberpunk]'],
          primary: '#ffee00',
          secondary: '#84CC16',
          accent: '#ff7598',
          neutral: '#12100f',
          'base-100': '#1d1b1a'
        },
        'theaterpedia-dark': {
          primary: '#84CC16',
          'primary-content': '#1d1b1a',
          secondary: '#E9E92E',
          'secondary-content': '#1d1b1a',
          accent: '#F7F9CA',
          'accent-content': '#1d1b1a',
          neutral: '#12100f',
          'base-100': '#1d1b1a',
          info: '#2563eb',
          success: '#16a34a',
          warning: '#d97706',
          error: '#dc2626'
          // siehe: https://daisyui.com/docs/themes/
          // siehe: https://daisyui.com/docs/colors/
          // siehe: https://daisyui.com/docs/config/
        },
        'theaterpedia-dark2': {
          ...require('daisyui/src/colors/themes')['[data-theme=dark]'],
          primary: '#84CC16', // '#84CC16', // lime-500
          'primary-focus': '#4d7C0f', // lime-700
          secondary: '#E9E92E', // '#84CC16', // lime-500
          'secondary-content': '#44403c',
          accent: '#F7F9CA'
        },
        'theaterpedia-light': {
          ...require('daisyui/src/colors/themes')['[data-theme=lemonade]'],
          'secondary-content': '#4d7C0f'
        },
        'theaterpedia-flipdark': {
          ...require('daisyui/src/colors/themes')['[data-theme=dark]'],
          secondary: '#84CC16', // lime-500
          'secondary-focus': '#4d7C0f' // lime-700
        },
        'base-dark': {
          ...require('daisyui/src/colors/themes')['[data-theme=dark]']
        },
        'base-light': {
          ...require('daisyui/src/colors/themes')['[data-theme=light]']
        },
        'base-flip': {
          ...require('daisyui/src/colors/themes')['[data-theme=cyberpunk]']
        },
        'base-flipdark': {
          ...require('daisyui/src/colors/themes')['[data-theme=aqua]']
        }
      },
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter'
    ],
    darkTheme: 'theaterpedia-dark'
  },
  theme: {
    extend: {
      colors: {
        primary: 
        {
          500: '#ffee00'
        }
        // secondary: colors.lime
      }
    }
  }
}
