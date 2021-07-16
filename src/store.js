import API from "./API";
const initialState = {
  title: "Countries List",
  searchTerm: "",
  loading: false,
  countries: [],
  sortType: "asc",
  sortBy: "name",
};
export const actions = {
  searchTermChanged(searchTerm) {
    return {
      type: "SEARCH_TERM_CHANGED",
      searchTerm,
    };
  },
  getCountries(searchTerm) {
    console.log(searchTerm);
    return {
      type: "COUNTRY",
      payload: API.search(searchTerm),
    };
  },
  getLandingPage() {
    return {
      type: "COUNTRY",
      payload: API.search(),
    };
  },
  countrySort(sortType, sortBy) {
    return {
      type: "SORT",
      sortType,
      sortBy,
    };
  },
};
export function reducer(state = initialState, action) {
  switch (action.type) {
    case "SEARCH_TERM_CHANGED": {
      return {
        ...state,
        searchTerm: action.searchTerm,
      };
    }
    case "COUNTRY_PENDING": {
      return {
        ...state,
        loading: true,
        countries: [],
      };
    }
    case "COUNTRY_FULFILLED": {
      return {
        ...state,
        loading: false,
        countries: action.payload,
      };
    }
    case "SORT": {
      return {
        ...state,
        sortType: action.sortType,
        sortBy: action.sortBy,
      };
    }
    default:
      return state;
  }
}
