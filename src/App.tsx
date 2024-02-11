import { Hide, SimpleGrid } from "@chakra-ui/react";
import GameSection from "./GameSection/GameSection";
import Genres from "./Genres/Genres";
import NavBar from "./NavBar/NavBar";
import { useState, useEffect } from "react";
import GameService from "./services/game-services";
import { Game, Genre } from "./types";

function App() {
  const [games, setGames] = useState<Game[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [genres, setGenres] = useState<Genre[]>([]);
  const [genre, setGenre] = useState("All");

  useEffect(() => {
    GameService.getGenres().then((res) => {
      setGenres(res.data.results);
    });
  }, []);

  useEffect(() => {
    setLoading(true);
    GameService.getGames().then((res) => {
      setGames(res.data.results);
      console.log(res.data.results);
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

  return (
    <>
      <NavBar />
      <SimpleGrid gridTemplateColumns={{ base: "1fr", md: "1fr 3fr" }}>
        <Hide below="md">
          <Genres genres={genres} onChangeGenre={onChangeGenre} />
        </Hide>
        <GameSection
          genres={genres}
          games={games}
          isLoading={isLoading}
          genre={genre}
        ></GameSection>
      </SimpleGrid>
    </>
  );
}

export default App;
