import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import CardCarousel from "./cardCarousel";

import "../styles/carousel/carousel.css";

interface Card {
  id: number;
  title: string;
  image: string;
  ano: number;
  classificacao_indicativa: string;
  options: string[];
  descricao: string;
}

export default function CarouselCards() {
  const cards: Card[] = [
    {
      id: 1,
      title: "dna do crime",
      image: "/assets/dna-crime.jpg",
      ano: 2025,
      classificacao_indicativa: "A16",
      options: ["série", "ação", "dramas"],
      descricao:
        "Nesta série explosiva inspirada em crimes reais, agentes federais usam a tecnologia para solucionar um roubo que vai além da fronteira do Brasil.",
    },
    {
      id: 2,
      title: "ginny e georgia",
      image: "/assets/ginny-georgia.jpg",
      ano: 2025,
      classificacao_indicativa: "16",
      options: ["série", "comédia", "dramas"],
      descricao:
        "Em busca de uma nova chance, Georgia leva os filhos Ginny e Austin para morar em outra cidade. Só que recomeçar do zero não é tão simples assim.",
    },
    {
      id: 3,
      title: "até a última gota",
      image: "/assets/ate-ultima-gota.jpg",
      ano: 2025,
      classificacao_indicativa: "A14",
      options: ["filme", "suspenses", "dramas"],
      descricao:
        "Até onde ela vai aguentar? Após um dia devastador, uma mãe solo dedicada chega ao seu limite e comete um ato de desespero que ninguém poderia prever.",
    },
    {
      id: 4,
      title: "transformers one",
      image: "/assets/transformers-one.jpg",
      ano: 2024,
      classificacao_indicativa: "10",
      options: ["filme", "ação", "ficção científica", "aventura"],
      descricao:
        "Optimus Prime e Megatron precisam lutar para salvar o mundo de uma ameaça maligna. Será que é possível uma aliança entre dois grandes inimigos?",
    },
    {
      id: 5,
      title: "O jogo da viúva",
      image: "/assets/jogo-da-viuva.jpg",
      ano: 2025,
      classificacao_indicativa: "A16",
      options: ["filme", "suspenses", "mistério", "dramas"],
      descricao:
        "Um homem é encontrado morto, e a investigação acaba com a fachada de perfeição da viúva, expondo uma vida dupla neste suspense baseado em uma história real.",
    },
    {
      id: 6,
      title: "você",
      image: "/assets/voce.jpg",
      ano: 2025,
      classificacao_indicativa: "18",
      options: ["série", "suspenses", "drama"],
      descricao:
        "Um homem obsessivo e perigosamente charmoso vai ao extremo para entrar na vida das mulheres que o fascinam.",
    },
    {
      id: 7,
      title: "fé para o impossível",
      image: "/assets/fe-para-impossivel.jpg",
      ano: 2025,
      classificacao_indicativa: "12",
      options: ["filme", "dramas"],
      descricao:
        "Neste drama baseado em uma história real, um ataque violento deixa a esposa de um pastor em coma. Arrasado, o homem mobiliza uma grande corrente de orações.",
    },
    {
      id: 8,
      title: "Mikaela",
      image: "/assets/mikaela.jpg",
      ano: 2025,
      classificacao_indicativa: "A14",
      options: ["filme", "ação", "suspenses", "dramas"],
      descricao:
        "Quando uma nevasca bloqueia uma estrada, uma gangue de ladrões aproveita para roubar um carro-forte, estragando a noite de um policial que só queria chegar em casa.",
    },
    {
      id: 9,
      title: "K.O.",
      image: "/assets/ko.jpg",
      ano: 2025,
      classificacao_indicativa: "A16",
      options: ["filme", "ação", "dramas"],
      descricao:
        "Um ex-lutador precisa encontrar o filho desaparecido de um adversário que matou acidentalmente há vários anos. Para isso, ele vai ter que encarar uma gangue violenta.",
    },
    {
      id: 10,
      title: "má influência",
      image: "/assets/ma-influencia.jpg",
      ano: 2025,
      classificacao_indicativa: "A14",
      options: ["filme", "suspenses", "romance", "dramas"],
      descricao:
        "Um ex-presidiário recebe a chance de recomeçar ao ser contratado para proteger uma rica herdeira de um perseguidor. Difícil vai ser resistir à química entre eles.",
    },
  ];

  const [cardsPerSlide, setCardsPerSlide] = useState(5);

  // useEffect to handle window resize events
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsPerSlide(3); // 3 cards for screens smaller than 768px
      } else {
        setCardsPerSlide(5); // 5 cards for screens 768px and larger
      }
    };

    // Set initial cardsPerSlide on component mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const groupCardsIntoSlides = (data: Card[], cardsPerSlide: number) => {
    const slides = [];
    for (let i = 0; i < data.length; i += cardsPerSlide) {
      slides.push(data.slice(i, i + cardsPerSlide));
    }
    return slides;
  };

  const slides = groupCardsIntoSlides(cards, cardsPerSlide);

  return (
    <div className="container-carousel">
      <div className="title">Em alta</div>
      <Carousel interval={null} controls={true} indicators={false}>
        {slides.map((slide, slideIndex) => (
          <Carousel.Item key={slideIndex}>
            <div
            className="wrap-carousel"
            >
              {slide.map((card) => (
                <CardCarousel key={card.id} {...card} />
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
