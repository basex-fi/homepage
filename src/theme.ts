import { extendTheme } from "@chakra-ui/react";

const themeConfig = {
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: "xl",
        _focus: {
          boxShadow: "none",
        },
      },
      variants: {
        outline: {
          borderColor: "#0049ff",
          color: "#0049ff",
        },
        primary: {
          bg: "#0049ff",
          color: "white",
          _hover: {
            bg: "#4176fb",
          },
        },
      },
    },
  },
};

export const theme = extendTheme(themeConfig);
