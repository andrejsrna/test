import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

// 2. 
// Create interface for PokemonCard component and define props
// If pokemon name starts with "p" or "b", make his font red. 

export default function PokemonCard() {

  return (
    <Link href={`/pokemon/${name}`} className={cn("font-medium")}>
        {name}
    </Link>
  );
}
