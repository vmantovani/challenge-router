import { useParams } from 'react-router-dom'
import styles from './Produto.module.css'
import { useEffect, useState } from 'react'
import Head from './Head'

const Produto = () => {
  const [produto, setProduto] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const { id } = useParams()

  useEffect(() => {
    async function fetchProduto(url) {
      try {
        setLoading(true)
        const response = await fetch(url)
        const json = await response.json()
        setProduto(json)
      } catch (erro) {
        setError('Deu ruim!')
      } finally {
        setLoading(false)
      }
    }
    fetchProduto(`https://ranekapi.origamid.dev/json/api/produto/${id}`)
  }, [id])

  if (loading) return <div>Carregando...</div>
  if (error) return <p>{error}</p>
  if (produto === null) return null

  return (
    <section className={styles.produto + ' animeLeft'}>
      <Head title={`Vini Store | ${produto.nome}`} />
      {produto.fotos.map((foto) => (
        <img key={foto.src} src={foto.src} alt={foto.titulo} />
      ))}
      <div>
        <h1>{produto.nome}</h1>
        <span className={styles.preco}>€ {produto.preco / 5}</span>
        <p className={styles.descricao}>{produto.descricao}</p>
      </div>
    </section>
  )
}

export default Produto
