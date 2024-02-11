import { SimpleGrid } from "@chakra-ui/react";
import Darkmode from "./Darkmode";
import ProfileIcon from "./ProfileIcon";
import SearchBar from "./SearchBar";

function NavBar() {
  return (
    <SimpleGrid
      gridTemplateColumns={{ base: "1fr 6fr 1fr", lg: "1fr 8fr 1fr" }}
      h={{ base: 10, sm: 12, lg: 16 }}
      my={10}
      px={{ base: 4, sm: 6, lg: 10 }}
    >
      <ProfileIcon />
      <SearchBar />
      <Darkmode />
    </SimpleGrid>
  );
}

export default NavBar;
