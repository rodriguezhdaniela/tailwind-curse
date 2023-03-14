module.exports = {
    theme: {
        extend: {
            screens: {
                'xs': {'max': '768px'}
            },
            backgroundImage: theme => ({
                'body-pattern': "url('../img/pattern.png')",
                'banner': "url('../img/bakbaner.png')"
            }),
            backgroundPosition: {
                'banner-position': "-200px -200px"
            },
            colors: {
                "azul-claro": "#37bcf9",
                "azul-oscuro": "#0370b9"
            },
            animation: {
                'spin-low': 'spin 2s linear infinite',
                'from-bellow': 'fromBellow 500ms linear',
                'from-right': 'fromRight 300ms linear',
                'bg-banner': 'backBanner 10s linear'
            },
            keyframes: {
                fromBellow: {
                    '0%': { transform: 'translateY(0%)'},
                    '50%': { transform: 'translateY(200%)'},
                    '100%': { transform: 'translateY(0%)'}
                },
                fromRight: {
                    '0%': { transform: 'translateX(200%)'},
                    '100%': {transform: 'translateX(0%)'}
                },
                backBanner: {
                    '0%': { 'background-position': '0px 0px'},
                    '100%': {'background-position': '-200px -200px'}
                }
            }
        }
    },
    variants: {
        animation: [ 'responsive', 'hover','group-hover'],
        animate: ['responsive', 'hover', 'group-hover'],
    }
}