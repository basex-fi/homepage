import { Flex, Image, HStack, Box, Text, Button, Link } from "@chakra-ui/react";

export const Header = () => {
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      px={{ base: 4, md: 8, lg: 12 }}
      py={{ base: 6, lg: 8 }}
    >
      <HStack spacing={1}>
        <Box boxSize="38px">
          <Image src="/logo512.png" alt="logo" w="full" />
        </Box>
        <Text fontWeight="bold" fontSize="3xl" ml={3}>
          BaseX
        </Text>
      </HStack>
      <HStack spacing={10}>
        <HStack spacing={10} display={{ base: "none", md: "flex" }}>
          <Link>Blog</Link>
          <Link>Docs</Link>
        </HStack>
        <Button variant="outline">Launch App</Button>
      </HStack>
    </Flex>
  );
};
