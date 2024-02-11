import { Box } from "@chakra-ui/react";
import PlatformFilter from "./PlatformFilter";
import SortFilter from "./SortFilter";
import { Genre } from "../../types";
import FilterMenu from "./FilterMenu";
import GenreMenu from "../../Genres/GenreMenu";

interface Props {
  onFilterPlatform: (filter: string) => void;
  onFilterOrder: (filter: { sort: string; order: string }) => void;
  genres: Genre[];
}

function Filters({ onFilterOrder, onFilterPlatform, genres }: Props) {
  return (
    <>
      <Box
        display={{ base: "none", md: "grid" }}
        gridTemplateColumns={"1fr 1fr"}
      >
        <PlatformFilter onFilter={onFilterPlatform}></PlatformFilter>
        <SortFilter onFilter={onFilterOrder}></SortFilter>
      </Box>
      <Box
        display={{ base: "flex", md: "none" }}
        flexDirection={"column"}
        gap={2}
      >
        <FilterMenu
          onFilterPlatform={onFilterPlatform}
          onFilterOrder={onFilterOrder}
        />
        <GenreMenu genres={genres} />
      </Box>
    </>
  );
}

export default Filters;
