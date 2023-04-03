import React, { useState, useEffect } from "react";
import axios from "axios";
// env variables:
const URL = import.meta.env.VITE_RAPID_API_URL;
const KEY = import.meta.env.VITE_RAPID_API_KEY;
const HOST = import.meta.env.VITE_RAPID_API_HOST;

function Joke() {
  const [joke, setJoke] = useState([]);

  useEffect(() => {
    getJoke();
  }, []);

  const options = {
    method: "GET",
    url: `${URL}`,
    headers: {
      "X-RapidAPI-Key": `${KEY}`,
      "X-RapidAPI-Host": `${HOST}`,
    },
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
