import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    darkMode: 'class',
    theme: {
        extend: {
            screens: {
                xs: '320px',
                sm: '415px',
                sml: '500px',
                md: '667px',
                mdl: '768px',
                lg: '960px',
                lgl: '1024px',
                xl: '1280px'
            },

            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'gradient-purple': 'linear-gradient(135deg,#9a7bff,#de7cff 47%,#ffc37e)',
                'gradient-primary':
                    'linear-gradient(135deg,rgba(180,157,255,0) 11%,#b49dff 26%,#e4a7f9 45%,#ffd9ae 72%,rgba(255,217,174,0) 89%);',
                'gradient-middlefooter':
                    'linear-gradient(135deg,#7d4dbc 12%,#5e4282 13%,#8460af 44%,#c594ff 50%,#2a1141 90%,#3c195c 97%)',
                'gradient-bgmiddlefooter':
                    'linear-gradient(#091a34,rgba(9,26,52,0)),url(https://global-uploads.webflow.com/6418f5b…/6498eac…_Ellipse%20blur.webp)',
                'gradient-titleheaderfooter': 'linear-gradient(135deg,#9a7bff,#de7cff 47%,#ffc37e)',
                'gradient-footerIntro':
                    'linear-gradient(135deg,rgba(180,157,255,0) 11%,#b49dff 26%,#e4a7f9 45%,#ffd9ae 72%,rgba(255,217,174,0) 89%);',
                'gradient-model':
                    'linear-gradient(112.1deg, rgba(32, 38, 57,0.06) 11.4%, rgba(63, 76, 119,02) 70.2%);',
                'gradient-blue-loaing': 'linear-gradient(45deg, #c7eeff, #03a9f4)'
            },

            maxWidth: {
                container: '1440px',
                contentContainer: '1260px',
                containerSmall: '1024px',
                containerxs: '768px'
            },

            fontFamily: {
                bodyFont: ['Montserrat', 'sans-serif'],
                titleFont: ['Inter', 'sans-serif']
            },

            colors: {
                textGray: '#9696a5',
                textPurple: '#a157f6',
                textPurpleBorder: '#b982f8',
                textPurpleHover: '#DFCCFB ',
                textBlue: '#006dfa',
                textBlueLight: '#1495e6',
                textGreen: '#16d982',
                textYellow: '#f5b218',
                textBlack: '#081934',
                textWhite: '#fff',
                textError: '#f21b7d',
                textFog: '#2c2c39',
                bgBlack: '#0c131f',
                bgBlackLight: '#56566f',
                bgBlackHover: '#2c2c39',
                bgBlackType: '#1c1d28',
                bgGray: '#edf5ff',
                bgPurple: '#ac52ff',
                bgSwitch: '#f4faff',
                bgPurplePower: '#933ff4',
                bgBlueLight: '#dbebff',
                bgDark: 'rgba(24,33,50,0.4)',
                bgPink: '#c17fff33',
                bgBlue: '#5bc0ff',
                bgInput: '#171822',
                bgError: '#ff43981a',
                bgGrayLight: '#F5F5F5',
                bgModel: 'rgba(105,105,105, 0.6)'
            },

            boxShadow: {
                white: '0 3px 2px rgba(20,45,82,.01)',
                purple: '0 4px 24px rgba(172,82,255,.7)',
                boxheaderfooter: 'inset -1px -1px #3c195c, inset 1px 1px #7d4dbc'
            },

            gridTemplateRows: {
                auto: 'auto'
            },

            gridTemplateColumns: {
                auto: 'auto auto 1fr'
            },

            transitionTimingFunction: {
                ease: 'ease'
            },

            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(100%)' }
                },
                rotate: {
                    '0%, 50%': { transform: 'rotate(360deg)' },
                    '100%': { transform: 'rotate(0deg)' }
                },
                animateLoanding1: {
                    '0%': { top: '0' },
                    '50%, 100%': { top: '100%' }
                },
                animateLoanding2: {
                    '0%': { left: '0' },
                    '50%, 100%': { left: '100%' }
                },
                animateLoanding3: {
                    '0%': { left: '100%' },
                    '50%, 100%': { left: '0' }
                },
                animateLoanding4: {
                    '0%': { top: '100%' },
                    '50%, 100%': { top: '0' }
                }
            },

            animation: {
                marquee: 'marquee 10s linear infinite',
                rotate: 'rotate 4s ease-out infinite',
                animateLoanding1: 'animateLoanding1 4s linear infinite',
                animateLoanding2: 'animateLoanding2 4s linear infinite',
                animateLoanding3: 'animateLoanding3 4s linear infinite',
                animateLoanding4: 'animateLoanding4 4s linear infinite'
            }
        }
    },
    plugins: [require('tailwind-scrollbar')]
};
export default config;
