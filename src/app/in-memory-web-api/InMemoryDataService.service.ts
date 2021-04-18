import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemHeroService implements InMemoryDbService {
    createDb() {
        let list = [
            {
                id: 0,
                name: 'game 1',
                votes: 10,
                category: 'games'

            },
            {
                id: 1,
                name: 'game 2',
                votes: 20,
                category: 'games'

            },
            {
                id: 2,
                name: 'anime 1',
                votes: 140,
                category: 'anime'

            },
            {
                id: 3,
                name: 'anime 2',
                votes: 139,
                category: 'anime'

            },
            {
                id: 4,
                name: 'manga 1',
                votes: 100,
                category: 'manga'

            },
            {
                id: 5,
                name: 'manga 2',
                votes: 100,
                category: 'manga'

            },
            {
                id: 6,
                name: 'movie 1',
                votes: 100,
                category: 'movies'

            },
            {
                id: 7,
                name: 'movie 2',
                votes: 100,
                category: 'movies'

            }
        ];
        return { list };
    }
}