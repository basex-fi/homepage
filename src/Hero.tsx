import { Flex, Box, Image, Text, Button, Icon, Mark } from "@chakra-ui/react";
import styled from "styled-components";

import { HiOutlineArrowNarrowRight } from "react-icons/hi";

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
          Making your Swap experience{" "}
          <Mark bg="#0049ff" color="#fff" px={2}>
            Easier
          </Mark>{" "}
          and{" "}
          <Mark bg="#e1f542" px={2}>
            Smoother
          </Mark>
        </Text>
        <Text mt={4} fontSize="lg">
          BaseX was designed to onboard the next generation of protocols to the
          Base chain, allow you to enjoy low slippage and high return.
        </Text>
        <JoinButton mt={8} variant="primary" size="lg">
          Get Started
          <Icon as={HiOutlineArrowNarrowRight} ml={2} />
        </JoinButton>
      </Box>
      <Flex
        h="full"
        display={{ base: "none", lg: "flex" }}
        justifyContent="flex-end"
        w="51%"
        ml={20}
      >
        <Image src="/hero.png" w="full" />
      </Flex>
    </Flex>
  );
};
