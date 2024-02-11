import { Box, Flex } from "@chakra-ui/react";

function ProfileIcon() {
  return (
    <Flex justifyContent={"center"}>
      <Box
        bgImage="url('./images/UserIcon.png')"
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
        aspectRatio={1}
        borderRadius={10}
        h={"100%"}
      ></Box>
    </Flex>
  );
}

export default ProfileIcon;
