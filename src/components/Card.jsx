import React from 'react'
import './card.css'
import data from '../assets/data'

const Card = () => {
    return (
        <div class="playlist">
      <div class="header">
        <h1 class="title">{data.name}</h1>
      </div>
      <div class="isi">
        <img
          src={data.album.images[1].url}
          alt="gambar"
        />
        <p class="artis">{data.artists[0].name}</p>
        <button id="myBtn">select</button>
        </div>
    </div>
    )
}

export default Card