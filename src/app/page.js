"use client"
import { useEffect, useState } from "react"
import styles from "@/app/styles/Home.module.css"
import Image from "next/image"
import Card from "@/app/card/page"

export default function Home() {
  const [pokemons, setPokemons] = useState([]) // Define o estado 'pokemons' como um array vazio e a função 'setPokemons' para atualizá-lo
  const [searchTerm, setSearchTerm] = useState("", []) // Define o estado 'searchTerm' como uma string vazia e a função 'setSearchTerm' para atualizá-lo

  useEffect(() => { // Hook useEffect para lidar com efeitos colaterais na montagem do componente
    const fetchPokemons = async () => {
      const maxPokemons = 501
      const api = 'https://pokeapi.co/api/v2/pokemon/'

      const res = await fetch(`${api}/?limit=${maxPokemons}`)
      const data = await res.json()

      // Adiciona um índice aos resultados dos Pokémon
      const updatedResults = data.results.map((item, index) => ({
        ...item,
        id: index + 1,
      }))

      setPokemons(updatedResults) // Atualiza o estado 'pokemons' com os resultados obtidos da API
    }

    fetchPokemons()
  }, [])

  const handleSearchChange = (e) => { // Filtra os pokemons com base no termo de pesquisa
    setSearchTerm(e.target.value)
  }

  const filteredPokemons = pokemons.filter(pokemon =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <>
      <div className={styles.title_container}>
        <h1 className={styles.title}>Poke<span>Next</span></h1>
        <Image
          src="/pokeball.png"
          width={50}
          height={50}
          alt="PokeNext"
        />
      </div>

      <div className={styles.searchTerm}>
        <input className={styles.input}
          placeholder="Pesquisar Pokemon"
          type="text"
          value={searchTerm} // Valor do campo de pesquisa controlado pelo estado 'searchTerm'
          onChange={handleSearchChange} // Chama a função handleSearchChange ao modificar o campo de pesquisa
        />
      </div>

      <div className={styles.pokemon_container}>
        {filteredPokemons.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </>
  )
}
