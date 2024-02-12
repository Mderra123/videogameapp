const sortStyles = {
  all: (colorMode: string) => {
    return {
      bg: colorMode == "dark" ? "whiteAlpha.200" : "white",
    };
  },
};

export default sortStyles;
