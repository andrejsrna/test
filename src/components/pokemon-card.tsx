import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

// 2. 
// Create interface for PokemonCard component and define props
// If pokemon name starts with "p" or "b", make his font red. 

interface PokemonCardProps {
  name: string;
}

export default function PokemonCard({ name }: PokemonCardProps) {
  // Applying conditional class if the pokemon's name starts with "p" or "b"
  const nameStyle = name.startsWith('p') || name.startsWith('b') ? 'text-red-500' : 'font-medium';

  return (
    <Link href={`/pokemon/${name}`} className={cn(nameStyle)}>
      {name}
    </Link>
  );
} 