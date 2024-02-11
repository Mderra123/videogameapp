import { Box, Flex, Heading, Stack, useColorMode } from "@chakra-ui/react";
import { Genre } from "../types";
import { useState } from "react";

interface Props {
  genres: Genre[];
  onChangeGenre: (genre: Genre) => void;
}

function Genres({ genres, onChangeGenre }: Props) {
  const { colorMode } = useColorMode();
  const [selectedGenreId, setSelectedGenreId] = useState(0);

  const handleClick = (genre: Genre) => {
    onChangeGenre(genre);
    setSelectedGenreId(genre.id);
  };

  return (
    <Flex flexDirection={"column"} pl={10}>
      <Heading size="lg" my={8} mx={16} fontWeight={600}>
        Genres
      </Heading>
      <Stack mx={16} spacing={2}>
        <Flex
          alignItems={"center"}
          gap={5}
          borderRadius={5}
          _hover={{
            bg: "whiteAlpha.200",
            cursor: "pointer",
          }}
          bg={selectedGenreId == 0 ? "whiteAlpha.200" : ""}
          overflow={"hidden"}
          onClick={() => {
            handleClick({ id: 0, name: "All", image_background: "" });
          }}
        >
          <Box
            w={{ base: 8, sm: 10, lg: 12 }}
            bg={colorMode == "dark" ? "whiteAlpha.200" : "blackAlpha.200"}
            borderRadius={5}
            aspectRatio={1}
          />
          <Heading as="h4" size={"md"} fontWeight={400}>
            All
          </Heading>
        </Flex>
        {genres.map((genre) => (
          <Flex
            alignItems={"center"}
            gap={5}
            key={genre.id}
            borderRadius={5}
            _hover={{
              bg: "whiteAlpha.200",
              cursor: "pointer",
            }}
            bg={selectedGenreId == genre.id ? "whiteAlpha.200" : ""}
            overflow={"hidden"}
            onClick={() => {
              handleClick(genre);
            }}
          >
            <Box
              w={{ base: 8, sm: 10, lg: 12 }}
              borderRadius={5}
              aspectRatio={1}
              backgroundImage={`url(${genre.image_background})`}
              backgroundSize="cover"
              backgroundPosition="center"
            />
            <Heading as="h4" size={"md"} fontWeight={400}>
              {genre.name}
            </Heading>
          </Flex>
        ))}
      </Stack>
    </Flex>
  );
}

export default Genres;
