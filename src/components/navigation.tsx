import { Box, Container, Heading } from "@chakra-ui/react";
import SearchInput from "./searchInput"; 

interface NavigationProps {
  onSearch: (query: string) => void;
}

export const Navigation = ({ onSearch }: NavigationProps) => {
  return (
    <Box width="100vw">
      <Box
        position={"absolute"}
        zIndex={2}
        padding={5}
        display="flex"
        justifyContent={"space-between"}
        flexDir="row"
        background={`linear-gradient(rgba(0, 0, 0, 0.3), rgba(0,0, 0, 0.0))`}
        width="100%"
      >
        <Container>
          <Box>
            <Heading color="white">MIXØ.XYZ</Heading>
          </Box>
        </Container>
        <SearchInput onSearch={onSearch} />
      </Box>
    </Box>
  );
};

