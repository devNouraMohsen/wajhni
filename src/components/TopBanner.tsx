// src/components/TopBanner.tsx
import React from 'react';
import { Box, Container, Heading } from '@chakra-ui/react';
import HeaderBG from '../assets/HeaderBG.png'
const TopBanner: React.FC = () => {
  return (
  
    <Box
      bgAttachment="fixed"
      bgImg={HeaderBG}
      height="50vh" // ارتفاع المكون
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
            color="#bd7b58"
            paddingBottom={'40px'}
          >
            وجهني
          </Heading>
          <Heading
            as="h1"
            size="2xl"
            fontFamily="'Baloo Bhaijaan 2', cursive"
            color='#e4dccc'
          >
            دليلك للمتاجر
          </Heading>
        </Box>
      </Container>
    </Box>
  );
};

export default TopBanner;
