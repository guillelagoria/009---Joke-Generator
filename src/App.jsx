import React, { useEffect, useState } from "react";
import "./App.css";

export const App = () => {
  const [joke, setJoke] = useState();
  const [firstJoke, setfirstJoke] = useState(true);
  
  const clickJoke = () => {
    generateJoke().then((data) => setJoke(data));
    setfirstJoke(false);
  };

  const generateJoke = async () => {
    // In case we need a header for the API
    // const config = {
    //   headers: {
    //     Accept: 'application/json',
    //   },
    // };

    const res = await fetch(
      "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"
    );

    const data = await res.json();
    return data.joke;
  };

  // useEffect(() => {
  //   generateJoke().then((data) => setJoke(data));
  // }, []);

  return (
    <>
      <body>
        <div className="container">
          <h3>Don't Laugh Challenge</h3>
          <div className="joke">{joke}</div>
          <button className="btn" onClick={clickJoke}>
            {firstJoke ? 'Click for a Joke' : 'Click for another joke'}
          </button>
        </div>
      </body>
    </>
  );
};

export default App;
