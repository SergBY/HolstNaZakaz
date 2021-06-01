function ReviewCard(props) {
  return (
    <>
      {props.card.map(link => {
        return (
          <>
            <div className="reviews__card">
              <div className="reviews__card--avatar">{link.avatar}</div>
              <div className="reviews__card--item">
                <div className="reviews__card-name">{link.name}</div>
                <p className="reviews__card--text">{link.text}</p>
              </div>
            </div>
          </>
        )
      })}
    </>
  );
}

export default ReviewCard;