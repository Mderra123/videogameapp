import {
  Badge,
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  Icon,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import platformIcons from "../maps/platformIcons";

function GameSkeletons() {
  const games = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} spacingX={2} spacingY={2}>
      {games.map((game) => (
        <Card key={game} maxW="sm" m={5} bg={"gray.800"}>
          <CardHeader p={0}>
            <Box w={"100%"} h={32}></Box>
          </CardHeader>
          <CardBody>
            <Flex>
              <Stack direction="row">
                {["PC", "PlayStation", "Xbox", "Apple Macintosh"].map(
                  (icon) => (
                    <Icon
                      key={icon}
                      color="gray.600"
                      as={platformIcons[icon.toLowerCase()]}
                    ></Icon>
                  )
                )}
              </Stack>
              <Spacer />
              <Badge color="gray.500">0</Badge>
            </Flex>
          </CardBody>
          <CardFooter>
            <Stack spacing="3">
              <Heading size="md" color={"gray.500"}>
                . . .
              </Heading>
              <Text> </Text>
            </Stack>
          </CardFooter>
        </Card>
      ))}
    </SimpleGrid>
  );
}

export default GameSkeletons;
