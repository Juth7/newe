import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div class="top-12">
      <Link to="/home">
        <button class="relative top-12 bg-transparent hover:bg-sky-800 text-sky-300 font-semibold hover:text-white mt-12 mb-8 py-2 px-4 border border-sky-400 hover:border-transparent rounded">
          Get Pokemon
        </button>
      </Link>
    </div>
  );
}
