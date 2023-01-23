import { defineStyleConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const Text = defineStyleConfig({
  baseStyle: (props) => ({
    fontFamily: "body",
    lineHeight: "none",
    color: mode("neutral.700", "neutral.dark.100")(props),
    mt: "0px",
  }),

  variants: {
    primary: {
      color: "primary.300",
      _dark: {
        color: "primary.dark.200",
      },
    },
    title1: {
      color: "neutral.900",
      _dark: {
        color: "shades.100",
      },
    },
  },
});

export default Text;
