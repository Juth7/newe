import axios from "axios";

export const getPokemons = (limit = 10, num = 1) => {
  return async (dispatch) => {
    try {
      const page = num * limit;
      const json = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${page}`
      );
      const pokemons = json.data.results.map(
        async (pokemon) => await axios.get(pokemon.url)
      );
      const info = await Promise.all(pokemons).then((res) =>
        res.map((pokemon) => pokemon.data)
      );
      dispatch({
        type: "GET_POKEMONS",
        payload: info,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export function clearState(payload) {
  return {
    type: "CLEAR_STATE",
    payload,
  };
}
