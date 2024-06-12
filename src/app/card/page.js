import Image from "next/image"

export default function Card({pokemon}) {

    return(
        <div>
            <Image
            src={`https://raw.githubusercontent.com/wellrccity/pokedex-html-js/master/assets/img/pokemons/poke_${pokemon.id}.gif`}
            width={120}
            height={160}
            alt={pokemon.name}
            />
            <h3>{pokemon.name}</h3>
        </div>
    )
}