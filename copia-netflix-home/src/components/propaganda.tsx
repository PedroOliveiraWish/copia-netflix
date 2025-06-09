import '../styles/propaganda/propaganda.css'

export default function Propaganda() {
    return (
        <section className="propaganda">
            <div className="image">
                <img src="/assets/pipoca.png" alt="pipoca de cinema" />
            </div>

            <div className="card-propaganda">
                <div className="text">
                    <div className="title">A Netflix que você adora por apenas R$20,90.</div>
                    <div className="sub-title">Aproveite nossa opção mais acessível, o plano com anúncios.</div>
                </div>

                <div className="call-action">
                    <button>Saiba mais</button>
                </div>
            </div>
        </section>
    )
}