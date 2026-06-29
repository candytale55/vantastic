// Pagina de catalogo: carga las vans, aplica filtros por URL y muestra tarjetas con favoritos.
import useFetch from '../hooks/useFetch.jsx'
import VanCard from '../components/VanCard.jsx'
import { useFavorites } from '../context/FavoritesContext.jsx'
import { useSearchParams } from 'react-router-dom'
import { getFilteredVans } from '../utils/filters.js'
import Heart from '../components/Heart.jsx'


export default function Vans() {
  const { data, loading, error } = useFetch('/api/vans')

  const [searchParams, setSearchParams] = useSearchParams()
  const typeFilter = searchParams.get('type')

  const { favorites } = useFavorites()
  const favsFilter = searchParams.get('favs') === 'true'

  if (loading) return <h2>Cargando vans...</h2>
  if (error) return <h2>Hubo un error:{error}</h2>

  const filteredVans = getFilteredVans(data.vans, typeFilter, favsFilter, favorites)

  // Filters live in the URL so the catalog state is shareable and survives refreshes.
  function handleFilterChange(key, value) {
    setSearchParams(prevParams => {
      if (value === null) {
        prevParams.delete(key)
      } else {
        prevParams.set(key, value)
      }

      return prevParams
    })
  }

  return (
    <main className="vans-page section-shell">
      <header className="vans-intro">
        <h1 className="page-title vans-page-title">
          Nuestra Flota
        </h1>
        <p className="section-subtitle">
          Explora nuestra flota de Volkswagen Combi y otras joyas restauradas.
        </p>
      </header>

      <div className="filters-container">
        <div className="type-filters">
          <button
            onClick={() => handleFilterChange('type', 'esencial')}
            className={`filter-chip type-esencial ${typeFilter === 'esencial' ? 'is-active' : ''}`}
          >
            Esencial
          </button>

          <button
            onClick={() => handleFilterChange('type', 'viajera')}
            className={`filter-chip type-viajera ${typeFilter === 'viajera' ? 'is-active' : ''}`}
          >
            Viajera
          </button>

          <button
            onClick={() => handleFilterChange('type', 'singular')}
            className={`filter-chip type-singular ${typeFilter === 'singular' ? 'is-active' : ''}`}
          >
            Singular
          </button>
        </div>

        <div className="utility-filters">
          <button
            onClick={() => handleFilterChange('favs', favsFilter ? null : 'true')}
            className={`filter-chip favorites-filter ${favsFilter ? 'is-active' : ''}`}
          >
            <Heart filled={favsFilter} className="filter-heart-icon" />
            {favsFilter ? 'Todas' : 'Solo Favs'}
          </button>

          <button
            onClick={() => setSearchParams({})}
            className="filter-chip filter-chip-reset"
          >
            Reset Total
          </button>
        </div>
      </div>

      <section className="vans-listing">
        <div className="van-cards-grid">
          {filteredVans.map((van) => (
            <VanCard key={van.id} van={van} />
          ))}
        </div>
      </section>
    </main>
  )
}
