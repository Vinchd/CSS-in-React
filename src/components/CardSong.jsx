function CardSong({ title, artist, year, img, lien }) {
  return (
    <div className="content-card">
      <h2>{title}</h2>
      <div className="img-content">
        <img src={img} alt={title} />
      </div>
      <div className="song-info">
        <h3>{artist}</h3>
        <p>{year}</p>
      </div>
      <div className="player">
        <ion-icon name="bookmark-outline"></ion-icon>
        <a href={lien} target="_blank">
          <ion-icon name="play-outline"></ion-icon>
        </a>

        <ion-icon name="share-social-outline"></ion-icon>
      </div>
    </div>
  );
}

export default CardSong;
