export const addPost = post => ({
  type: "ADD_POST",
  post
});

export const editPost = (id, updates) => ({
  type: "EDIT_POST",
  id,
  updates
});

export const removePost = id => ({
  type: "REMOVE_POST",
  id
});
