import { Container, Heading } from "@chakra-ui/react";
import Filters from "../Filter/Filters";
import GameDisplay from "./GameDisplay";
import GameSkeletons from "./GameSkeletons";
import { useState } from "react";
import { Game } from "../../Utility/types/game-types";
import { Genre } from "../../Utility/types/genre-types";
import platformMap from "../../Utility/maps/platformMap";
import { Platform } from "../../Utility/types/sort-types";

interface Props {
  games: Game[];
  isLoading: boolean;
  genre: string;
  genres: Genre[];
  platform: string;
  platforms: Platform[];
  setPlatform: (platform: string) => void;
}

function GameSection({
  games,
  isLoading,
  genre,
  genres,
  platform,
  platforms,
  setPlatform,
}: Props) {
  const [orderFilter, setOrderFilter] = useState({ sort: "", order: "" });
  const onFilterOrder = (filter: { sort: string; order: string }) => {
    setOrderFilter(filter);
  };

  const platformDisplay = platformMap[platform];

  return (
    <Container maxW={"5xl"}>
      <Heading as="h2" size="2xl" my={{ base: 4, sm: 6, lg: 8 }}>
        {platformDisplay} {genre} Games
      </Heading>
      <Filters
        genres={genres}
        platforms={platforms}
        onFilterOrder={onFilterOrder}
        onFilterPlatform={setPlatform}
      />
      {isLoading ? (
        <GameSkeletons />
      ) : (
        <GameDisplay
          games={games}
          platform={platform}
          order={orderFilter}
        ></GameDisplay>
      )}
    </Container>
  );
}

export default GameSection;
