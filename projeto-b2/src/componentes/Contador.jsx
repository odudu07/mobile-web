import {Fragment} from 'react'

const Contador = () => {

const aumentar = () => {
    alert ("Olá Rodrigo")
}

const Diminuir = () => {
    alert("Olá Rodrigo")
}

return (
    <Fragment>
        <h1>contador</h1>
    
        <section>
            <h2>Resultado</h2>
            <button onClick={aumentar} style={{marginRight: ´10px´}}>Aumentar</button>
            <button onClick={diminuir}>Diminuir</button>

            </Fragment>
        </section>
   
       
    )
}

export default app;