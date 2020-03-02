import Layout from "../comps/MyLayout";
import head from "next/head";
import fetch from "isomorphic-unfetch";
import React from "react";
import axios from "axios";
import Link from "next/link";

const Home = ({ pokemon }) => (
  <div>
    <head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </head>
    <div>
      <h1>Pokedex</h1>
      {/* loop to display ALL pokemon */}
      {pokemon.map((pokeman, i) => {
        return (
          <p>
            <Link href={`/pokemon/${i + 1}`}>
              <a>
                {/* Where we are iterating through all the names */}
                {i + 1} {pokeman.name}
              </a>
            </Link>
          </p>
        );
      })}
    </div>
  </div>
);

Home.getInitialProps = async () => {
  const pokemon = await axios
    .get("https://pokeapi.co/api/v2/pokemon?limit=964")
    .then(response => response.data.results);
  return { pokemon };
};

export default Home;
