import { Box, Button, Text, VStack } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";
import { FiMoon, FiSun } from "react-icons/fi";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box p={8}>
      <VStack spacing={4}>
        <Text fontSize="2xl">🌟 Chakra UI + Vite Starter</Text>
        <Button
          onClick={toggleColorMode}
          leftIcon={colorMode === "light" ? <FiMoon /> : <FiSun />}
        >
          Toggle {colorMode === "light" ? "Dark" : "Light"} Mode
        </Button>
      </VStack>
    </Box>
  );
}

export default App;
