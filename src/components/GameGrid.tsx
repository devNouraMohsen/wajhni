import { Box, Button, SimpleGrid, Text } from "@chakra-ui/react"
import useGames from "./services/hooks/useGames"
import GameCard from "./GameCard";
import GameCardSleleton from "./GameCardSleleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";
import { Fragment } from 'react';
import React from "react";
interface Props {
  gameQuery: GameQuery
}
const GameGrid = ({ gameQuery }: Props) => {
    const {data, error, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } = useGames( gameQuery);
    const skeletones = [1, 2, 3, 4, 5, 6];

    if (error) return <Text>{error.message}</Text>
  return (
      <Box  padding= '10px'>
        <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 4}} spacing={6}>
          {isLoading && 
            skeletones.map ((Skeleton) => (
              <GameCardContainer key={Skeleton}> 
                <GameCardSleleton />
              </GameCardContainer>
            ))}
          {data?.pages.map((page, index) => 
            <React.Fragment key={index}> 
              {page.results.map((game) => (
                <GameCardContainer key={game.id}>
                  <GameCard game={game} />
                </GameCardContainer>
              ))}
            </React.Fragment>)}
        </SimpleGrid> 
        {hasNextPage && (
          <Button
            margin={5}
            variant="outline"
            size="md"
            borderColor={"#cbc0ac"}
            textColor={"black"}
            bg='#fff1e6'
            sx={
                { 
                '&::placeholder': { 
                color: 'gray.500'
                }
            }}
           onClick={() => fetchNextPage()}
          >
            {isFetchingNextPage ? ' Loading ...' : 'Load More'}
          </Button>
        )}
      </Box>
  )
}

export default GameGrid
