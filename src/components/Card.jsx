import React from 'react'
import './card.css'
import data from '../assets/data'


// const Card = () => {
//     return (
//         <div class="playlist">
//       <div class="header">
//         <h1 class="title">{data.name}</h1>
//       </div>
//       <div class="isi">
//         <img
//           src={data.album.images[1].url}
//           alt="gambar"
//         />
//         <p class="artis">{data.artists[0].name}</p>
//         <button id="myBtn">select</button>
//         </div>
//     </div>
//     )
// }

const Song = ({Title,album,artist,images}) => (
  <div class="playlist">
      <div class="header">
        <h1 class="title">{Title}</h1>
      </div>
      <div class="isi">
        <img
          src={images}
          alt="gambar"
        />
        <p class="artis">{artist}</p>
        <p class="artis">{album}</p>
        <button id="myBtn">select</button>
      </div>
    </div>
)

const Card = () => {
  return (
      <div className="table-of-tracks">
        {data.map((data) => {
          return (
            <Song
              key={data.album.id}
              album={data.album.name}
              images={data.album.images[0].url}
              Title={data.name}
              artist={data.artists[0].name}
            />
          );
        })};
      </div>
  );
};

export default Card