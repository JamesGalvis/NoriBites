interface SectionProps {
  subtitle: string
  title: string
  description: string
  imagePath: string
  dataList: string[]
  reverse?: boolean
}

function Section({
  title,
  subtitle,
  description,
  dataList,
  imagePath,
  reverse,
}: SectionProps) {
  return (
    <section className={`trending-section ${reverse ? 'row-reverse' : ''}`}>
      <div className="trending__content">
        <p className="trending__subtitle">{subtitle}</p>
        <h3 className="trending__title">{title}</h3>
        <p className="trending__description">{description}</p>

        <ul className="trending__list">
          {dataList.map((trending) => (
            <li key={trending}>
              <div className="trending__icon">
                <img src="src/assets/check.svg" alt="Check icon" />
              </div>
              <p>{trending}</p>
            </li>
          ))}
        </ul>
      </div>

      <div
        className={`trending__image ${
          reverse ? 'trending-drinks' : 'trending-sushi'
        }`}
      >
        <img src={imagePath} alt="Sushi" />
      </div>
    </section>
  )
}

export default Section
