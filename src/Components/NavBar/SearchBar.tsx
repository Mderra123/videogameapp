import { SearchIcon } from "@chakra-ui/icons";
import {
  InputGroup,
  InputLeftElement,
  Input,
  Flex,
  useColorMode,
} from "@chakra-ui/react";

function SearchBar() {
  const { colorMode } = useColorMode();
  return (
    <Flex alignItems={"center"} justifyContent={"center"}>
      <InputGroup w={{ base: "80%", sm: "85%", lg: "90%" }}>
        <InputLeftElement pointerEvents="none">
          <SearchIcon color={colorMode == "dark" ? "white" : "black"} />
        </InputLeftElement>
        <Input
          type="text"
          placeholder="Search"
          bg={colorMode == "dark" ? "whiteAlpha.200" : "blackAlpha.300"}
          _placeholder={
            colorMode == "dark"
              ? {
                  color: "white",
                }
              : { color: "black" }
          }
          focusBorderColor={"transparent"}
          border={"none"}
          _focus={{
            boxShadow: `0px 0px 5px ${
              colorMode == "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.2)"
            }`,
          }}
        />
      </InputGroup>
    </Flex>
  );
}

export default SearchBar;
