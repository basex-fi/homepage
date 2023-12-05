import {
  Flex,
  Box,
  Image,
  Text,
  Button,
  Icon,
  Mark,
  Link,
} from "@chakra-ui/react";
import styled from "styled-components";

import { HiOutlineArrowNarrowRight } from "react-icons/hi";

import hero from "./assets/hero.png";

const JoinButton = styled(Button)`
  svg {
    transition: 0.6s ease;
    transform: translateX(0px);
  }
  &:hover {
    svg {
      transform: translateX(5px);
    }
  }
`;

export const Hero = () => {
  return (
    <Flex px={{ base: 8, lg: 12 }} py={{ base: 10, lg: 8 }} alignItems="center">
      <Box
        textAlign={{ base: "center", lg: "left" }}
        px={{ base: "10%", lg: "0" }}
        flex={1}
      >
        <Text fontSize={{ base: "4xl", md: "5xl" }} fontWeight={500}>
          Streamlining Your DeFi Journey{" "}
          <Mark bg="#0049ff" color="#fff" px={2}>
            Effortless
          </Mark>{" "}
          and{" "}
          <Mark bg="#e1f542" px={2}>
            Efficient
          </Mark>
        </Text>
        <Text mt={4} fontSize="lg">
          Welcome to BaseX, your gateway to seamless DeFi experiences with
          low-cost, low-slippage swaps powered by Coinbase's Base Chain, UniSwap
          V3 CLMM and ve(3,3) model.
        </Text>
        <Link href="https://app.basex.fi" target="_bank">
          <JoinButton mt={8} variant="primary" size="lg">
            Get Started
            <Icon as={HiOutlineArrowNarrowRight} ml={2} />
          </JoinButton>
        </Link>
      </Box>
      <Flex
        h="full"
        display={{ base: "none", lg: "flex" }}
        justifyContent="flex-end"
        w="51%"
        ml={20}
      >
        <Image src={hero} w="full" />
      </Flex>
    </Flex>
  );
};
