import React from 'react';
import estiloCard from './Card.module.css';

function Card() {
  return (
    <div className={estiloCard.odin}>
      <div className={estiloCard.cardContainer}>
        <div className={estiloCard.card}>
          <h1 className={estiloCard.titulo}>Título</h1>
          <img 
            src="https://cdn.selectgame.net/wp-content/uploads/2012/12/Assassins-Creed-Revelations-Animus-Ezio.jpg" 
            alt="imagem" 
            className={estiloCard.img} 
          />
          <p className={estiloCard.texto}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae provident eos consequatur facilis ab officia veniam labore nesciunt fuga mollitia ea odit officiis perspiciatis nisi cum, illo voluptatem sed harum!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
