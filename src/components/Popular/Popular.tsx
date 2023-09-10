import Filter from './Filter'
import Card from './Card'

import { filtersData, PopularCards } from '../../constants'

function Popular() {
  return (
    <section className="popular-foods">
      <h2 className="popular-foods__title">Popular Foods / 人気</h2>

      <div className="popular-foods__filters hide__scrollbar">
        <button className="popular-foods__filter-btn active">All</button>
        {
          filtersData.map(filter => (
            <Filter {...filter} />
          ))
        }
        <button className="popular-foods__filter-btn">All</button>
      </div>

      <div className="popular-foods__cataloge">
        {
          PopularCards.map(card => (
            <Card {...card} />
          ))
        }
      </div>

      <button className="popular-foods__button">
        Explore Food
        <img src="src/assets/arrow-right.svg"  alt="arrow-right" />
      </button>
    </section>
  )
}

export default Popular
