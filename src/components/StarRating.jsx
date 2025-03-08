import '../styles/StarRating.css'

export const StarRating = ({ rating }) => {
    const maxStars = 5
    const filledStars = Math.floor(rating)
    const hasHalfStar = rating % 1 >= 0.1 && rating % 1 <= 0.5
    const hasQuarterStar = rating % 1 > 0.5

    return (
        <div className="star-rating">
            <span className="rating-number"> {rating} </span>
            {[...Array(maxStars)].map((_, i) => {
                if (i < filledStars) {
                    return <span key={i} className="star full">★</span> // Estrella llena
                } else if (i === filledStars && hasHalfStar) {
                    return <span key={i} className="star half">★</span> // Media estrella
                } else if (i === filledStars && hasQuarterStar) {
                    return <span key={i} className="star quarter">★</span> // 3/4 de estrella
                } else {
                    return <span key={i} className="star empty">☆</span> // Estrella vacía
                }
            })}
        </div>
    )
}