import Form from "react-bootstrap/Form";

import '../styles/footer/footer.css'

export default function Footer() {
  const language_options = ["Português", "English"];

  const itens = [
    "Perguntas frequentes",
    "Central de Ajuda",
    "Conta",
    "Media Center",
    "Relações com investidores",
    "Carreiras",
    "Resgatar cartão pré-pago",
    "Comprar cartão pré-pago",
    "Formas de assistir",
    "Termos de Uso",
    "Privacidade",
    "Preferências de cookies",
    "Informações corporativas",
    "Entre em contato",
    "Teste de velocidade",
    "Avisos legais",
    "Só na Netflix",
  ];

  return (
    <footer>
      <div className="title">Dúvidas? Ligue para 0800 591 2876</div>

      <div className="list-item">
        {itens.map((item) => (
          <div>{item}</div>
        ))}
      </div>

      <Form.Select style={{margin: '2rem 0'}} className="select">
        {language_options.map((language) => (
          <option value={language}>{language}</option>
        ))}
      </Form.Select>

      <div className="creditos">
        <div className="netflix" style={{marginBottom: '1rem'}}>Netflix Brasil</div>

        <p>
          Esta página é protegida pelo Google reCAPTCHA para garantir que você
          não é um robô. Saiba mais.
        </p>
      </div>
    </footer>
  );
}
