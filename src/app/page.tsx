import Reach from "react";
import { fetchPokemons } from "@/lib/fetch-utils";
import PokemonCard from "@/components/pokemon-card";
import { PokemonsData } from "@/lib/types";


export default async function Home() {

  // 1. Finish fetchPokemons function
  const data = await fetchPokemons()

  interface PokemonListProps {
    data: PokemonsData;
  }

  return (
    <main className="container py-10">
      <h1 className="text-5xl font-bold mb-10">Regiojet - test </h1>
      <section className="grid grid-cols-2 sm:grid-cols-1 gap-4">
       {data.results.map((pokemon) =>
       <PokemonCard key={pokemon.name} name={pokemon.name} />
      )}
      </section>
    </main>
  );
}
