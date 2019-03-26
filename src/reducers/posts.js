const postsReducerDefaultState = [];

const postsReducer = (state = postsReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_POSTS":
      return action.posts;
    case "ADD_POST":
      return [...state, action.post];
    case "EDIT_POST":
      return state.map(post => {
        if (post.id === action.id) {
          return { ...post, ...action.updates };
        }
        return post;
      });
    case "REMOVE_POST":
      return state.filter(({ id }) => id !== action.id);
    default:
      return state;
  }
};

export default postsReducer;
