// import { PokemonsData, SinglePokemonData } from "./types";

import { PokemonsData, SinglePokemonData } from "./types";

const API_URL = process.env.POKEMON_API_URL ?? "https://pokeapi.co/api/v2";

// 1. Finish fetchPokemons function
export async function fetchPokemons(): Promise<PokemonsData> {
    try {
        const response = await fetch(`${API_URL}/pokemon?offset=20&limit=20`); 
        if (!response.ok) {
            throw new Error('Chyba načítania dát');
        }
        const data: PokemonsData = await response.json();
        return data;
    } catch (error) {
        console.error("fetchPokemons chyba", error);
        throw error;
    }


}

// 3. Finish fetchSinglePokemons function
export async function fetchSinglePokemon(name: string): Promise<SinglePokemonData> {
    const url = `${API_URL}/pokemon/${name.toLowerCase()}`;
    console.log(`Fetching single Pokemon from URL: ${url}`); // Debugging
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Chyba při načítání Pokémonu "${name}": ${response.status} ${response.statusText}`);
      }
      const data: SinglePokemonData = await response.json();
      return data;
    } catch (error) {
      console.error(`fetchSinglePokemon Error for "${name}":`, error);
      throw error;
    }
  }