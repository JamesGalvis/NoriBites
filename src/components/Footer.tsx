import '../styles/footer.css'

function Footer() {
  return (
    <footer className="footer">
      <h3 className="footer__logo"><span>Nori</span>Bites</h3>

      <ul className="footer__nav">
        <li><a href="">Menu</a></li>
        <li><a href="">Foods</a></li>
        <li><a href="">Services</a></li>
        <li><a href="">About Us</a></li>
      </ul>

      <ul className="footer__social">
        <li><img src="src/assets/facebook.svg" alt="Facebook logo" /></li>
        <li><img src="src/assets/instagram.svg" alt="Instagram logo" /></li>
        <li><img src="src/assets/twitter.svg" alt="Twitter logo" /></li>
      </ul>
    </footer>
  )
}

export default Footer