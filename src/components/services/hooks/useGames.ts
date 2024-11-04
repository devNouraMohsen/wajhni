import { FetchResponse } from '../api-client';
import { GameQuery } from '../../../App';
import { useQuery } from '@tanstack/react-query';
import apiClient from '../api-client';

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platform}[];
    metacritic: number;
    rating_top: number;
  }
  

const useGames = (
  gameQuery: GameQuery,
) => useQuery<FetchResponse<Game>, Error>({
  queryKey: ['games', gameQuery],
  queryFn: () => 
    apiClient 
     .get<FetchResponse<Game>>('/games', {
        params: {
         genres: gameQuery.genre?.id,
         parent_platforms: gameQuery.platform?.id,
         ordering: gameQuery.sortOrder,
         search: gameQuery.searchText,
       },
     })
     .then((res) => res.data),
    // staleTime: 24 * 60 * 60 * 1000,
  // initialData: { count: 0, results: [] as Game[]},
  // refetchInterval: 10000, // refetch every 10 seconds
})
  

export default useGames;