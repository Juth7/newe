import React from "react";

export default function Pagination({ page, limit, setPage }) {
  const end = page * limit;
  const start = end - limit;
  const totalPokemons = 1126;
  const totalPages = Math.ceil(totalPokemons / limit);

  const previous = () => {
    setPage(page - 1);
  };

  const next = () => {
    setPage(page + 1);
  };

  return (
    <div class="inline-flex my-10">
      <button
        onClick={previous}
        disabled={page < 1}
        class="bg-gray-600 hover:bg-gray-500 text-gray-200 font-bold py-2 px-4 rounded-l"
      >
        Prev
      </button>
      <p class="font-bold p-2 text-white">
        {start + 10}-{end + 10} /{totalPokemons}
      </p>
      <button
        onClick={next}
        disabled={page >= totalPages}
        class="bg-gray-600 hover:bg-gray-500 text-gray-200 font-bold py-2 px-4 rounded-r"
      >
        Next
      </button>
    </div>
  );
}
