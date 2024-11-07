import React from 'react'
import { useParams } from 'react-router-dom'
import useGame from '../hooks/useGame';
import { Heading, Spinner, Text } from '@chakra-ui/react';
import ExpanddableText from '../components/ExpanddableText';

const GameDetailPage = () => {
  const {slug} = useParams();
  const {data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;
  if (error || !game) throw error;
  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpanddableText>{game.description_raw}</ExpanddableText>
    </>
  )
}

export default GameDetailPage;
