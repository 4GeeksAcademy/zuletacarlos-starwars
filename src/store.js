export const initialStore = () => {
  return {
    message: null,
    people: [],
    planets: [],
    vehicles: [],
    favorites: []
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {

    case 'load_people':
      return {
        ...store,
        people: action.payload
      };

    case 'load_planets':
      return {
        ...store,
        planets: action.payload
      };

    case 'load_vehicles':
      return {
        ...store,
        vehicles: action.payload
      };

    case 'add_favorite':

      const exists = store.favorites.some(item => item.uid === action.payload.uid);

      if (exists) {
        return store;
      }

      return {
        ...store,
        favorites: [...store.favorites, action.payload]
      };

    case 'remove_favorite':

      return {
        ...store,
        favorites: store.favorites.filter(item => item.uid !== action.payload.uid)
      };

    default:
      throw Error('Unknown action.');
  }
}

export const loadPeople = async (dispatch) => {
  try {
    const res = await fetch("https://www.swapi.tech/api/people/");
    const data = await res.json();
    dispatch({ type: 'load_people', payload: data.results });
  } catch (error) {
    console.error("Error loading people:", error);
  }
};

export const loadPlanets = async (dispatch) => {
  try {
    const res = await fetch("https://www.swapi.tech/api/planets/");
    const data = await res.json();
    dispatch({ type: 'load_planets', payload: data.results });
  } catch (error) {
    console.error("Error loading planets:", error);
  }
};

export const loadVehicles = async (dispatch) => {
  try {
    const res = await fetch("https://www.swapi.tech/api/vehicles/");
    const data = await res.json();
    dispatch({ type: 'load_vehicles', payload: data.results });
  } catch (error) {
    console.error("Error loading vehicles:", error);
  }
};