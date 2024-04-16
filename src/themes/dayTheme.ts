import { extendTheme } from "native-base";

export const dayTheme = extendTheme({
    colors: {
        white: '#FFFFFF',
        green:  {
            500: '#4ADE80',
            600: '#378152'
        },
        gray: {
            100: '#EDEDED',
            200: '#A0A0A0',
            300: '#7E7E7E',
            400: '#505050',
            600: '#282828',
            700: '#232323',
            800: '#1C1C1C',
        }
    },
    fontSizes: {
        sm: 14,
        md: 16,
        lg: 20,
        xl: 28,
        xxl: 36
    },
    fonts: {
        heading: 'Inter_700Bold',
        body: 'Inter_400Regular',
        black: 'Inter_900Black'
    }
})