import Header from "./componentes/Header";
import Banner from "./componentes/Banner";
import ImgCard from "./componentes/ImgCard";
import Button from "./componentes/Button";
import img1 from "./assets/img-card1.jpg";
import img2 from "./assets/img-card2.jpg";
import img3 from "./assets/img-card3.jpg";
import "./App.css";

function App() {

  const handleClick = () => {
    alert("testes");
  }

  return (
    <main className="container">
      <Header title="Meu site" />
      <Banner>
        <h1>Bem vindo ao meu site</h1>
        <p>Aqui você encontra as melhores ofertas</p>
      </Banner>

      <ImgCard 
        caption="Uma imagem interessante" 
        imagem={img1}
        texto="Lorem ipsum Popeto"
      />

      <ImgCard 
        caption="Popeto" 
        imagem={img2}
        texto="Popeto New"
      />

      <ImgCard 
        caption="Caio do Futebol" 
        imagem={img3}
        texto="Popeto Popeto LDU"
      />

      <Button text="Clique aqui" onclick={handleClick} />
    </main>
  )
}

export default App
