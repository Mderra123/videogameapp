import {
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuOptionGroup,
  MenuItemOption,
  MenuDivider,
  SimpleGrid,
} from "@chakra-ui/react";
import { Platforms, SortTypes } from "../../types";
import { useEffect, useState } from "react";

interface Props {
  onFilterPlatform: (filter: string) => void;
  onFilterOrder: (filter: { sort: string; order: string }) => void;
}

function FilterMenu({ onFilterOrder, onFilterPlatform }: Props) {
  const [sort, setSort] = useState({
    sort: "relevance",
    order: "d",
  });

  useEffect(() => {
    onFilterOrder(sort);
  }, [sort]);
  return (
    <Menu closeOnSelect={false} matchWidth={true}>
      <MenuButton as={Button}>Filters</MenuButton>
      <MenuList minWidth="240px" display={"flex"} justifyContent={"center"}>
        <MenuOptionGroup
          defaultValue="all"
          title="Platform"
          type="radio"
          display={"flex"}
          justifyContent={{ base: "", sm: "center" }}
          onChange={(e) => {
            onFilterPlatform(e as string);
          }}
        >
          <SimpleGrid columns={{ base: 1, sm: 2 }} columnGap={0}>
            <MenuItemOption value={"all"} closeOnSelect={true}>
              All
            </MenuItemOption>
            {Platforms.map((plat) => (
              <MenuItemOption
                key={plat}
                value={plat.toLowerCase()}
                closeOnSelect={true}
              >
                {plat}
              </MenuItemOption>
            ))}
          </SimpleGrid>
        </MenuOptionGroup>
        <MenuDivider />
        <SimpleGrid>
          <MenuOptionGroup
            defaultValue="d"
            title="Order"
            type="radio"
            onChange={(e) => {
              setSort({ ...sort, order: e as string });
            }}
          >
            <MenuItemOption value="a">Ascending</MenuItemOption>
            <MenuItemOption value="d">Descending</MenuItemOption>
          </MenuOptionGroup>
          <MenuOptionGroup
            defaultValue="Name"
            title="Sort"
            type="radio"
            onChange={(e) => {
              setSort({ ...sort, sort: e as string });
            }}
          >
            {SortTypes.map((type) => (
              <MenuItemOption key={type} value={type.toLowerCase()}>
                {type}
                {type == "Relevance" && " (Default)"}
              </MenuItemOption>
            ))}
          </MenuOptionGroup>
        </SimpleGrid>
      </MenuList>
    </Menu>
  );
}

export default FilterMenu;
