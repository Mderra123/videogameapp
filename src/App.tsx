import { Hide, SimpleGrid } from "@chakra-ui/react";
import GameSection from "./Components/GameSection/GameSection";
import Genres from "./Components/Genres/Genres";
import NavBar from "./Components/NavBar/NavBar";
import { useState, useEffect } from "react";
import GameService from "./Utility/services/game-services";
import { Game } from "./Utility/types/game-types";
import { Genre } from "./Utility/types/genre-types";
import { Platform } from "./Utility/types/sort-types";

function App() {
  const [games, setGames] = useState<Game[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [genres, setGenres] = useState<Genre[]>([]);
  const [genre, setGenre] = useState("All");
  const [platforms, setPlatforms] = useState<Platform[]>([]);
  const [platform, setPlatform] = useState("all");

  useEffect(() => {
    GameService.getGenres().then((res) => {
      setGenres(res.data.results);
    });
  }, []);

  useEffect(() => {
    GameService.getPlatforms().then((res) => {
      setPlatforms(res.data.results);
    });
  }, []);

  useEffect(() => {
    setLoading(true);
    GameService.getGames().then((res) => {
      setGames(res.data.results);
      setLoading(false);
    });
  }, []);

  const onChangeGenre = (genre: Genre) => {
    setGenre(genre.name);
    setLoading(true);
    GameService.getGames(genre.id == 0 ? {} : { genres: genre.id }).then(
      (res) => {
        setGames(res.data.results);
        setLoading(false);
      }
    );
  };

  const onChangePlatform = (platform: string) => {
    setPlatform(platform.toLowerCase());
  };

  return (
    <>
      <NavBar />
      <SimpleGrid gridTemplateColumns={{ base: "1fr", md: "1fr 3fr" }}>
        <Hide below="md">
          <Genres genres={genres} onChangeGenre={onChangeGenre} />
        </Hide>
        <GameSection
          onChangeGenre={onChangeGenre}
          setPlatform={onChangePlatform}
          platform={platform}
          platforms={platforms}
          genre={genre}
          genres={genres}
          games={games}
          isLoading={isLoading}
        ></GameSection>
      </SimpleGrid>
    </>
  );
}

export default App;
