import React from 'react';
import useScreenshots from '../hooks/useScreenshots';
import { Image, SimpleGrid, Box } from '@chakra-ui/react';

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data, error, isLoading } = useScreenshots(gameId);

  if (isLoading) return null;
  if (error) throw error;

  return (
    <SimpleGrid 
      columns={{ base: 1, sm: 1, md: 2, lg: 2 }}
      spacing={4} 
      py={4}
    >
      {data?.results.map((file) => (
        <Box key={file.id} borderRadius="lg" overflow="hidden" boxShadow="md">
          <Image 
            src={file.image} 
            alt={`Screenshot of game`} 
            width="100%" 
            height="auto" 
            objectFit="cover" 
          />
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
