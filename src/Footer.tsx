import { Flex, HStack, Link, Text, Icon } from "@chakra-ui/react";

import { AiFillGithub, AiFillTwitterCircle } from "react-icons/ai";
import { FaDiscord, FaTelegram } from "react-icons/fa";

export const Footer = () => {
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      px={{ base: 4, md: 8, lg: 12 }}
      py={{ base: 6, lg: 8 }}
    >
      <Text>
        Copyright &copy; 2023 <Link href="https://basex.fi">BaseX.fi</Link>
      </Text>
      <HStack spacing={6}>
        <Link
          href="https://github.com/basex-fi"
          target="_bank"
          _hover={{ color: "blackAlpha.600" }}
        >
          <Icon as={AiFillGithub} boxSize={6} />
        </Link>
        <Link
          href="https://twitter.com/basex_fi"
          target="_bank"
          _hover={{ color: "blackAlpha.600" }}
        >
          <Icon as={AiFillTwitterCircle} boxSize={6} />
        </Link>
        <Link
          href="https://discord.com/invite/63QCJtzXRk"
          target="_bank"
          _hover={{ color: "blackAlpha.600" }}
        >
          <Icon as={FaDiscord} boxSize={6} />
        </Link>
        <Link
          href="https://t.me/basex_fi"
          target="_bank"
          _hover={{ color: "blackAlpha.600" }}
        >
          <Icon as={FaTelegram} boxSize={6} />
        </Link>
      </HStack>
    </Flex>
  );
};
