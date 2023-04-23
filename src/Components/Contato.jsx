import styles from './Contato.module.css'
import foto from '../assets/contato.jpg'
import Head from './Head'

const Contato = () => {
  return (
    <section className={`${styles.contato} animeLeft`}>
      <Head title="Vini Store | Contato" />
      <img src={foto} alt="Máquina de escrever" />
      <div>
        <h1>Entre em contato.</h1>
        <ul className={styles.dados}>
          <li>vmantovani86@gmail.com</li>
          <li>99999-9999</li>
          <li>Via Corso Roma</li>
        </ul>
      </div>
    </section>
  )
}

export default Contato
