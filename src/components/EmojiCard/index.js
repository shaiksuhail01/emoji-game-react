import './index.css'

const EmojiCard = props => {
  const {emojiDetails, onClickEmoji} = props
  const {id, emojiName, emojiUrl} = emojiDetails
  const onClickEmojiItem = () => {
    onClickEmoji(id)
  }
  return (
    <li className="emojiItem">
      <button type="button" className="emojiButton" onClick={onClickEmojiItem}>
        <img src={emojiUrl} alt={emojiName} className="emojiItemImage" />
      </button>
    </li>
  )
}
export default EmojiCard
