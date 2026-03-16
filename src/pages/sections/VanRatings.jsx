export default function VanRatings() {
  // Simulated hardcoded data for ratings
  const ratings = [
    { id: 1, user: "Laura M.", date: "15/01/2024", score: 5, comment: "La Modest Explorer fue perfecta para nuestra escapada. ¡Súper cómoda y fácil de conducir! La recomendamos al 100%." },
    { id: 2, user: "Pablo G.", date: "02/02/2024", score: 4, comment: "Alquilamos la Beach Bum. Experiencia genial, aunque la ducha exterior era un poco básica. Aun así, repetiríamos." },
    { id: 3, user: "Sophia L.", date: "28/02/2024", score: 5, comment: "The Cruiser fue una maravilla. Lujo y comodidad en cada kilómetro. El equipo de Vantastic! fue muy amable." },
    { id: 4, user: "Juan F.", date: "10/03/2024", score: 3, comment: "La Dreamfinder es básica pero funcional. Tuvimos un pequeño problema con el gas, pero lo solucionaron rápido." },
    { id: 5, user: "Elena P.", date: "22/03/2024", score: 5, comment: "Una experiencia inolvidable con la Reliable Red. Limpia, espaciosa y con todo lo necesario para vivir la van life." },
  ];

  const getStars = (score) => {
    return '⭐'.repeat(score) + '☆'.repeat(5 - score);
  };

  return (
    <div className="van-ratings-section">
      <h3>Valoraciones de Usuarios</h3>
      <div className="average-rating">
        <strong>Puntuación Media: 4.4 / 5</strong> ({ratings.length} valoraciones)
      </div>
      <div className="ratings-list">
        {ratings.map(rating => (
          <div key={rating.id} className="rating-card">
            <div className="rating-header">
              <span className="rating-user">{rating.user}</span>
              <span className="rating-date">{rating.date}</span>
            </div>
            <div className="rating-score">{getStars(rating.score)}</div>
            <p className="rating-comment">{rating.comment}</p>
          </div>
        ))}
      </div>
      <p className="no-ratings-message">¿Has alquilado esta van? ¡Comparte tu experiencia!</p>
    </div>
  )
}