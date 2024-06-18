

export async function generateStaticParams() {
  const maxPokemons = 251;
  const api = 'https://pokeapi.co/api/v2/pokemon/';

  const res = await fetch(`${api}?limit=${maxPokemons}`);
  const data = await res.json();

  return data.results.map((index) => ({

    pokemonId: (index + 1).toString(), // Usando o índice + 1 para os IDs

  }));


}


export default async function PokemonPage({ params }) {
  const { pokemonId } = params;
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
  const pokemon = await res.json();


  return <p>{pokemon.name}</p>;
}
