import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Form from "./Form";
import Header from "./Header";

export default function Home() {
  return (
    <main className="styles.main">
      <Header />
      <Box pt="90" pb="20">
        <Flex
          justifyContent="center"
          alignItems="center"
          direction="column"
          gap={4}
          mt="20"
        >
          <Box textAlign="center" mb="10">
            <Heading as="h1" size="3xl" fontWeight="bold">
              Become an Infuencer For
            </Heading>
            <Heading as="h1" size="3xl" fontWeight="bold">
              Breakaway x Mifu
            </Heading>
          </Box>
          <Text
            align="center"
            fontWeight="500"
            fontSize="20"
            lineHeight="tall"
            letterSpacing="0.5px"
          >
            Whether you&apos;re the person with the most likes or followers on
            campus, or a hard-worker <br /> looking to build your network and
            gain marketing experience, we want to HEAR from you.
          </Text>
          <Text
            align="center"
            fontWeight="500"
            fontSize="20"
            lineHeight="tall"
            letterSpacing="0.5px"
          >
            Becoming a part of the Breakaway Influencer and Ambassador team is
            pretty simple. Just <br />
            apply by selecting your preferred market below. Complete your
            application and attach your <br /> Instagram handle for a chance to
            be considered!
          </Text>
          <Box width="55%" mt="20">
            <Form />
          </Box>
        </Flex>
      </Box>
    </main>
  );
}
