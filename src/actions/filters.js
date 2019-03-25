export const searchByText = (text = "") => ({
  type: "SEARCH_BY_TEXT",
  text
});

export const sortByTitle = () => ({
  type: "SORT_BY_TITLE"
});

export const sortByDate = () => ({
  type: "SORT_BY_DATE"
});
