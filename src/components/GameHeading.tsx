import { Heading } from '@chakra-ui/react'
import { GameQuery } from '../App'
import useGenres from './services/hooks/useGenres';
import usePlatforms from './services/hooks/usePlatforms';
import usePlatform from './services/hooks/usePlatform';
import useGenre from './services/hooks/useGenre';


interface Props {
    gameQuery: GameQuery;
}

const GameHeading = ({gameQuery}: Props) => {
  const genre = useGenre(gameQuery.genreId);
  const platform = usePlatform(gameQuery.platformId);
  const heading = `${platform?.name || ''} ${genre?.name || ''} Games`;
  return (
    <Heading as='h1' marginY={5} fontSize='5xl' textColor='#cbc0ac'>
        {heading}
    </Heading>
  )
}

export default GameHeading
