import React from 'react';
import { SimpleGrid, Box, Text, Heading, Divider, Button } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import HeaderBG from '../assets/HeaderBG.png';

const LandingPage: React.FC = () => {
  return (
    <Box
        bgAttachment="fixed"
        bgImage={`url(${HeaderBG})`} // استخدام bgImage بدلاً من bgImg
        bgRepeat="no-repeat" // عدم تكرار الخلفية
        bgSize="cover" // تغطية كامل المكون
        height="50vh" // ارتفاع المكون
        display="flex"
        alignItems="center"
        justifyContent="center"
    >
      <Box textAlign="center" p={10}>
        <Heading as="h1" size="xl" mb={10} color="#bd7b58" fontFamily="'Baloo Bhaijaan 2', cursive">
          أقسام المتاجر
        </Heading>
        <Divider marginBottom={6} />
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={10} padding='10px'>
          <Box
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            textAlign="center"
            p={4}
            boxShadow="1px 1px 8px 0 #eed5c5"
            _hover={{
              boxShadow: "1px 1px 16px 0 #ddbea9"
            }}
            backgroundColor="#f4e6dc"  
          >
            <Text fontWeight="bold" mt={2} fontFamily="'Baloo Bhaijaan 2', cursive" fontSize="24px" color="#3b6444">
              قسم الأطعمة
            </Text>
            <Text fontFamily="'Baloo Bhaijaan 2', cursive" fontSize="15px" color="#a5a58d" fontWeight="bold" mt={2}>
              هنا يمكنك العثور على مجموعة متنوعة من الأطعمة.
            </Text>
          </Box>

          <Box
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            textAlign="center"
            p={4}
            boxShadow="1px 1px 8px 0 #eed5c5"
            _hover={{
              boxShadow: "1px 1px 16px 0 #ddbea9"
            }}
            backgroundColor="#f4e6dc" 
          >
            <Text fontWeight="bold" mt={2} fontFamily="'Baloo Bhaijaan 2', cursive" fontSize="24px" color="#3b6444">
              Video Games
            </Text>
            <Text fontFamily="'Baloo Bhaijaan 2', cursive" fontSize="15px" color="#a5a58d" fontWeight="bold" mt={2}>
              Here you will find a variety of video games.
            </Text>
            <Link to="/games">
              <Button mt={4} colorScheme="teal">
                Go to Games
              </Button>
            </Link>
          </Box>

          <Box
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            textAlign="center"
            p={4}
            boxShadow="1px 1px 8px 0 #eed5c5"
            _hover={{
              boxShadow: "1px 1px 16px 0 #ddbea9"
            }}
            backgroundColor="#f4e6dc" 
          >
            <Text fontWeight="bold" mt={2} fontFamily="'Baloo Bhaijaan 2', cursive" fontSize="24px" color="#3b6444">
              قسم الملابس
            </Text>
            <Text fontFamily="'Baloo Bhaijaan 2', cursive" fontSize="15px" color="#a5a58d" fontWeight="bold" mt={2}>
              هنا يمكنك العثور على مجموعة متنوعة من الملابس.
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default LandingPage;
