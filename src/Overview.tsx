import { SimpleGrid, Flex, Text } from "@chakra-ui/react";

export const Overview = () => {
  return (
    <SimpleGrid columns={{ base: 1, md: 3 }} px={{ base: 4, md: 8, lg: 12 }} gap={6}>
      <Flex
        flexDirection="column"
        alignItems="center"
        borderRadius="lg"
        borderWidth={0}
        borderColor="rgb(209, 222, 230)"
        p={8}
      >
        <Text fontWeight="bold" fontSize="3xl">
          $47,566,457
        </Text>
        <Text color="gray.600">30 Day Volume</Text>
      </Flex>
      <Flex
        flexDirection="column"
        alignItems="center"
        borderRadius="lg"
        borderWidth={0}
        borderColor="rgb(209, 222, 230)"
        p={8}
      >
        <Text fontWeight="bold" fontSize="3xl">
          $3,401,603
        </Text>
        <Text color="gray.600">Total Value Locked</Text>
      </Flex>
      <Flex
        flexDirection="column"
        alignItems="center"
        borderRadius="lg"
        borderWidth={0}
        borderColor="rgb(209, 222, 230)"
        p={8}
        px={{ base: 8, lg: 12 }}
      >
        <Text fontWeight="bold" fontSize="3xl">
          24,176
        </Text>
        <Text color="gray.600">24h Trades</Text>
      </Flex>
    </SimpleGrid>
  );
};
