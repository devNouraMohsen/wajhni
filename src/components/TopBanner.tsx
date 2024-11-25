// src/components/TopBanner.tsx
import React from 'react';
import { Box, Container, Heading } from '@chakra-ui/react';
import HeaderBG from '../assets/HeaderBG.png';

const TopBanner: React.FC = () => {
  return (
    <Box
      bgAttachment="fixed"
      bgImage={`url(${HeaderBG})`}
      bgRepeat="no-repeat" 
      bgSize="cover" 
      height="50vh" 
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Container maxW="container.lg" centerContent>
        <Box paddingTop="10em" textAlign="center">
          <Heading
            as="h1"
            size="2xl"
            fontFamily="'Baloo Bhaijaan 2', cursive"
            color="#d4ccbc"
            paddingBottom={'40px'}
          >
           Wajhni
          </Heading>
          <Heading
            as="h1"
            size="2xl"
            fontFamily="'Baloo Bhaijaan 2', cursive"
            color='#f3dbd3'
          >
            Help you 
          </Heading>
        </Box>
      </Container>
    </Box>
  );
};

export default TopBanner;
