interface CardProps {
  imagePath: string;
  title: string;
  rating: string;
  price: string;
  active?: string;
}

function Card({ imagePath, price, rating, title, active }: CardProps) {
  return (
    <article className={`popular-foods__card ${active}`}>
      <img className="popular-foods__card-image" src={imagePath} alt="" />
      <h4 className="popular-foods__card-title">{title}</h4>

      <div className="popular-foods__card-details">
        <div className="popular-foods__card-rating">
          <img src="src/assets/star.svg" alt="Start image" />
          <p>{rating}</p>
        </div>

        <p className="popular-foods__card-price">{price}</p>
      </div>
    </article>
  )
}

export default Card
