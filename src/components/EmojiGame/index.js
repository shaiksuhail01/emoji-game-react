import {Component} from 'react'

import NavBar from '../NavBar'

import EmojiCard from '../EmojiCard'

import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

const winDetails = {
  image: 'https://assets.ccbp.in/frontend/react-js/won-game-img.png',
  desc1: 'You Won',
  desc2: 'Best Score',
}
const looseDetails = {
  image: 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png',
  desc1: 'You Lose',
  desc2: 'Score',
}
class EmojiGame extends Component {
  state = {
    score: 0,
    topScore: 0,
    emojiClickedList: [],
    winOrLoose: '',
    showEmojis: '',
  }

  onClickEmoji = id => {
    const {emojiClickedList} = this.state
    const isIdPresent = emojiClickedList.includes(id)
    if (isIdPresent === false) {
      this.setState(prevState => ({
        emojiClickedList: [...prevState.emojiClickedList, id],
        score: prevState.score + 1,
      }))
    } else {
      this.setState({winOrLoose: 'loose'})
    }

    this.setState({showEmojis: 'no'})
  }

  onClickPlayAgainButton = () => {
    const {score} = this.state
    this.setState({topScore: score})
    this.setState({score: 0, emojiClickedList: [], winOrLoose: ''})
    this.setState({showEmojis: 'yes'})
  }

  render() {
    const {score, topScore, winOrLoose, showEmojis} = this.state
    const shuffledEmojisList = () => {
      const {emojisList} = this.props
      return emojisList.sort(() => Math.random() - 0.5)
    }

    let showCont
    let removeCont
    if (score === 12) {
      removeCont = 'removePage'
    } else if (winOrLoose === 'loose') {
      removeCont = 'removePage'
    }

    if (showEmojis === 'yes') {
      showCont = 'showPage'
    }

    return (
      <div className="emojiGameContainer">
        <NavBar scores={score} removeCont={removeCont} topScores={topScore} />
        <ul className={`emojiCardListContainer ${removeCont} ${showCont}`}>
          {shuffledEmojisList().map(eachItem => (
            <EmojiCard
              key={eachItem.id}
              emojiDetails={eachItem}
              onClickEmoji={this.onClickEmoji}
            />
          ))}
        </ul>
        {score === 12 ? (
          <WinOrLoseCard
            details={winDetails}
            scoreValue={score}
            onClickPlayAgainButton={this.onClickPlayAgainButton}
          />
        ) : (
          ''
        )}
        {winOrLoose === 'loose' ? (
          <WinOrLoseCard
            details={looseDetails}
            scoreValue={score}
            onClickPlayAgainButton={this.onClickPlayAgainButton}
          />
        ) : (
          ''
        )}
      </div>
    )
  }
}

export default EmojiGame
