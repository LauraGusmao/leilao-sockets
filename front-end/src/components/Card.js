import React, { useState, useEffect } from "react";
import socket from '../utils/socket';

function ProductCard({ id, name, image, bids }) {
  const [currentBids, setCurrentBids] = useState(bids);
  const [bidButton, setBidButton] = useState(false);

  useEffect(() => {
    socket.on("refreshBids", (products) => {
      if (products._id === id) setCurrentBids(products.bid);
      if (products._id === id && products.bid >= 100) setBidButton(true)
    });
  }, [id]);

  const handleClick = () => {
    socket.emit("increaseBids", { id });
  };

  return (
    <div>
      <img src={image} alt={name} width="200" />
      <h3>{name}</h3>
      <p>{`Lançes: R$${currentBids}`}</p>
      <button onClick={handleClick} disabled={bidButton}> { bidButton ? "Produto Arrematado" : "Dar um lançe"}</button>
    </div>
  );
}

export default ProductCard;
