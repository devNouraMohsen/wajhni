import { SimpleGrid, Text } from "@chakra-ui/react"
import useGames, { Platform } from "./services/hooks/useGames"
import GameCard from "./GameCard";
import GameCardSleleton from "./GameCardSleleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "./services/hooks/useGenres";
interface Props {
  selectedGenre: Genre | null;
  selectedPlateform: Platform | null; 
}
const GameGrid = ({selectedGenre, selectedPlateform }: Props) => {
    const {data, error, isLoading } = useGames(selectedGenre, selectedPlateform);
    const skeletones = [1, 2, 3, 4, 5, 6];
  return (
    <>
        {error &&  <Text>{error}</Text>}
        <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 5}} padding= '10px 'spacing={3}>
          {isLoading && 
            skeletones.map ((Skeleton) => (
              <GameCardContainer key={Skeleton}> 
                <GameCardSleleton />
              </GameCardContainer>
            ))}
          {data.map((game) => (
            <GameCardContainer key={game.id}>
              <GameCard game={game} />
            </GameCardContainer>
          ))}
        </SimpleGrid> 
    </>
  )
}

export default GameGrid
