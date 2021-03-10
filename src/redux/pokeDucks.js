import axios from "axios";

// Constantes
const dataInicial = {
  datos: [],
  offset: 0,
};

// Types
const OBTENER_POKES_EXITO = "OBTENER_POKES_EXITO";
const OBTENER_SIGUIENTE_POKES_EXITO = "OBTENER_SIGUIENTE_POKES_EXITO";

// Reducers
export default function pokeReducer(state = dataInicial, action) {
  switch (action.type) {
    case OBTENER_POKES_EXITO:
      return { ...state, datos: action.payload };
    case OBTENER_SIGUIENTE_POKES_EXITO:
      return {
        ...state,
        datos: action.payload.datos,
        offset: action.payload.offset,
      };
    default:
      return state;
  }
}

// Acciones
export const obtenerPokesAccion = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20"
    );
    dispatch({
      type: OBTENER_POKES_EXITO,
      payload: res.data.results,
    });
  } catch (error) {
    console.log(error);
  }
};

export const siguientePokesAccion = () => async (dispatch, getState) => {
  // console.log("getState", getState().pokes.offset);
  const siguiente = getState().pokes.offset + 20;
  try {
    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?offset=${siguiente}&limit=20`
    );
    dispatch({
      type: OBTENER_SIGUIENTE_POKES_EXITO,
      payload: {
        datos: res.data.results,
        offset: siguiente,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
