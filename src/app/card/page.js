import Image from "next/image"
import Link from "next/link"
import styles from "@/app/styles/Card.module.css"

export default function Card({pokemon}) {

    return(
        <div className={styles.card}>
            <Image
            src={`https://raw.githubusercontent.com/wellrccity/pokedex-html-js/master/assets/img/pokemons/poke_${pokemon.id}.gif`}
            width={120}
            height={170}
            alt={pokemon.name}
            />
            <p className={styles.id}>#{pokemon.id}</p>
            <h3 className={styles.title}>{pokemon.name}</h3>
            <Link className={styles.btn} href={`/pokemon/${pokemon.id}`}>
                Detalhes
            </Link>
        </div>
    )
}