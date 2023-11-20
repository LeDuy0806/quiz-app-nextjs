import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
    content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
    darkMode: 'class',
    theme: {
        extend: {
            spacing: {
                26: '6.5rem',
                30: '7.5rem'
            },
            textShadow: {
                textLeaderBoard:
                    '3px 1px 1px #4af7ff, 2px 2px 1px #165bfb, 4px 2px 1px #4af7ff, 3px 3px 1px #165bfb, 5px 3px 1px #4af7ff, 4px 4px 1px #165bfb, 6px 4px 1px #4af7ff, 5px 5px 1px #165bfb, 7px 5px 1px #4af7ff,6px 6px 1px #165bfb, 8px 6px 1px #4af7ff, 7px 7px 1px #165bfb, 9px 7px 1px #4af7ff',
                shadowTextResult: '5px 5px 0px #FFB650, 10px 10px 0px  #FF80BF, 15px 15px 0px #EF5097'
            },
            screens: {
                xs: '320px',
                sm: '415px',
                sml: '500px',
                md: '667px',
                mdl: '769px',
                lg: '960px',
                lgl: '1025px',
                xl: '1280px'
            },

            backgroundImage: {
                'gradient-white': 'linear-gradient(270deg,#f2f2f2 0%,rgba(242,242,242,0) 100%)',
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'gradient-purple': 'linear-gradient(135deg,#9a7bff,#de7cff 47%,#ffc37e)',
                'gradient-primary': 'linear-gradient(135deg,rgba(180,157,255,0) 11%,#b49dff 26%,#e4a7f9 45%,#ffd9ae 72%,rgba(255,217,174,0) 89%);',
                'gradient-middlefooter': 'linear-gradient(135deg,#7d4dbc 12%,#5e4282 13%,#8460af 44%,#c594ff 50%,#2a1141 90%,#3c195c 97%)',
                'gradient-bgmiddlefooter':
                    'linear-gradient(#091a34,rgba(9,26,52,0)),url(https://global-uploads.webflow.com/6418f5b…/6498eac…_Ellipse%20blur.webp)',
                'gradient-titleheaderfooter': 'linear-gradient(135deg,#9a7bff,#de7cff 47%,#ffc37e)',
                'gradient-footerIntro': 'linear-gradient(135deg,rgba(180,157,255,0) 11%,#b49dff 26%,#e4a7f9 45%,#ffd9ae 72%,rgba(255,217,174,0) 89%);',
                'gradient-model': 'linear-gradient(112.1deg, rgba(32, 38, 57,0.06) 11.4%, rgba(63, 76, 119,02) 70.2%);',
                'gradient-blue-loaing': 'linear-gradient(45deg, #c7eeff, #03a9f4)',
                bgListUser: 'linear-gradient(to bottom, #9ca2af, #7a99e7)',
                bgListOfUser: 'linear-gradient(to bottom, #9ca2af, #7a99e7)',
                bgButtonCloseGame: 'radial-gradient(100% 100% at 100% 0, #5adaff 0, #5468ff 100%)',
                bgButtonStartGame: 'linear-gradient(135deg, #f34079 40%, #fc894d)',
                bgTitle: 'linear-gradient(62deg, #8ec5fc 0%, #e0c3fc 100%)',
                bgMainLeaderBoard: 'linear-gradient(142deg,rgba(63, 161, 251, 1) 0%,rgba(252, 70, 168, 1) 100%)',
                bgUserItemLeaderBoardOne: 'linear-gradient(150deg,rgba(254,143,85,.42) 24%,rgba(185,53,53,.42) 91%);',
                bgUserItemLeaderBoardTwo: 'linear-gradient(-150deg,rgba(85,125,254,.549) 24%,rgba(101,53,185,.541) 91%);',
                // bgResultTitle:
                //     'linear-gradient(45deg,#ff0000, #ff7300,#fffb00,#48ff00,#00ffd5,#002bff,#7a00ff,#ff00c8,#ff0000);',
                bgButtonCheckResult: 'linear-gradient(109.6deg, rgb(255, 230, 109) 11.2%, rgb(87, 232, 107) 100.2%);',
                bgResultTitle: 'linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB)'
            },

            maxWidth: {
                container: '1440px',
                contentContainer: '1260px',
                containerSmall: '1024px',
                containerxs: '768px'
            },

            fontFamily: {
                bodyFont: ['Montserrat', 'sans-serif'],
                titleFont: ['Inter', 'sans-serif'],
                joinFont: ['Lilita One', 'sans-serif'],
                leaderBoardFont: ['Exo 2', 'sans-serif'],
                resultFont: ['Calligraffitti', 'cursive'],
                poppins: ['Poppins', 'sans-serif'],
                dm: ['DM Sans', 'sans-serif']
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
                textBrown: 'rgb(35, 34, 34)',
                textSweet: '#fde9ff',
                textResult: '#F9f1cc',
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
                bgModel: 'rgba(105,105,105, 0.6)',
                bgWaiting: '#3a4f7a',
                bgUser: '#fbeee0',
                bgBorderUser: '#422800',
                bgPurpleLight: '#D0BFFF',
                bgQuestion: 'rgba(223, 215, 230, 0.8)',
                bgBorderQuestion: 'rgba(105,105,105, 0.4)',
                bgResultTitle: '#6868AC',
                bgAnswerIncorrect: '#ff0000',
                bgAnswerCorrect: '#16FF00',
                bgBorderError: '#D80032',
                bgPoint: '#FFACAC',
                lightPrimary: '#F4F7FE',
                blueSecondary: '#4318FF',
                brandLinear: '#868CFF',
                // gray: {
                //     50: '#F5F6FA',
                //     100: '#EEF0F6',
                //     200: '#DADEEC',
                //     300: '#C9D0E3',
                //     400: '#B0BBD5',
                //     500: '#B5BED9',
                //     600: '#A3AED0',
                //     700: '#707eae',
                //     800: '#2D396B',
                //     900: '#1B2559'
                // },
                navy: {
                    50: '#d0dcfb',
                    100: '#aac0fe',
                    200: '#a3b9f8',
                    300: '#728fea',
                    400: '#3652ba',
                    500: '#1b3bbb',
                    600: '#24388a',
                    700: '#1B254B',
                    800: '#111c44',
                    900: '#0b1437'
                },
                red: {
                    50: '#ee5d501a',
                    100: '#fee2e2',
                    200: '#fecaca',
                    300: '#fca5a5',
                    400: '#f87171',
                    500: '#f53939',
                    600: '#ea0606',
                    700: '#b91c1c',
                    800: '#991b1b',
                    900: '#7f1d1d'
                },
                orange: {
                    50: '#fff7ed',
                    100: '#ffedd5',
                    200: '#fed7aa',
                    300: '#fdba74',
                    400: '#fb923c',
                    500: '#f97316',
                    600: '#ea580c',
                    700: '#c2410c',
                    800: '#9a3412',
                    900: '#7c2d12'
                },
                amber: {
                    50: '#fffbeb',
                    100: '#fef3c7',
                    200: '#fde68a',
                    300: '#fcd34d',
                    400: '#fbbf24',
                    500: '#f59e0b',
                    600: '#d97706',
                    700: '#b45309',
                    800: '#92400e',
                    900: '#78350f'
                },
                yellow: {
                    50: '#fefce8',
                    100: '#fef9c3',
                    200: '#fef08a',
                    300: '#fde047',
                    400: '#fbcf33',
                    500: '#eab308',
                    600: '#ca8a04',
                    700: '#a16207',
                    800: '#854d0e',
                    900: '#713f12'
                },
                lime: {
                    50: '#f7fee7',
                    100: '#ecfccb',
                    200: '#d9f99d',
                    300: '#bef264',
                    400: '#98ec2d',
                    500: '#82d616',
                    600: '#65a30d',
                    700: '#4d7c0f',
                    800: '#3f6212',
                    900: '#365314'
                },
                green: {
                    50: '#05cd991a',
                    100: '#dcfce7',
                    200: '#bbf7d0',
                    300: '#86efac',
                    400: '#4ade80',
                    500: '#22c55e',
                    600: '#17ad37',
                    700: '#15803d',
                    800: '#166534',
                    900: '#14532d'
                },
                teal: {
                    50: '#f0fdfa',
                    100: '#ccfbf1',
                    200: '#99f6e4',
                    300: '#5eead4',
                    400: '#2dd4bf',
                    500: '#14b8a6',
                    600: '#0d9488',
                    700: '#0f766e',
                    800: '#115e59',
                    900: '#134e4a'
                },
                cyan: {
                    50: '#ecfeff',
                    100: '#cffafe',
                    200: '#a5f3fc',
                    300: '#67e8f9',
                    400: '#21d4fd',
                    500: '#17c1e8',
                    600: '#0891b2',
                    700: '#0e7490',
                    800: '#155e75',
                    900: '#164e63'
                },
                blue: {
                    50: '#eff6ff',
                    100: '#dbeafe',
                    200: '#bfdbfe',
                    300: '#93c5fd',
                    400: '#60a5fa',
                    500: '#3b82f6',
                    600: '#2152ff',
                    700: '#1d4ed8',
                    800: '#344e86',
                    900: '#00007d'
                },
                indigo: {
                    50: '#eef2ff',
                    100: '#e0e7ff',
                    200: '#c7d2fe',
                    300: '#a5b4fc',
                    400: '#818cf8',
                    500: '#6366f1',
                    600: '#4f46e5',
                    700: '#4338ca',
                    800: '#3730a3',
                    900: '#312e81'
                },
                purple: {
                    50: '#faf5ff',
                    100: '#f3e8ff',
                    200: '#e9d5ff',
                    300: '#d8b4fe',
                    400: '#c084fc',
                    500: '#a855f7',
                    600: '#9333ea',
                    700: '#7928ca',
                    800: '#6b21a8',
                    900: '#581c87'
                },
                pink: {
                    50: '#fdf2f8',
                    100: '#fce7f3',
                    200: '#fbcfe8',
                    300: '#f9a8d4',
                    400: '#f472b6',
                    500: '#ff0080',
                    600: '#db2777',
                    700: '#be185d',
                    800: '#9d174d',
                    900: '#831843'
                },
                background: {
                    100: 'rgb(244 247 254)',
                    900: '#070f2e'
                },
                brand: {
                    50: '#E9E3FF',
                    100: '#C0B8FE',
                    200: '#A195FD',
                    300: '#8171FC',
                    400: '#7551FF',
                    500: '#422AFB',
                    600: '#3311DB',
                    700: '#2111A5',
                    800: '#190793',
                    900: '#11047A'
                },
                horizonGreen: {
                    50: '#E1FFF4',
                    100: '#BDFFE7',
                    200: '#7BFECE',
                    300: '#39FEB6',
                    400: '#01F99E',
                    500: '#01B574',
                    600: '#01935D',
                    700: '#016B44',
                    800: '#00472D',
                    900: '#002417'
                },
                horizonOrange: {
                    50: '#FFF7EB',
                    100: '#FFF1DB',
                    200: '#FFE2B8',
                    300: '#FFD28F',
                    400: '#FFC46B',
                    500: '#FFB547',
                    600: '#FF9B05',
                    700: '#C27400',
                    800: '#855000',
                    900: '#422800',
                    950: '#1F1200'
                },
                horizonRed: {
                    50: '#FCE8E8',
                    100: '#FAD1D1',
                    200: '#F4A4A4',
                    300: '#EF7676',
                    400: '#EA4848',
                    500: '#E31A1A',
                    600: '#B71515',
                    700: '#891010',
                    800: '#5B0B0B',
                    900: '#2E0505',
                    950: '#170303'
                },
                horizonBlue: {
                    50: '#EBEFFF',
                    100: '#D6DFFF',
                    200: '#ADBFFF',
                    300: '#8AA3FF',
                    400: '#6183FF',
                    500: '#3965FF',
                    600: '#0036FA',
                    700: '#0029BD',
                    800: '#001B7A',
                    900: '#000D3D',
                    950: '#00071F'
                },
                horizonTeal: {
                    50: '#EBFAF8',
                    100: '#D7F4F2',
                    200: '#AAE9E4',
                    300: '#82DED6',
                    400: '#59D4C9',
                    500: '#33C3B7',
                    600: '#299E94',
                    700: '#1F756E',
                    800: '#144D48',
                    900: '#0B2826',
                    950: '#051413'
                },
                horizonPurple: {
                    50: '#EFEBFF',
                    100: '#E9E3FF',
                    200: '#422AFB',
                    300: '#422AFB',
                    400: '#7551FF',
                    500: '#422AFB',
                    600: '#3311DB',
                    700: '#02044A',
                    800: '#190793',
                    900: '#11047A'
                }
            },

            boxShadow: {
                white: '0 3px 2px rgba(20,45,82,.01)',
                purple: '0 4px 24px rgba(172,82,255,.7)',

                boxheaderfooter: 'inset -1px -1px #3c195c, inset 1px 1px #7d4dbc',
                boxWaiting: '0px 2px 20px #cfd8dc',
                boxListUser: '0 7px 30px rgba(62, 9, 11, 0.3)',
                boxButtonCloseGame: 'rgba(45, 35, 66, .4) 0 2px 4px,rgba(45, 35, 66, .3) 0 7px 13px -3px,rgba(58, 65, 111, .5) 0 -3px 0 inset',
                boxButtonCloseGameHover: 'rgba(45, 35, 66, .4) 0 4px 8px, rgba(45, 35, 66, .3) 0 7px 13px -3px, #3c4fe0 0 -3px 0 inset',

                boxButtonStartGame: 'rgba(45, 35, 66, .4) 0 2px 4px,rgba(244, 42, 26, 0.1), 0 7px 13px -3px,rgba(244, 42, 26, 0.22) 0 -3px 0 inset',
                boxButtonStartGameHover: 'rgba(45, 35, 66, .4) 0 4px 8px, rgba(244, 42, 26, 0.1)0 7px 13px -3px, #D80032 0 -3px 0 inset',
                boxButtonCheckResult: 'rgba(245, 247, 16, 0.8) 0 2px 4px',
                boxUser: '#422800 3px 5px 0 0',
                boxTitleLeaderBoard:
                    '#0c131f 1px 1px 0px 0px ,#0c131f 2px 2px 0px 0px,#0c131f 3px 3px 0px 0px,#0c131f 4px 4px 0px 0px, #0c131f 5px 5px 0px 0px',
                boxResultTitle: ' rgba(151, 65, 252, 0.2) 0 15px 30px -5px;'
            },

            // dropShadow: {
            //     textLeaderBoard:
            //         '3px 1px 1px #4af7ff, 2px 2px 1px #165bfb, 4px 2px 1px #4af7ff, 3px 3px 1px #165bfb, 5px 3px 1px #4af7ff, 4px 4px 1px #165bfb, 6px 4px 1px #4af7ff, 5px 5px 1px #165bfb, 7px 5px 1px #4af7ff,6px 6px 1px #165bfb, 8px 6px 1px #4af7ff, 7px 7px 1px #165bfb, 9px 7px 1px #4af7ff',
            //     shadowTextResult:
            //         '5px 5px 0px #FFB650, 10px 10px 0px #FFD662, 15px 15px 0px  #FF80BF, 20px 20px 0px #EF5097,25px 25px 0px #6868AC, 30px 30px 0px #90B1E0;'
            // },

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
    plugins: [
        require('tailwind-scrollbar')({ nocompatible: true }),
        plugin(function ({ matchUtilities, theme }: any) {
            matchUtilities(
                {
                    'text-shadow': (value: any) => ({
                        textShadow: value
                    })
                },
                { values: theme('textShadow') }
            );
        }),
        plugin(function ({ addComponents, theme }) {})
    ]
};
export default config;
