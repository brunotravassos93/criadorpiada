import { useEffect } from "react";
import { useState } from "react";

function App() {

  const [joke, setJoke] = useState("piada aqui")

  useEffect(() => {
    
  }, [])

  const getJoke = async () => {
    const response = await fetch('https://icanhazdadjoke.com/');
  }

  return (
    <div className="container">
      <h1>Desafio: não ria!</h1>
      <p className="joke">{joke}</p>
      <button className="btn">Trocar piada</button>
    </div>
  );
}

export default App;
