import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        palette: {
            background: string;
            secondaryBackground: string;
            secondary: string;
            pink: string;
            blue: string;
            mediumDarkBlue: string;
            yellow: string;
            white: string;
            gray: string;
            green: string;
            red: string;
        };
    }
}
