import { Box } from "@chakra-ui/react";
import PlatformFilter from "./PlatformFilter";
import SortFilter from "./SortFilter";
import { Platform } from "../../Utility/types/sort-types";
import { Genre } from "../../Utility/types/genre-types";
import FilterMenu from "./FilterMenu";
import GenreMenu from "../Genres/GenreMenu";

interface Props {
  onFilterPlatform: (platform: string) => void;
  onFilterOrder: (filter: { sort: string; order: string }) => void;
  onChangeGenre: (genre: Genre) => void;
  genres: Genre[];
  platforms: Platform[];
}

function Filters({
  onFilterOrder,
  onFilterPlatform,
  onChangeGenre,
  genres,
  platforms,
}: Props) {
  return (
    <>
      <Box
        display={{ base: "none", md: "grid" }}
        gridTemplateColumns={"1fr 1fr"}
      >
        <PlatformFilter
          onFilter={onFilterPlatform}
          platforms={platforms}
        ></PlatformFilter>
        <SortFilter onFilter={onFilterOrder}></SortFilter>
      </Box>
      <Box
        display={{ base: "flex", md: "none" }}
        flexDirection={"column"}
        gap={2}
      >
        <FilterMenu
          platforms={platforms}
          onFilterPlatform={onFilterPlatform}
          onFilterOrder={onFilterOrder}
        />
        <GenreMenu onChangeGenre={onChangeGenre} genres={genres} />
      </Box>
    </>
  );
}

export default Filters;
