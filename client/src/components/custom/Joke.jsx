import React, { useState, useEffect } from "react";
import axios from "axios";

function Joke() {
  const [joke, setJoke] = useState([]);

  useEffect(() => {
    getJoke();
  }, []);

  const options = {
    method: "GET",
    url: "https://dad-jokes.p.rapidapi.com/random/joke",
    // url: "https://api.humorapi.com/jokes/search",
    // url: "https://api.humorapi.com/jokes/search?api-key=8472b9af310a4bd5a03aee9c68d52ab3&keywords=knock,knock",
    headers: {
      "X-RapidAPI-Key": "7308f7f1e7msha052c124a967225p1f646fjsn97d356c5ce58",
      "X-RapidAPI-Host": "dad-jokes.p.rapidapi.com",
    },
    // headers: {
    //   "api-key": "8472b9af310a4bd5a03aee9c68d52ab3",
    // },
  };

  async function getJoke() {
    await axios
      .request(options)
      .then(function (res) {
        //
        console.log(res.data.body[0]);
        const data = res.data.body[0];
        setJoke(data);
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  const { _id, setup, punchline } = joke;
  return (
    <div>
      <header className="jokes-header">
        <h1>Joke: {_id}</h1>
      </header>
      <main>
        <h2>{setup}</h2>
        <p>
          <em>{punchline}</em>
        </p>
      </main>
    </div>
  );
}

export default Joke;
