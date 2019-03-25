const filtersReducerDefaultState = {
  text: "",
  sortBy: "title"
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case "SEARCH_BY_TEXT":
      return {
        ...state,
        text: action.text
      };
    case "SORT_BY_TITLE":
      return {
        ...state,
        sortBy: "title"
      };
    case "SORT_BY_DATE":
      return {
        ...state,
        sortBy: "date"
      };
    default:
      return state;
  }
};

export default filtersReducer;
