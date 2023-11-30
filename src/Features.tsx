import { Flex, Box, Text, Icon, Button, Image } from "@chakra-ui/react";

import { HiOutlineArrowNarrowRight } from "react-icons/hi";

import feature1 from "./assets/feature1.png";
import feature2 from "./assets/feature2.png";
import feature3 from "./assets/feature3.png";

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
        <Flex
          w={{ base: "full", md: "50%" }}
          justifyContent="center"
          alignItems="center"
        >
          <Image src={feature1} w="90%" />
        </Flex>
        <Box w={{ base: "full", md: "50%" }}>
          <Text fontSize="2xl" fontWeight="semibold">
          Enjoy Low-Cost and Low-Slippage Swaps
          </Text>
          <Text mt={3}>
          BaseX leverages the scalability of Base Chain, Coinbase's L2 network built on Ethereum, to reduce gas costs and increase throughput. With the power of UniSwap V3 CLMM and our liquidity management partners, you can swap tokens with less slippage and more efficiency.
          </Text>
          <Button
            mt={4}
            variant="unstyled"
            color="#0049ff"
            _hover={{ textDecoration: "underline" }}
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
        <Flex
          w={{ base: "full", md: "50%" }}
          justifyContent="center"
          alignItems="center"
        >
          <Image src={feature2} w="90%" />
        </Flex>
        <Box w={{ base: "full", md: "50%" }}>
          <Text fontSize="2xl" fontWeight="semibold">
          Earn Passive Income by Staking
          </Text>
          <Text mt={3}>
          BaseX rewards you for locking your BXT tokens for up to two years, giving you voting rights and a share of the trading fees. Your veBXT tokens also receive more BXT as rewards via rebasing. You can also customize the price range of your liquidity, increasing your returns and earning more fees, or provide liquidity by gauge to earn BXT emission.
          </Text>
          <Button
            mt={4}
            variant="unstyled"
            color="#0049ff"
            _hover={{ textDecoration: "underline" }}
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
        <Flex
          w={{ base: "full", md: "50%" }}
          justifyContent="center"
          alignItems="center"
        >
          <Image src={feature3} w="90%" />
        </Flex>
        <Box w={{ base: "full", md: "50%" }}>
          <Text fontSize="2xl" fontWeight="semibold">
          Boost Liquidity for Base Chain
          </Text>
          <Text mt={3}>
          BaseX enables easy access and movement of users and assets from Ethereum L1, Coinbase, and other EVM chains. By utilizing the ve (3,3) mechanism, BaseX can create a positive feedback loop that increases the liquidity and value of the protocols on Base Chain.
          </Text>
          <Button
            mt={4}
            variant="unstyled"
            color="#0049ff"
            _hover={{ textDecoration: "underline" }}
          >
            Get Vote
            <Icon as={HiOutlineArrowNarrowRight} ml={2} />
          </Button>
        </Box>
      </Flex>
    </Flex>
  );
};
