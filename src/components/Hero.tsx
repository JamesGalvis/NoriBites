import '../styles/hero.css'

function Hero() {
  return (
    <section className="hero"> 
      <div className="hero-image">
        <img src="src/assets/sushi-1.png" alt="Sushi" />
        <h2>
          日 <br /> 本 <br /> 食
        </h2>
      </div>

      <div className="hero-content">
        <div className="hero-content-info">
          <h1>Feel the taste of Japanese food</h1>
          <p>
            Feel the taste of the most popular Japanese food from anywhere and
            anytime.
          </p>

          <div className="hero-content__buttons">
            <button className="hero-content__order-button">Order Now</button>
            <button className="hero-content__play-button">
              <img src="src/assets/play-circle.svg" alt="play" />
              How to Order
            </button>
          </div>
        </div>

        <div className="hero-content__testimonial">
          <div className="hero-content__customer">
            <h4>
              24<span>k+</span>
            </h4>
            <p>Happy Customers</p>
          </div>
          <div className="hero-content__review">
            <img src="src/assets/user.png" alt="user" />
            <p>
              "This is the best Japanese food delivery service that ever
              existed."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
