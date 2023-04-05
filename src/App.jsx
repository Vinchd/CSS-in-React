import React from "react";
import "./App.scss";
import "./components/CardSong.jsx";
import CardSong from "./components/CardSong.jsx";

const songs = [
  {
    title: "Roxanne",
    artist: "The Police",
    year: 1978,
    img: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51aBt1Nv8tL._SY355_.jpg",
    lien: "https://www.youtube.com/watch?v=3T1c7GkzRQQ",
  },
  {
    title: "Lose Yourself",
    artist: "Eminem",
    year: 2002,
    img: "https://i.discogs.com/7Np65u1Kcsfl_9YekVKkMSpO3NuJJa4Uym6SQDmfCRk/rs:fit/g:sm/q:90/h:467/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE4NTg1/NjEtMTI0ODI4MTAz/Ny5qcGVn.jpeg",
    lien: "https://www.youtube.com/watch?v=_Yhyp-_hX2s",
  },
  {
    title: "La Foule",
    artist: "Edith Piaf",
    year: 1958,
    img: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/41PedF9eoJL.jpg",
    lien: "https://www.youtube.com/watch?v=Fgn8gZHJZzA",
  },
  {
    title: "Sliding Doors",
    artist: "Nilufer Yanya",
    year: 2017,
    img: "https://media.pitchfork.com/photos/593ed47af5a38a73d63aa2b6/1:1/w_450%2Cc_limit/89a8ed9a.jpg",
    lien: "https://www.youtube.com/watch?v=bkA25uqi66w",
  },
  {
    title: "Taedium",
    artist: "SEB",
    year: 2021,
    img: "https://i.ytimg.com/vi/umoPU_LzF5A/maxresdefault.jpg",
    lien: "https://www.youtube.com/watch?v=umoPU_LzF5A",
  },
  {
    title: "I Can't Go On Without You",
    artist: "Kaleo",
    year: 2015,
    img: "https://i.scdn.co/image/ab67616d0000b273f793a842c1642b09a768a63b",
    lien: "https://www.youtube.com/watch?v=jfNOdsvMke4",
  },
  {
    title: "You Don't Even Know Me",
    artist: "Faouzia",
    year: 2019,
    img: "https://images.genius.com/25a8da516e98728a12d071dc8a1c8d4a.500x500x1.jpg",
    lien: "https://www.youtube.com/watch?v=VaBRY6PYNLI",
  },
];
function App() {
  return (
    <>
      <header>
        <h1>Music Discover</h1>
      </header>
      <div className="content">
        {songs.map((song, index) => (
          <CardSong key={index} {...song} />
        ))}
      </div>
    </>
  );
}

export default App;
