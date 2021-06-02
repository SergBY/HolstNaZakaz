function ReviewCard(props) {
  return (
    <div className="reviews__card">
      <div className="reviews__card--avatar">{props.avatar}</div>
      <div className="reviews__card--item">
        <div className="reviews__card-name">{props.name}</div>
        <p className="reviews__card--text">{props.text}</p>
      </div>
    </div>
  );
}

export default ReviewCard;
