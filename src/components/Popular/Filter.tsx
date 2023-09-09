interface FilterProps {
  active?: string;
  text: string;
  imagePath: string;
}

function Filter({ active, text, imagePath }: FilterProps) {
  return (
    <button className={`popular-foods__filter-btn ${active}`}>
      <img src={imagePath} alt="Popular product" />
      {text}
    </button>
  )
}

export default Filter