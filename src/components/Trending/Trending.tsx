import '../../styles/trending.css'
import { trendingSushis, trendingDrinks } from '../../constants'
import Section from './Section'

function Trending() {
  return (
    <section className="trending">
      <Section
        subtitle="What’s Trending / トレンド"
        title="Japanese Sushi"
        description="Feel the taste of the most delicious Sushi here."
        imagePath="src/assets/sushi-5.png"
        dataList={trendingSushis}
      />

      <div className="trending__discover">
        <p>Discover</p>
      </div>

      <Section
        reverse
        subtitle="What’s Trending / トレンド"
        title="Japanese Drinks"
        description="Feel the taste of the most delicious Japense drinks here."
        imagePath="src/assets/sushi-4.png"
        dataList={trendingDrinks}
      />
    </section>
  )
}

export default Trending
