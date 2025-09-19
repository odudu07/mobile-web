import { Fragment } from "react"

const Contador = () => {

    const aumentar = () => {
        alert("Olá Rodriguinho 1");
    }

    const diminuir = () => {
        alert("Olá Rodriguinho 2");
    }

    return (
        <Fragment>
            <h1>Contador</h1>

            <section>
                <h2>resultado</h2>
                <button onClick={aumentar} style={{ marginRight: '10px' }}>Aumentar</button>
                <button onClick={diminuir}>Diminuir</button>
            </section>
        </Fragment>
    )
}

export default Contador;