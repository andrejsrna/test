## Regiojet - Test

### Git
1. Clone the repository.
2. Check out to a custom branch.
3. After you finish all tasks, commit your changes and create a pull request to the main branch.

### Tasks

1. **Fetch Pokemons Function**
   - Files: 
     - `src/lib/fetch-utils.ts`
     - `src/app/page.tsx`
   - Tasks:
     - Finish the `fetchPokemons` function.
     - Use the already defined `API_URL`.
     - Add a query parameter limit with value 20.
     - Add error handling.
     - Add a return type to the function (you can find types inside `src/lib/types.ts`).

2. **Map Over Results and Pass Props to PokemonCard Component**
   - Files:
     - `src/app/page.tsx`
     - `src/components/pokemon-card.tsx`
   - Tasks:
     - Map over the results and pass props to the `PokemonCard` component.
     - Create and use an interface for the `PokemonCard` component.
     - Define component props.
     - Add styles for the section and `PokemonCard` component:
       - Display data in a column with a gap.
       - If pokemon name starts with "p" or "b", make his font red. 

3. **Fetch Single Pokemon Function**
   - Files:
     - `src/lib/fetch-utils.ts`
     - `src/app/pokemon/[name]/page.tsx`
   - Tasks:
     - Finish the `fetchSinglePokemon` function.
     - Use the defined URL with the dynamic `name` parameter.
     - Add error handling.
     - Add a return type to the function (you can find types inside `src/lib/types.ts`).
     - Create an interface for `PokemonPage`.



