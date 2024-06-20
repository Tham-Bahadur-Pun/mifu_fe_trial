import { Flex, Image, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <Flex
      justify="center"
      align="center"
      background="#fff"
      gap={4}
      height={90}
      width="100vw"
      boxShadow="md"
      position="fixed"
      zIndex="2"
    >
      <Image src="/images/breakaway_logo.png" alt="breakaway logo" />
      <Text fontWeight={900} fontSize="large">
        X
      </Text>
      <Image src="/images/mifu_logo.png" alt="breakaway logo" />
    </Flex>
  );
};

export default Header;
