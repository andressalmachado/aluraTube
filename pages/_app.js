import { ThemeProvider } from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import ColorModeProvider from "../src/components/Menu/components/ColorMode";
import RegisterVideo from "../src/components/RegisterVideo";

export default function MyApp({ Component, pageProps }) {
  const theme = {
    light: {
      backgroundBase: "#f9f9f9",
      backgroundLevel1: "#ffffff",
      backgroundLevel2: "#f0f0f0",
      borderBase: "#e5e5e5",
      textColorBase: "#222222",
    },
    dark: {
      backgroundBase: "#181818",
      backgroundLevel1: "#202020",
      backgroundLevel2: "#313131",
      borderBase: "#383838",
      textColorBase: "#FFFFFF",
    },
  };

  return (
    <ColorModeProvider>
      <ThemeProvider theme={theme.light}>
        <CSSReset />
        <Component {...pageProps} />
        <RegisterVideo />
      </ThemeProvider>
    </ColorModeProvider>
  );
}
