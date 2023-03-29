import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        palette: {
            background: string;
            secondary: string;
            pink: string;
            blue: string;
            yellow: string;
            white: string;
            gray: string;
        }
    }
}
