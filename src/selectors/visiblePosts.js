const visiblePosts = (posts, { text, sortBy }) => {
  return posts
    .filter(post => post.title.toLowerCase().includes(text.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === "title") {
        return a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1;
      }
      if (sortBy === "date") {
        return a.createdAt > b.createdAt ? -1 : 1;
      }
    });
};

export default visiblePosts;
