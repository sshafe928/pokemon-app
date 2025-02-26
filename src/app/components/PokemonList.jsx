    // src/components/PokemonList.js
    'use client';

    import { useState } from 'react';

    export function PokemonList({ initialPokemon }) {
    const [selectedPokemon, setSelectedPokemon] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [fetchError, setFetchError] = useState(null);

    const handlePokemonClick = async (name) => {
        setIsLoading(true);
        setFetchError(null);
        
        try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        if (!res.ok) throw new Error("Failed to fetch Pokemon details");
        
        const data = await res.json();
        setSelectedPokemon(data);
        } catch (err) {
        setFetchError("Error loading Pokemon details. Please try again.");
        console.error(err);
        } finally {
        setIsLoading(false);
        }
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Pokemon List - 1/3 width on medium+ screens with fixed height and scrolling */}
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Pokémon List</h2>
            {/* This div will be scrollable with a fixed height */}
            <div className="h-96 overflow-y-auto pr-2">
            <ul className="space-y-2">
                {initialPokemon.map((p) => (
                <li 
                    key={p.name} 
                    onClick={() => handlePokemonClick(p.name)}
                    className="p-3 bg-gray-100 hover:bg-blue-100 rounded-md cursor-pointer transition-colors capitalize"
                >
                    {p.name}
                </li>
                ))}
            </ul>
            </div>
        </div>
        
        {/* Pokemon Details - 2/3 width on medium+ screens */}
        <div className="md:col-span-2 bg-white p-6 rounded-lg shadow-md">
            {isLoading ? (
            <div className="flex flex-col items-center justify-center h-64">
                <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                <p className="mt-4 text-gray-600">Loading Pokémon data...</p>
            </div>
            ) : fetchError ? (
            <div className="text-center p-8">
                <p className="text-red-500 text-xl">{fetchError}</p>
            </div>
            ) : selectedPokemon ? (
            <div className="flex flex-col items-center md:items-start md:flex-row">
                <div className="mb-6 md:mb-0 md:mr-8">
                <img 
                    src={selectedPokemon.sprites.other['official-artwork'].front_default || selectedPokemon.sprites.front_default} 
                    alt={selectedPokemon.name}
                    className="w-48 h-48 object-contain bg-gray-100 rounded-lg"
                />
                </div>
                
                <div className="flex-1">
                <h2 className="text-3xl font-bold text-gray-800 capitalize mb-4">{selectedPokemon.name}</h2>
                
                {/* Data point 1: Types */}
                <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-2">Types:</h3>
                    <div className="flex space-x-2">
                    {selectedPokemon.types.map((type) => (
                        <span 
                        key={type.type.name} 
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full capitalize"
                        >
                        {type.type.name}
                        </span>
                    ))}
                    </div>
                </div>
                
                {/* Data point 2: Stats */}
                <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-2">Stats:</h3>
                    <div className="grid grid-cols-2 gap-2">
                    {selectedPokemon.stats.map((stat) => (
                        <div key={stat.stat.name} className="flex flex-col">
                        <span className="text-sm text-gray-600 capitalize">{stat.stat.name}</span>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div 
                            className="bg-blue-600 h-2.5 rounded-full" 
                            style={{ width: `${Math.min(100, (stat.base_stat / 255) * 100)}%` }}
                            ></div>
                        </div>
                        <span className="text-xs text-right">{stat.base_stat}</span>
                        </div>
                    ))}
                    </div>
                </div>
                
                {/* Data point 3: Physical attributes */}
                <div className="grid grid-cols-2 gap-4">
                    <div>
                    <h3 className="text-lg font-semibold mb-2">Physical:</h3>
                    <p><span className="font-medium">Height:</span> {selectedPokemon.height / 10} m</p>
                    <p><span className="font-medium">Weight:</span> {selectedPokemon.weight / 10} kg</p>
                    </div>
                    
                    <div>
                    <h3 className="text-lg font-semibold mb-2">Abilities:</h3>
                    <ul className="list-disc pl-5">
                        {selectedPokemon.abilities.map((ability) => (
                        <li key={ability.ability.name} className="capitalize">
                            {ability.ability.name}
                            {ability.is_hidden && <span className="text-xs text-gray-500 ml-1">(Hidden)</span>}
                        </li>
                        ))}
                    </ul>
                    </div>
                </div>
                </div>
            </div>
            ) : (
            <div className="flex flex-col items-center justify-center h-64 text-gray-500">
                <p>Select a Pokémon from the list to view details</p>
            </div>
            )}
        </div>
        </div>
    );
    }