import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { useQuery, gql } from "@apollo/client";
import { LOAD_POKEMON } from "./GraphQL/Queries";
import Image from "next/image";

import styles from "../styles/Card.module.css";

function Card({ infoPokemon }) {
  const { data } = useQuery(LOAD_POKEMON);
  const [pageNumber, setPageNumber] = useState(0);
  const [pokes, setPokes] = useState([]);

  const pokesPerPage = 7;
  const pagesVisited = pageNumber * pokesPerPage;

  const displayUsers = pokes
    .slice(pagesVisited, pagesVisited + pokesPerPage)
    .map((val) => {
      return (
        <div
          className={styles.itemMap}
          key={val.id}
          onClick={() => infoPokemon(val)}
        >
          <div className={styles.imgContainer}>
            <Image
              src={val.image}
              alt={val.name}
              width={44}
              height={44}
              objectFit='cover'
              className={styles.img}
            />
          </div>
          <p className={styles.number}>{val.number}</p>
          <p className={styles.name}>{val.name}</p>
        </div>
      );
    });

  useEffect(() => {
    if (data) {
      setPokes(data.pokemons);
    }
  }, [data]);

  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }

  return (
    <div className={styles.cardContainer}>
      {displayUsers}
      <ReactPaginate
        previousLabel={"Prev"}
        nextLabel={"Next"}
        pageCount={4}
        onPageChange={changePage}
        containerClassName={styles.paginationBtnsContainer}
        previousLinkClassName={styles.prevBtn}
        nextLinkClassName={styles.nextBtn}
        activeClassName={styles.activeBtn}
      />
    </div>
  );
}

export default Card;
