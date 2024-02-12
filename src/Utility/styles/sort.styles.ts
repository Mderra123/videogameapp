const sortStyles = {
  all: (colorMode: string) => {
    return {
      bg: colorMode == "dark" ? "whiteAlpha.200" : "white",
    };
  },
  options: (colorMode: string) => {
    return {
      bg: "white",
    };
  },
};

export default sortStyles;
