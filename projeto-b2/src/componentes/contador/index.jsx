import { useState } from "react";
import "./contador.css"


const Contador = () => {
     // Iniciliza o estado com valor 0
    const [count, setCount] = useState(0)

const aumentar = () => {
    setCount(count + 1)
}

const diminuir = () => {
    setCount(count - 1)
}

return (
    <main className= "container" >
        <h1>{count}</h1>
    
        <section>
            <h2>Resultado</h2>
            <button onClick={aumentar} style={{marginRight: '10px'}}>Aumentar</button>
            <button onClick={diminuir}>Diminuir</button>
        </section>
    </main>

       
    )
}

export default Contador;