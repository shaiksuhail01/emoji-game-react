import './index.css'

const NavBar = props => {
  const {scores, removeCont, topScores} = props
  return (
    <nav className="navContainer">
      <div className="emojiLogoContainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="emojiLogo"
        />
        <h1 className="navHeading">Emoji Game</h1>
      </div>
      <div className="scoreContainer">
        <p className={`navHeading scoreMargin ${removeCont}`}>
          Score: {scores}
        </p>
        <p className={`navHeading ${removeCont}`}>Top Score: {topScores}</p>
      </div>
    </nav>
  )
}

export default NavBar
