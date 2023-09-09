import Filter from './Filter'
import Card from './Card'

function Popular() {
  return (
    <section className="popular-foods">
      <h2 className="popular-foods__title">Popular Foods / 人気</h2>

      <div className="popular-foods__filters hide__scrollbar">
        <button className="popular-foods__filter-btn active">All</button>
        <Filter text="Sushi" imagePath="src/assets/sushi-9.png" />
        <Filter text="Ramen" imagePath="src/assets/sushi-8.png" />
        <Filter text="Udon" imagePath="src/assets/sushi-7.png" />
        <Filter text="Danggo" imagePath="src/assets/sushi-6.png" />
        <button className="popular-foods__filter-btn">All</button>
      </div>

      <div className="popular-foods__cataloge">
        <Card
          imagePath="src/assets/sushi-12.png"
          title="Chezu Sushi"
          rating="4.9"
          price="$21.00"
        />
        <Card
          active="active-card"
          imagePath="src/assets/sushi-11.png"
          title="Original Sushi"
          rating="5.0"
          price="$19.00"
        />
        <Card
          imagePath="src/assets/sushi-10.png"
          title="Ramen Legendo"
          rating="4.7"
          price="$13.00"
        />
      </div>

      <button className="popular-foods__button">
        Explore Food
        <img src="src/assets/arrow-right.svg"  alt="arrow-right" />
      </button>
    </section>
  )
}

export default Popular
