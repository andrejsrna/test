// import { PokemonsData, SinglePokemonData } from "./types";

const API_URL = process.env.POKEMON_API_URL ?? "";

// 1. Finish fetchPokemons function
export async function fetchPokemons() {

}

// 3. Finish fetchSinglePokemons function
export async function fetchSinglePokemon(name: string) {
    const url = `${API_URL}/${name}`
}