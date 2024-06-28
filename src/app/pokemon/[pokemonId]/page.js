import Image from "next/image";
import styles from "@/app/styles/Pokemon.module.css"

export async function generateStaticParams() {
  const maxPokemons = 501;
  const api = 'https://pokeapi.co/api/v2/pokemon/';

  const res = await fetch(`${api}?limit=${maxPokemons}`);
  const data = await res.json();

  return data.results.map((_, index)/* _, necessário para fazer o run buid*/ => ({

    pokemonId: (index + 1).toString(), // Usando o índice + 1 para os IDs

  }));


}


export default async function PokemonPage({ params }) {
  const { pokemonId } = params;
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
  const pokemon = await res.json();


  return (
    <div className={styles.pokemon_container}>
      <h1 className={styles.title}>{pokemon.name}</h1>
      <Image
      src={`https://raw.githubusercontent.com/wellrccity/pokedex-html-js/master/assets/img/pokemons/poke_${pokemonId}.gif`}
      width={200}
      height={300}
      alt={pokemon.name}
      />
      <div className={styles.number}>
        <h3>Número:</h3>
        <p>#{pokemon.id}</p>
      </div>
      <div>
        <h3 className={styles.types_conteiner}>Tipo:</h3>
        <div>
          {pokemon.types.map((item, index) => (
            <span key={index} className={`${styles.type} ${styles[`type_` + item.type.name]}`}>{item.type.name}</span>
          ))}
        </div>
      </div>
      <div className={styles.data_container}>
        <div className={styles.data_height}>
          <h4>Altura:</h4>
         {
          pokemon.height >= 10
          ? <p>{pokemon.height / 10} mt</p>
          : <p>{pokemon.height * 10} cm</p>
         }
        </div>
        <div className={styles.data_weigth}>
          <h4>Peso:</h4>
          <p>{pokemon.weight /10} kg</p>
        </div>
      </div>
    </div>
  )
}
