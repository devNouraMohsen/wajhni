import { SimpleGrid, Text } from "@chakra-ui/react"
import useGames from "./services/hooks/useGames"
import GameCard from "./GameCard";
import GameCardSleleton from "./GameCardSleleton";
import GameCardContainer from "./GameCardContainer";
const GameGrid = () => {
    const {data, error, isLoading } = useGames();
    const skeletones = [1, 2, 3, 4, 5, 6];
  return (
    <>
        {error &&  <Text>{error}</Text>}
        <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 5}} padding= '10px 'spacing={3}>
          {isLoading && 
            skeletones.map ((Skeleton) => (
              <GameCardContainer> 
                <GameCardSleleton key={Skeleton}/>
              </GameCardContainer>
            ))}
          {data.map((game) => (
            <GameCardContainer>
              <GameCard key={game.id} game={game} />
            </GameCardContainer>
          ))}
        </SimpleGrid> 
    </>
  )
}

export default GameGrid
