import { fetchPokemons } from "@/lib/fetch-utils";

export default async function Home() {

  // 1. Finish fetchPokemons function
  const data = await fetchPokemons()

  return (
    <main className="container py-10">
      <h1 className="text-5xl font-bold mb-10">Regiojet - test </h1>
      <section>
       {/* 2. Map over data.results and pass props inside PokemonCard component */}
       {/* <PokemonCard /> */}
      </section>
    </main>
  );
}
