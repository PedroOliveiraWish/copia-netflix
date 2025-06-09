import FormComponent from "./form";
import Header from "./header";

import "../styles/banner/banner.css";

export default function Banner() {
  return (
    <>
      <Header />
      <section className="banner">
        <div className="body">
          <div className="title">Filmes, séries e muito mais, sem limites</div>
          <div className="call-action">
            A partir de R$20,90. Cancele quando quiser.
          </div>
          <div className="form">
            <FormComponent />
          </div>
        </div>
      </section>
    </>
  );
}
