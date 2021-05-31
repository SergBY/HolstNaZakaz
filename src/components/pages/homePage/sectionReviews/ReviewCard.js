function ReviewCard(props) {
  return (
    <>
      {props.card.map(link => {
        return (
          <>
            <div class="reviews__card">
              <div class="reviews__card--avatar">{link.avatar}</div>
              <div class="reviews__card--item">
                <div class="reviews__card-name">{link.name}</div>
                <p class="reviews__card--text">{link.text}</p>
              </div>
            </div>
          </>
        )
      })}
    </>
  );
}

export default ReviewCard;