import React from 'react'
import { Box, Image } from '@chakra-ui/react'  // استيراد Box من Chakra UI
import useTrailers from '../hooks/useTrailers'

interface Props{
    gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailers(gameId)

  if (isLoading) return null;
  if (error) throw error;

  const first = data?.results[0];

  return first ? (
    <Box
        width="100%" 
        maxWidth="640px" 
        margin="auto" 
        borderRadius="lg" 
        overflow="hidden" 
        boxShadow="xl"
    >
      <video
        src={first.data[480]} 
        poster={first.preview}
        controls
        width="100%"  
        height="auto"  
      />
    </Box>
  ) : null;
};

export default GameTrailer;
