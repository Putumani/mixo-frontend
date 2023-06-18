import { Box, Flex, Heading, Text } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <Box
      width="100%"
      display={"flex"}
      flexDirection={"row"}
      height="200px"
      justifyContent={"space-between"}
      background="#F5F5F5"
      padding={"1rem"}
    >
      <Box
        display={"flex"}
        justifyContent="space-between"
        flexDirection={"column"}
      >
        <Heading>MIXØ.XYZ</Heading>
        <Box>
          <Text>
            Copyright &copy; 2023 MINDSGN STUDIO PTY LTD. All rights reserved.
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
