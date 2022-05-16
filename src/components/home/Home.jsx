import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons, clearState } from "../../redux/actions";
import PokemonCard from "../pokemonCard/PokemonCard";
import Pagination from "../pagination/Pagination";

export default function Home() {
  const dispatch = useDispatch();
  const { pokemons } = useSelector((state) => state);

  const [page, setPage] = useState(1);
  const limit = 10;

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getPokemons(limit, page));
    return () => {
      dispatch(clearState());
    };
  }, [dispatch, page]);

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(getPokemons(limit, page));
    setPage(1);
  };

  return (
    <div>
      <div class="mt-10 ">
        <button
          class="bg-transparent hover:bg-sky-800 text-sky-300 font-semibold hover:text-white mt-12 mb-8 py-2 px-4 border border-sky-400 hover:border-transparent rounded"
          onClick={handleClick}
        >
          Get Pokemon
        </button>
      </div>
      <Pagination page={page} limit={limit} setPage={setPage} />
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mt-5 ">
        {pokemons?.map((pokemon) => (
          <PokemonCard
            key={pokemon.name}
            name={pokemon.name}
            image={pokemon.sprites.front_default}
            moves={pokemon.moves.map((move) => move.move.name)}
          />
        ))}
      </div>
      <Pagination page={page} limit={limit} setPage={setPage} />
    </div>
  );
}
