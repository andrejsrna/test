import { fetchPokemons, fetchSinglePokemon } from "@/lib/fetch-utils";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import { MoveLeft } from "lucide-react";

interface PokemonPageProps {
// 3. Add page props types
}

export async function generateStaticParams() {
  const data = await fetchPokemons();
  return data.results.map((item) => ({
    name: item.name,
  }));
}

export default async function PokemonPage({ params: { name } }: PokemonPageProps) {
  const data = await fetchSinglePokemon(name);

  if (!data) {
    notFound();
  }

  const { name: pokemonName, order, weight } = data;

  return (
    <main className="container py-20">
      <Link href="/" className="inline-flex gap-2 items-center mb-10 text-muted-foreground">
        <MoveLeft size={10} />
        <span>Back to previous page</span>
      </Link>
      <ul className="p-2 border rounded-md bg-muted">
        <li>Name: {pokemonName}</li>
        <li>Order: {order}</li>
        <li>Weight: {weight}</li>
      </ul>
    </main>
  );
}
