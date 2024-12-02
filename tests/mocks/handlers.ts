import { http, HttpResponse } from 'msw'; 




export const handlers = [
    http.get('/games', () => {
        return HttpResponse.json([
            {
                id: 1,
                title: 'Game 1',
                description: 'A fun game',
                platform_id: 1,
                genre_id: 1,
            },
            {
                id: 2,
                title: 'Game 2',
                description: 'Another fun game',
                platform_id: 2,
                genre_id: 2,
            },

            
        ])
    }),
    http.get('/Genres', () => {
        return HttpResponse.json([
            {
                id: 1,
                name: 'Action',
            },
            {
                id: 2,
                name: 'Adventure',
            },
            {
                id: 3,
                name: 'Sports',
            }
        ])
    })
 

]
