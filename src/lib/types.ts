export interface PokemonResults {
    name: string
}

export interface PokemonsData {
    count: number
    next: string | null
    previous: string | null
    results: PokemonResults[]
}

export interface SinglePokemonData {
    name: string
    order: number
    weight: number
}