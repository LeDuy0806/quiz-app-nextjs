import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    darkMode: 'class',
    theme: {
        extend: {
            textShadow: {
                textLeaderBoard:
                    '3px 1px 1px #4af7ff, 2px 2px 1px #165bfb, 4px 2px 1px #4af7ff, 3px 3px 1px #165bfb, 5px 3px 1px #4af7ff, 4px 4px 1px #165bfb, 6px 4px 1px #4af7ff, 5px 5px 1px #165bfb, 7px 5px 1px #4af7ff,6px 6px 1px #165bfb, 8px 6px 1px #4af7ff, 7px 7px 1px #165bfb, 9px 7px 1px #4af7ff',
                shadowTextResult:
                    '5px 5px 0px #FFB650, 10px 10px 0px  #FF80BF, 15px 15px 0px #EF5097'
            },
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
                'gradient-blue-loaing': 'linear-gradient(45deg, #c7eeff, #03a9f4)',
                bgListUser: 'linear-gradient(to bottom, #9ca2af, #7a99e7)',
                bgListOfUser: 'linear-gradient(to bottom, #9ca2af, #7a99e7)',
                bgButtonCloseGame: 'radial-gradient(100% 100% at 100% 0, #5adaff 0, #5468ff 100%)',
                bgButtonStartGame: 'linear-gradient(135deg, #f34079 40%, #fc894d)',
                bgTitle: 'linear-gradient(62deg, #8ec5fc 0%, #e0c3fc 100%)',
                bgMainLeaderBoard:
                    'linear-gradient(142deg,rgba(63, 161, 251, 1) 0%,rgba(252, 70, 168, 1) 100%)',
                bgUserItemLeaderBoardOne:
                    'linear-gradient(150deg,rgba(254,143,85,.42) 24%,rgba(185,53,53,.42) 91%);',
                bgUserItemLeaderBoardTwo:
                    'linear-gradient(-150deg,rgba(85,125,254,.549) 24%,rgba(101,53,185,.541) 91%);',
                // bgResultTitle:
                //     'linear-gradient(45deg,#ff0000, #ff7300,#fffb00,#48ff00,#00ffd5,#002bff,#7a00ff,#ff00c8,#ff0000);',
                bgButtonCheckResult:
                    'linear-gradient(109.6deg, rgb(255, 230, 109) 11.2%, rgb(87, 232, 107) 100.2%);',
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
                resultFont: ['Calligraffitti', 'cursive']
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
                bgAnswerCorrect: '#16FF00'
            },

            boxShadow: {
                white: '0 3px 2px rgba(20,45,82,.01)',
                purple: '0 4px 24px rgba(172,82,255,.7)',

                boxheaderfooter: 'inset -1px -1px #3c195c, inset 1px 1px #7d4dbc',
                boxWaiting: '0px 2px 20px #cfd8dc',
                boxListUser: '0 7px 30px rgba(62, 9, 11, 0.3)',
                boxButtonCloseGame:
                    'rgba(45, 35, 66, .4) 0 2px 4px,rgba(45, 35, 66, .3) 0 7px 13px -3px,rgba(58, 65, 111, .5) 0 -3px 0 inset',
                boxButtonCloseGameHover:
                    'rgba(45, 35, 66, .4) 0 4px 8px, rgba(45, 35, 66, .3) 0 7px 13px -3px, #3c4fe0 0 -3px 0 inset',

                boxButtonStartGame:
                    'rgba(45, 35, 66, .4) 0 2px 4px,rgba(244, 42, 26, 0.1), 0 7px 13px -3px,rgba(244, 42, 26, 0.22) 0 -3px 0 inset',
                boxButtonStartGameHover:
                    'rgba(45, 35, 66, .4) 0 4px 8px, rgba(244, 42, 26, 0.1)0 7px 13px -3px, #D80032 0 -3px 0 inset',
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
        require('tailwind-scrollbar'),
        plugin(function ({ matchUtilities, theme }: any) {
            matchUtilities(
                {
                    'text-shadow': (value: any) => ({
                        textShadow: value
                    })
                },
                { values: theme('textShadow') }
            );
        })
    ]
};
export default config;
