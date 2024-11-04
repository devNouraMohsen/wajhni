import { SimpleGrid, Text } from "@chakra-ui/react"
import useGames from "./services/hooks/useGames"
import GameCard from "./GameCard";
import GameCardSleleton from "./GameCardSleleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";
interface Props {
  gameQuery: GameQuery
}
const GameGrid = ({ gameQuery }: Props) => {
    const {data, error, isLoading } = useGames( gameQuery);
    const skeletones = [1, 2, 3, 4, 5, 6];

    if (error) return <Text>{error.message}</Text>
  return (
        <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 4}} padding= '10px 'spacing={6}>
          {isLoading && 
            skeletones.map ((Skeleton) => (
              <GameCardContainer key={Skeleton}> 
                <GameCardSleleton />
              </GameCardContainer>
            ))}
          {data?.results.map((game) => (
            <GameCardContainer key={game.id}>
              <GameCard game={game} />
            </GameCardContainer>
          ))}
        </SimpleGrid> 
  )
}

export default GameGrid
