import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";

import Card from "react-bootstrap/Card";
import { ChevronRight } from "react-bootstrap-icons";

interface CardProps {
  id: number;
  title: string;
  image: string;
  ano: number;
  classificacao_indicativa: string;
  options: string[];
  descricao: string;
}

export default function CardCarousel({
  id,
  title,
  image,
  ano,
  classificacao_indicativa,
  options,
  descricao,
}: CardProps) {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const openedCard = (
    <div className="container-card-open">
      <div className="card-open">
        <div
          className="card-header"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.8)), url(${image})`,
          }}
        >
          <button className="close-button" onClick={() => setIsOpen(true)}>
            &times;
          </button>
        </div>

        <div className="card-body">
          <h2 className="card-title">{title}</h2>

          <div className="card-options">
            <span className="badge">{ano}</span>
            <span className="badge">{classificacao_indicativa}</span>
            {options.map((option, index) => (
              <span key={index} className="badge">
                {option}
              </span>
            ))}
          </div>

          <p className="card-description">{descricao}</p>
          <button className="card-button">
            Vamos lá <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );

  const style = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    cursor: "pointer",
  };

  return (
    <div>
      {isOpen ? (
        <Card
          onClick={() => setIsOpen(false)}
          style={style}
          className="card-close"
        >
          <Card.Body>
            <Card.Title>
              <div className="id">{id}</div>
            </Card.Title>
          </Card.Body>
        </Card>
      ) : (
        createPortal(openedCard, document.body)
      )}
    </div>
  );
}
