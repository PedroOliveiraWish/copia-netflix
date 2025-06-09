import { Download, PcDisplay, Search, Mask } from "react-bootstrap-icons";

import '../styles/separator/separator.css'

export default function Separator() {
  const cards = [
    {
      title: "Aproveite na TV",
      descricao:
        "Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, aparelhos de Blu-ray e outros dispositivos.",
      icon: <PcDisplay />,
    },
    {
      title: "Baixe séries para assitir offline",
      descricao:
        "Salve seus títulos favoritos e sempre tenha algo para assistir.",
      icon: <Download />,
    },
    {
      title: "Assista onde quiser",
      descricao:
        "Assista a quantos filmes e séries quiser no celular, tablet, laptop e TV.",
      icon: <Search />,
    },
    {
      title: "Crie perfis para crianças",
      descricao:
        "Deixe as crianças se aventurarem com seus personagens favoritos em um espaço feito só para elas, sem pagar a mais por isso.",
      icon: <Mask />,
    },
  ];

  const Card = (card: {
    title: string;
    descricao: string;
    icon: React.ReactNode;
  }) => {
    return (
      <div className="card-separator">
        <div className="up">
          <div className="title">{card.title}</div>
          <p>{card.descricao}</p>
        </div>
        <div className="down">{card.icon}</div>
      </div>
    );
  };

  return (
    <section className="separator">
      <div className="title">Mais motivos para assinar</div>

      <div className="cards">
        {cards.map((card) => (
          <Card {...card} />
        ))}
      </div>
    </section>
  );
}
