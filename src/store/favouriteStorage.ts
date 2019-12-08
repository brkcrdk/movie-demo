export const favouriteStorage = (store: any) => (next: any) => (
  action: any
) => {
  const favourite = store.getState().favourites.favMovies;
  const ids = favourite.map((movie: any) => movie.movie.id);
  if (action.type === "ADD_FAV") {
    const movie = JSON.stringify(action.payload);
    localStorage.setItem(`movie-${action.payload.movie.id}`, movie);
  }
  if (action.type === "REMOVE_FAV") {
    if (`movie-${action.payload.movie.id}` in localStorage) {
      localStorage.removeItem(`movie-${action.payload.movie.id}`);
    }
  }

  return next(action);
};
