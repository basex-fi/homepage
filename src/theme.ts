import { extendTheme } from "@chakra-ui/react";

const themeConfig = {
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  components: {
    Button: {
      variants: {
        outline: {
          borderColor: "black",
        },
        primary: {
          bg: "#212224",
          color: "white",
          _hover: {
            bg: "#3c3e42",
          },
        },
      },
    },
  },
};

export const theme = extendTheme(themeConfig);
