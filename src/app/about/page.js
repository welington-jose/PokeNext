import Image from "next/image"
import styles from "@/app/styles/About.module.css"

export default function About() {
    return (
        <div className={styles.about}>
            <h1>Sobre o projeto</h1>
            <p> Lorem não deu certo</p>
            <Image src={"/charizard.png"}
            width={300}
            height={300}
            alt="Charizard"
            />
        </div>
    )
}