import { useRouter } from "next/router";
import Layout from "../../comps/MyLayout";
import React from "react";
import axios from "axios";
import Link from "next/link";

const pokemon = ({ pokeman }) => {
  return (
    <div>
      <h1>{pokeman.forms}</h1>
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
    </div>
  );
};

pokemon.getInitialProps = async ({ query }) => {
  const number = query.number;
  const pokeman = await axios
    .get("https://pokeapi.co/api/v2/pokemon/${number}")
    .then(response => response.data);
  console.log(pokeman);

  return { pokeman };
};

// pokemon.getInitialProps = async ({ query }) => {
//   const number = query.number;
//   const pokeman = await axios
//     .get("https://pokeapi.co/api/v2/pokemon/${number}")
//     .then(response => response.data);
//   return { pokeman };
// };

export default pokemon;
