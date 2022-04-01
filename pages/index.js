import React, { useState } from "react";
import Head from "next/head";
import LoginPage from "../components/LoginPage";
import PokedexPage from "../components/PokedexPage";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";

export default function Home() {
  const adminUser = {
    email: "user@email.com",
    password: "password123",
  };

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    if (
      details.email == adminUser.email &&
      details.password == adminUser.password
    ) {
      setUser({
        name: details.name,
        email: details.email,
      });
      setError("");
    } else {
      setError("Invalid Login...");
    }
  };

  const errorLink = onError(({ graphqlErrors }) => {
    if (graphqlErrors) {
      graphqlErrors.map(({ message }) => {
        alert(`Graphql error ${message}`);
      });
    }
  });

  const link = from([
    errorLink,
    new HttpLink({ uri: "https://graphql-pokemon2.vercel.app/" }),
  ]);

  const Logout = () => {
    setUser({ name: "", email: "" });
  };

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: link,
  });

  return (
    <ApolloProvider client={client}>
      <main>
        <Head>
          <title>Pokedex</title>
          <meta name='description' content='Pokedex by Chris Ware' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        {user.email != "" ? (
          <PokedexPage onClick={Logout} />
        ) : (
          <LoginPage Login={Login} error={error} />
        )}
      </main>
    </ApolloProvider>
  );
}
