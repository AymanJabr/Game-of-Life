import { GET_UPDATED_COUNTRIES_STATISTICS, GET_UPDATED_WORLD_STATISTICS } from '../actions/index';

const initialState = {
  worldwide: {},
  countries: [],
};

export default function statisticsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_UPDATED_WORLD_STATISTICS:

      return {

        ...state,
        worldwide:
          action.worldwide,

      };

    case GET_UPDATED_COUNTRIES_STATISTICS:

      return {

        ...state,
        countries:
          action.countries,

      };

    default:
      return state;
  }
}
