import './index.css'

const WinOrLoseCard = props => {
  const {details, scoreValue, onClickPlayAgainButton} = props
  const {image, desc1, desc2} = details

  const onClickPlayAgain = () => {
    onClickPlayAgainButton()
  }
  return (
    <div className="Container">
      <div className="winOrLossContainer">
        <div className="WinOrLoseImage">
          <img src={image} className="winOrLoseImage" alt="win or lose" />
        </div>
        <div className="scoreDetailsContainer">
          <h1 className="headingDesc">{desc1}</h1>
          <p className="bestScoreDesc">{desc2}</p>
          <p className="score">{scoreValue}/12</p>
          <button
            type="button"
            className="playAgainButton"
            onClick={onClickPlayAgain}
          >
            Play Again
          </button>
        </div>
      </div>
    </div>
  )
}

export default WinOrLoseCard
