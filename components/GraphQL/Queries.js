import { gql } from "@apollo/client";

export const LOAD_POKEMON = gql`
  {
    pokemons(first: 28) {
      id
      number
      name
      image
      classification
      weight {
        minimum
        maximum
      }
      height {
        minimum
        maximum
      }
    }
  }
`;
