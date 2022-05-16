import React from "react";

export default function PokemonCard({ name, image, moves }) {
  return (
    <div class="flex justify-center">
      <div class="rounded-lg shadow-lg bg-cyan-900 max-w-md">
        <div className="flex justify-center ">
          <img src={image} alt="" className="h-75 w-75 rounded-lg " />
        </div>
        <div class="p-4 divide-y ">
          <h1 class=" text-sky-200 text-xl font-medium mb-2">
            {name[0].toUpperCase() + name.slice(1)}
          </h1>
          <p class="text-sm font-small mt-5 text-sky-100">Movements</p>
          <div class="p-4">
            {moves?.map((move) => (
              <span
                class=" inline-block px-1 py-1 m-0.5 bg-cyan-600 text-white font-small text-xs leading-tight rounded shadow-md hover:bg-cyan-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-700 active:shadow-lg transition duration-150 ease-in-out"
                key={move}
              >
                {" "}
                {move[0].toUpperCase() + move.slice(1)}{" "}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
