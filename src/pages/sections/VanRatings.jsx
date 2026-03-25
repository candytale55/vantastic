import { useOutletContext } from 'react-router-dom'

export default function VanRatings() {

  const { ratings } = useOutletContext(); 
  
  const getStars = (score) => {
    return '⭐'.repeat(score) + '☆'.repeat(5 - score);
  };  

  // Calculate average rating dynamically if needed 
  const averageScore = ratings.length > 0 ? (ratings.reduce((sum, rating) => sum + rating.score, 0)) / ratings.length : 0;

  return (
    <div className="van-ratings-section">
      <h3 className="ratings-title">Valoraciones de Usuarios</h3>

      <div className="average-rating">
        <strong>Puntuación Media: { averageScore.toFixed(1) } / 5</strong> ({ratings.length} valoraciones)
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