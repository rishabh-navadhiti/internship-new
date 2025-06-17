
import { Box, Flex, Heading, Text, Spacer } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box as="header" w="100%" px="2" py={4} borderColor="gray.200" md={{px: 10}} bg="blue.subtle"> 
        <Box>
          <Heading size="md" fontWeight="bold" textAlign={"center"}>
              Navadhiti Business Consultancy
          </Heading>
          <Text fontSize={"sm"} textAlign={"center"}>© {new Date().getFullYear()} All rights reserved</Text>
        </Box>
    </Box>
  );
}