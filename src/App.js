import { useEffect } from "react";
import { useState } from "react";

function App() {

  const [joke, setJoke] = useState("jokes here")

  useEffect(() => {
    getJoke()
  }, []);

  const getJoke = async () => {
    const response = await fetch("https://icanhazdadjoke.com/", {
      headers: {
        "Accept": "application/json",
      },
    });
    const data = await response.json();
    setJoke(data.joke);
  }

  return (
    <div className="container">
      <h1>Don't laugh challenge</h1>
      <p className="joke">{joke}</p>
      <button className="btn" onClick={getJoke}>Get another joke</button>
    </div>
  );
}

export default App;
