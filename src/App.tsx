import {
  ChakraProvider,
  Container,
  Box,
  Flex,
  VStack,
  Text,
  Icon,
  Button,
} from "@chakra-ui/react";

import { HiOutlineArrowNarrowRight } from "react-icons/hi";

import { theme } from "./theme";
import { Header } from "./Header";
import { Overview } from "./Overview";
import { Footer } from "./Footer";
import { Features } from "./Features";
import { Hero } from "./Hero";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box>
      <Container maxW="7xl">
        <Header />
      </Container>
      <Container maxW="7xl">
        <Hero />
      </Container>
    </Box>
    <Container maxW="full" bg="#f7faff" py={6}>
      <Container maxW="7xl">
        <Overview />
      </Container>
    </Container>
    <Container maxW="7xl" mt={16}>
      <Features />
      <Box px={{ base: 4, md: 8, lg: 12 }} mt={12}>
        <Flex
          borderRadius="lg"
          justifyContent="space-between"
          borderWidth={1}
          alignItems="center"
          borderColor="rgb(209, 222, 230)"
          p={8}
        >
          <VStack alignItems="flex-start">
            <Text fontSize="3xl" fontWeight="semibold">
              Start Now
            </Text>
            <Text>Start build your passive income streams right away.</Text>
          </VStack>
          <Button variant="primary">
            Get Started
            <Icon as={HiOutlineArrowNarrowRight} ml={2} />
          </Button>
        </Flex>
      </Box>
      <Box mt={8}>
        <Footer />
      </Box>
    </Container>
  </ChakraProvider>
);
