import { Box, Heading, Text, Container } from '@chakra-ui/react';
import { FaPlay } from 'react-icons/fa';

interface HeroLinks {
  title: string;
  artist: string;
  art: string;
}

export const SwiperCard = ({ title, artist, art }: HeroLinks) => {
  return (
    <Box>
      <Box
        position={'relative'}
        height="500px"
        width="100vw"
        filter={'blur(2px) opacity(0.7);'}
        background={`linear-gradient(rgba(0, 0, 0, 0.4), rgba(255, 255, 255, 1)), url(${art}) `}
        backgroundSize="cover"
      />
      <Box
        display="flex"
        alignItems={'flex-end'}
        background={`linear-gradient(-90deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 1)), url(${art}) `}
        backgroundPosition="center"
        position={'absolute'}
        padding="1em"
        top="40%"
        left="50%"
        transform="translate(-50%, -50%)"
        backgroundSize="cover"
        width={['95%', '95%', '65%', '65%']}
        height="80%"
        borderRadius={20}
        marginTop={20}
      >
        <Box display={'flex'} alignItems="center">
          <Box
            padding={2}
            width="4em"
            height={'4em'}
            margin="0.5em"
            borderRadius={10}
            display="flex"
            background="white"
            alignItems="center"
            justifyContent="center"
          >
            <FaPlay size="2em" />
          </Box>
          <Box>
            <Heading color="white">{title}</Heading>
            <Box display={'flex'} flexDirection="row" gap={2}>
              <Text color="white">{artist}</Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
