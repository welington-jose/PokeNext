import styles from "@/app/styles/Home.module.css"
import Image from "next/image"
import Card from "@/app/card/page"

export const metadata = {
  title: "Home",
  description: "Home page",
}

export default async function getStaticProps() {
  const maxPokemons = 500
  const api ='https://pokeapi.co/api/v2/pokemon/'

  const res = await fetch(`${api}/?limit=${maxPokemons}`)
  const data = await res.json()

  // add pokemon index
  data.results.forEach((item, index) => {
    item.id = index +1
  });

  return (
    <>
      <div className={styles.title_container}>
        <h1 className={styles.title}>Poke<span>Next</span></h1>
        <Image src="/pokeball.png"
        width={50}
        height={50}
        alt="PokeNext"
        />

      </div>

      <div className={styles.pokemon_container}>
        { data.results.map((pokemon) =>
        <Card key={pokemon.id} pokemon={pokemon}/>
        )}
      </div>
    </>
  )
}
