import { PokemonList } from './components/PokemonList';

export default async function Home() {
  let pokemon = [];
  let error = null;
  
  try {
    // Server-side data fetching
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100', { next: { revalidate: 3600 } });
    
    if (!res.ok) {
      throw new Error('Failed to fetch data from PokeAPI');
    }
    
    const data = await res.json();
    pokemon = data.results;
  } catch (err) {
    console.error('Error fetching Pokemon:', err);
    error = 'Failed to load Pokemon data. Please try again later.';
  }

  // Error handling for initial data load
  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <h1 className="text-2xl font-bold text-red-500 mb-4">Error</h1>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto py-8 px-4">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">Pokémon Explorer</h1>
        

        <PokemonList initialPokemon={pokemon} />
      </main>
      
      <footer className="bg-blue-600 text-white py-4 fixed inset-x-0 bottom-0">
        <div className="container mx-auto text-center">
          <p>Data provided by <a href="https://pokeapi.co/" className="underline">PokeAPI</a></p>
        </div>
      </footer>
    </div>
  );
}