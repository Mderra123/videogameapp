import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Flex, Switch, useColorMode } from "@chakra-ui/react";

function Darkmode() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      h={"100%"}
      w={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={{ base: 2, lg: 6 }}
    >
      {colorMode == "dark" ? (
        <MoonIcon boxSize={{ base: 5, sm: 6 }} />
      ) : (
        <SunIcon boxSize={{ base: 5, sm: 6 }} />
      )}
      <Switch
        onChange={() => {
          toggleColorMode();
        }}
      />
    </Flex>
  );
}

export default Darkmode;
