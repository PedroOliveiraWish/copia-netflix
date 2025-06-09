import { ChevronRight } from "react-bootstrap-icons";

import "../styles/form/form.css";

export default function FormComponent() {
  return (
    <form className="form">
      <div className="form-title">
        <p>
          Quer assistir? Informe seu email para criar ou reiniciar sua
          assinatura.
        </p>
      </div>

      <div className="form-field">
        <input type="email" placeholder="Email" className="email-input"/>
        <button type="submit">
          Vamos lá <ChevronRight />
        </button>
      </div>
    </form>
  );
}
