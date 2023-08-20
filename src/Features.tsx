import { Flex, Box, Text, Icon, Button, Image } from "@chakra-ui/react";

import { HiOutlineArrowNarrowRight } from "react-icons/hi";

export const Features = () => {
  return (
    <Flex
      px={{ base: 4, md: 8, lg: 12 }}
      gap={{ base: 10, md: 14 }}
      flexDirection="column"
    >
      <Flex
        alignItems="center"
        gap={{ base: 8, md: 20 }}
        justifyContent="center"
        flexDirection={{ base: "column", md: "row" }}
      >
        <Box w={{ base: "full", md: "50%" }}>
          <Image src="/feature1.png" w="full" />
        </Box>
        <Box w={{ base: "full", md: "50%" }}>
          <Text fontSize="2xl" fontWeight="semibold">
            Swap your tokens with low slippage
          </Text>
          <Text mt={3}>
            Basex's smart routing, deep liquidity, and latest AMM technology
            allow you to enjoy low slippage and high return when swapping one
            cryptocurrency for another.
          </Text>
          <Button
            mt={4}
            variant="unstyled"
            color="gray.500"
            _hover={{ color: "gray.800" }}
          >
            Swap Now
            <Icon as={HiOutlineArrowNarrowRight} ml={2} />
          </Button>
        </Box>
      </Flex>
      <Flex
        alignItems="center"
        gap={{ base: 8, md: 20 }}
        justifyContent="center"
        flexDirection={{ base: "column", md: "row-reverse" }}
      >
        <Box w={{ base: "full", md: "50%" }}>
          <Image src="/feature2.png" w="full" />
        </Box>
        <Box w={{ base: "full", md: "50%" }}>
          <Text fontSize="2xl" fontWeight="semibold">
            Stake and earn passive income
          </Text>
          <Text mt={3}>
            Stake your assets for instant passive income streams. No deposit or
            withdrawal fees. You have full control over your funds.
          </Text>
          <Button
            mt={4}
            variant="unstyled"
            color="gray.500"
            _hover={{ color: "gray.800" }}
          >
            Start Staking
            <Icon as={HiOutlineArrowNarrowRight} ml={2} />
          </Button>
        </Box>
      </Flex>
      <Flex
        alignItems="center"
        gap={{ base: 8, md: 20 }}
        justifyContent="center"
        flexDirection={{ base: "column", md: "row" }}
      >
        <Box w={{ base: "full", md: "50%" }}>
          <Image src="/feature3.png" w="full" />
        </Box>
        <Box w={{ base: "full", md: "50%" }}>
          <Text fontSize="2xl" fontWeight="semibold">
            Liquidity layer for Base chain
          </Text>
          <Text mt={3}>
            Basex was designed to onboard the next generation of protocols to
            the Base chain by opening up a free market for BSX emissions.
            Protocols can bribe veBSX holders or acquire veBSX to redirect
            emissions to their pools, offering a flexible and capital efficient
            solution to bootstrap and scale liquidity.
          </Text>
          <Button
            mt={4}
            variant="unstyled"
            color="gray.500"
            _hover={{ color: "gray.800" }}
          >
            Get Vote
            <Icon as={HiOutlineArrowNarrowRight} ml={2} />
          </Button>
        </Box>
      </Flex>
    </Flex>
  );
};
