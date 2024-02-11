import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const theme: ThemeConfig = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false, // Enable automatic color mode based on system preferences
  },
  styles: {
    global: (props: any) => ({
      body: {
        bg: props.colorMode === "dark" ? "gray.900" : "gray.100", // Adjust background color
      },
    }),
  },
  colors: {
    gray: {
      50: "#f5f5f5",
      100: "#f0f0f0",
      200: "#ebebeb",
      300: "#d6d6d6",
      400: "#c2c2c2",
      500: "#a3a3a3",
      600: "#858585",
      700: "#5c5c5c",
      800: "#333333",
      900: "#141414",
    },
  },
});

export default theme;
