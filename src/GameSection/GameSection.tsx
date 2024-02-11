import { Container, Heading } from "@chakra-ui/react";
import Filters from "./Filter/Filters";
import GameDisplay from "./GameDisplay";
import GameSkeletons from "./GameSkeletons";
import { useState } from "react";
import { Game, Genre } from "../types";
import platformMap from "../maps/platformMap";

interface Props {
  games: Game[];
  isLoading: boolean;
  genre: string;
  genres: Genre[];
}

function GameSection({ games, isLoading, genre, genres }: Props) {
  const [platformFilter, setPlatformFilter] = useState("all");
  const [orderFilter, setOrderFilter] = useState({ sort: "", order: "" });

  const onFilterPlatform = (filter: string) => {
    setPlatformFilter(filter);
  };
  const onFilterOrder = (filter: { sort: string; order: string }) => {
    setOrderFilter(filter);
  };

  const platformDisplay = platformMap[platformFilter];

  return (
    <Container maxW={"5xl"}>
      <Heading as="h2" size="2xl" my={{ base: 4, sm: 6, lg: 8 }}>
        {platformDisplay} {genre} Games
      </Heading>
      <Filters
        genres={genres}
        onFilterOrder={onFilterOrder}
        onFilterPlatform={onFilterPlatform}
      />
      {isLoading ? (
        <GameSkeletons />
      ) : (
        <GameDisplay
          games={games}
          platform={platformFilter}
          order={orderFilter}
        ></GameDisplay>
      )}
    </Container>
  );
}

export default GameSection;
