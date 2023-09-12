import '../styles/subscription.css'

function Subscription() {
  return (
    <section className="subscription">
      <h2>
        Get offers stright <br /> to your inbox
      </h2>
      <p>Sign up for the NoriBites newsletter</p>
      <div className="subscription__form">
        <input type="text" placeholder="Enter yout email address" />
        <button>Get Started</button>
      </div>
    </section>
  )
}

export default Subscription
