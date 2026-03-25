import useFetch from '../hooks/useFetch.jsx'
import VanCard from '../components/VanCard.jsx'
import { useFavorites } from '../context/FavoritesContext.jsx'
import { useSearchParams } from 'react-router-dom'
import { getFilteredVans } from '../utils/filters.js'



export default function Vans() {

  const { data, loading, error } = useFetch("/api/vans");

  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");

  const { favorites } = useFavorites();
  const favsFilter = searchParams.get("favs") === "true";

  if (loading) return <h2>Cargando vans...</h2>
  if (error) return <h2>Hubo un error:{error}</h2> //TODO: Improve error message styling


  // Use the utility function to get filtered vans
  const filteredVans = getFilteredVans(data.vans, typeFilter, favsFilter, favorites);

  function handleFilterChange(key, value) {
    setSearchParams(prevParams => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    })
  }

  return (
    <main className="vans-page section-shell">
      <header className="vans-intro">
        <h1 className="page-title">
          No elegirás una furgoneta. Elegirás con cuál de ellas quieres perderte.
        </h1>
        <p className="section-subtitle">
          Explora nuestra flota de Volkswagen Combi y otras joyas restauradas.
        </p>
      </header>

      <div className="filters-container">
        <button
          onClick={() => handleFilterChange("type", "esencial")}
          className={`filter-chip ${typeFilter === "esencial" ? "is-active" : ""}`}
        >
          Esencial
        </button>

        <button
          onClick={() => handleFilterChange("type", "viajera")}
          className={`filter-chip ${typeFilter === "viajera" ? "is-active" : ""}`}
        >
          Viajera
        </button>

        <button
          onClick={() => handleFilterChange("type", "singular")}
          className={`filter-chip ${typeFilter === "singular" ? "is-active" : ""}`}
        >
          Singular
        </button>

        <button
          onClick={() => handleFilterChange("favs", favsFilter ? null : "true")}
          className={`filter-chip ${favsFilter ? "is-active" : ""}`}
        >
          {favsFilter ? "¡Todas!🤍" : "Solo Favs ❤️"}
        </button>

        <button
          onClick={() => setSearchParams({})}
          className="filter-chip filter-chip-reset"
        >
          Reset Total 🧹
        </button>
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
