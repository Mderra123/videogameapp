import {
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuOptionGroup,
  MenuItemOption,
  SimpleGrid,
} from "@chakra-ui/react";
import { Genre } from "../types";

interface Props {
  genres: Genre[];
}

function GenreMenu({ genres }: Props) {
  return (
    <Menu matchWidth={true}>
      <MenuButton as={Button}>Genres</MenuButton>
      <MenuList minWidth="240px" display={"flex"}>
        <MenuOptionGroup defaultValue="" title="Genres" type="radio">
          <SimpleGrid columns={{ base: 2, sm: 4 }} rowGap={2} columnGap={0}>
            <MenuItemOption value={""}>All</MenuItemOption>
            {genres.map((genre) => (
              <MenuItemOption key={genre.id} value={genre.name}>
                {genre.name}
              </MenuItemOption>
            ))}
          </SimpleGrid>
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
}

export default GenreMenu;
