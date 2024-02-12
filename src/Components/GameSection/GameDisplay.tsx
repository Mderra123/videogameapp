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
import { Game } from "../../Utility/types/game-types";
import platformIcons from "../../Utility/maps/platformIcons";
import cardStyles from "../../Utility/styles/card-styles";

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
    for (let parentPlatform of gm.parent_platforms) {
      if (parentPlatform.platform.name.toLowerCase() == platform) {
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
          <Card key={game.id} {...cardStyles.Card(colorMode)}>
            <CardHeader p={0}>
              <Image
                {...cardStyles.Image}
                src={game.background_image}
                alt={game.name + " " + game.description}
              />
            </CardHeader>
            <CardBody>
              <Flex>
                <Flex gap={1}>
                  {game.parent_platforms.map((plat) => (
                    <Icon
                      key={plat.platform.id}
                      as={platformIcons[plat.platform.name.toLowerCase()]}
                      {...cardStyles.Icon(colorMode)}
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
