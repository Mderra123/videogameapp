import {
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuOptionGroup,
  MenuItemOption,
  SimpleGrid,
} from "@chakra-ui/react";
import { Genre } from "../../Utility/types/genre-types";

interface Props {
  genres: Genre[];
  onChangeGenre: (genre: Genre) => void;
}

function GenreMenu({ genres, onChangeGenre }: Props) {
  return (
    <Menu matchWidth={true}>
      <MenuButton as={Button}>Genres</MenuButton>
      <MenuList minWidth="240px" display={"flex"}>
        <MenuOptionGroup defaultValue="" title="Genres" type="radio">
          <SimpleGrid columns={{ base: 2, sm: 4 }} rowGap={2} columnGap={0}>
            <MenuItemOption value={""}>All</MenuItemOption>
            {genres.map((genre) => (
              <MenuItemOption
                key={genre.id}
                value={genre.name}
                onClick={() => {
                  onChangeGenre(genre);
                }}
              >
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
