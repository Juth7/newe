const initialState = {
  pokemons: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_POKEMONS":
      return {
        ...state,
        pokemons: action.payload,
      };
    case "CLEAR_STATE":
      return {
        ...state,
        pokemons: [],
      };

    default:
      return { ...state };
  }
};
export default rootReducer;
