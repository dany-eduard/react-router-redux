import axios from "axios";

// Constantes
const dataInicial = {
  datos: [],
};

// Types
const OBTENER_POKES_EXITO = "OBTENER_POKES_EXITO";

// Reducers
export default function pokeReducer(state = dataInicial, action) {
  switch (action.type) {
    case OBTENER_POKES_EXITO:
      return { ...state, datos: action.payload };

    default:
      return state;
  }
}

// Acciones
export const obtenerPokesAccion = () => async (dispatch, getState) => {
  try {
    const res = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?offset=0&limit=50"
    );
    dispatch({
      type: OBTENER_POKES_EXITO,
      payload: res.data.results,
    });
  } catch (error) {
    console.log(error);
  }
};
