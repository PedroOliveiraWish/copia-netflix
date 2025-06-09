import Form from "react-bootstrap/Form";

export default function Header() {
  const language_options = ["Português", "English"];

  return (
    <header>
      <div className="logo">netflix</div>

      <nav>
      <Form.Select style={{margin: '2rem 0'}} className="select">
        {language_options.map((language) => (
          <option value={language}>{language}</option>
        ))}
      </Form.Select>

        <div className="button-entrar">
            <button>Entrar</button>
        </div>
      </nav>
    </header>
  );
}
