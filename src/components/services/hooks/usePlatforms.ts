
import { useQuery } from '@tanstack/react-query';
import { FetchResponse } from '../api-client';
import apiClient from '../api-client';

interface Platform {
    id: number;
    name: string;
    slug: string;
}

const usePlatforms = () => useQuery({
    queryKey: ['platforms'],
    queryFn: () => apiClient 
        .get<FetchResponse<Platform>>('/platforms/lists/parents')
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000,
    // initialData: { count: 0, results: [] as Platform[]},
  
})

export default usePlatforms;
