
import { Box, Flex, Heading, Text, Spacer } from "@chakra-ui/react";
import { ColorModeButton } from "../ui/color-mode"; 

export default function Header() {
  return (
    <Box as="header" w="100%" px="2" py={4} borderBottomWidth={1} borderColor="gray.200" md={{px: 10}} bg="blue.subtle"> 
      <Flex align="center">
        <Box>
          <Heading size="md" fontWeight="bold">
            Employees Management Center
          </Heading>
          {/* <Text fontSize="sm" color="gray.500">
            Empower your team, manage with ease.
          </Text> */}
        </Box>
        <Spacer />
        <ColorModeButton />
      </Flex>
    </Box>
  );
}