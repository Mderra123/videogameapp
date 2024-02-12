const cardStyles = {
  Card: (colorMode: string) => {
    return {
      maxW: "sm",
      m: 5,
      bg: colorMode == "dark" ? "gray.800" : "gray.100",
    };
  },
  Image: {
    h: 32,
    w: "100%",
    borderTopRadius: "lg",
  },
  Icon: (colorMode: string) => {
    return {
      color: colorMode == "dark" ? "gray.500" : "black",
      boxSize: 5,
    };
  },
};

export default cardStyles;
