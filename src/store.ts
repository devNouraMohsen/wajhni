import { create } from "zustand";

interface GameQuery {
    genreId?: number;
    platformId?: number;
    sortOrder?: string;
    searchText?: string;
}

export interface GameQueryStore {
    gameQuery: GameQuery;
    setSearchText: (searchText: string) => void;
    setGenreId: (genreId: number) => void;
    setPlatformId: (platformId: number) => void;
    setSortOrder: (sortOrder: string) => void;
}

const useGameQueryStore = create<GameQueryStore>(set => ({
    gameQuery: {},
    setSearchText: (searchText) => set(() => ({gameQuery: { searchText} })),
    setGenreId: (genreId) => set((store) => ({gameQuery: {...store.gameQuery, genreId} })),
    setPlatformId: (platformId) => set((store) => ({gameQuery:{...store, platformId }})),
    setSortOrder: (sortOrder) => set((store) => ({gameQuery:{...store, sortOrder }})),
}));

export default useGameQueryStore;