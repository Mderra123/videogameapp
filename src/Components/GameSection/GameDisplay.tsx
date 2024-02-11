import {
  Badge,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  Icon,
  Image,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { Game } from "../../Utility/types/sort-types";
import platformIcons from "../../Utility/maps/platformIcons";

interface Props {
  games: Game[];
  platform: string;
  order: { sort: string; order: string };
}

function GameDisplay({ games, platform, order }: Props) {
  const { colorMode } = useColorMode();
  const sortGames = (a: Game, b: Game) => {
    let sort = order.sort;
    let final: number;
    switch (sort) {
      case "date":
        final = a.released < b.released ? -1 : 1;
        break;
      case "name":
        final = a.name.localeCompare(b.name);
        break;
      case "relevance":
        final = b.metacritic - a.metacritic;
        break;
      default:
        final = b.metacritic - a.metacritic;
    }
    if (order.order == "a") {
      final *= -1;
    }
    return final;
  };
  const filterGames = (gm: Game) => {
    if (platform == "all") {
      return true;
    }
    let contains = false;
    for (let p of gm.parent_platforms) {
      if (p.platform.name.toLowerCase() == platform) {
        contains = true;
      }
    }
    return contains;
  };

  return (
    <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} spacingX={2} spacingY={2}>
      {games
        .filter((gm) => {
          return filterGames(gm);
        })
        .sort((a, b) => {
          return sortGames(a, b);
        })
        .map((game) => (
          <Card
            key={game.id}
            maxW="sm"
            m={5}
            bg={colorMode == "dark" ? "gray.800" : "gray.400"}
          >
            <CardHeader p={0}>
              <Image
                h={32}
                w={"100%"}
                src={game.background_image}
                alt={game.name + " " + game.description}
                borderTopRadius={"lg"}
              />
            </CardHeader>
            <CardBody>
              <Flex>
                <Flex gap={1}>
                  {game.parent_platforms.map((plat) => (
                    <Icon
                      key={plat.platform.name}
                      as={platformIcons[plat.platform.name.toLowerCase()]}
                      color={colorMode == "dark" ? "gray.600" : "black"}
                      boxSize={5}
                    ></Icon>
                  ))}
                </Flex>
                <Spacer />
                <Badge
                  colorScheme={
                    game.metacritic > 80
                      ? "green"
                      : game.metacritic > 70
                      ? "yellow"
                      : "red"
                  }
                  float={"inline-start"}
                >
                  {game.metacritic}
                </Badge>
              </Flex>
            </CardBody>
            <CardFooter>
              <Stack spacing="3">
                <Heading size="md">{game.name}</Heading>
                <Text>{game.description}</Text>
              </Stack>
            </CardFooter>
          </Card>
        ))}
    </SimpleGrid>
  );
}

export default GameDisplay;
