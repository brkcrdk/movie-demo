export const localStorage = (store: any) => (next: any) => (action: any) => {
  const favourite = store.getState().favourites.favMovies;
  const ids = favourite.map((movie: any) => movie.movie.id);

  if (action.type === "ADD_FAV") {
    console.log("ad_fav");
  }
  if (action.type === "REMOVE_FAV") {
    console.log("del_fav");
  }

  return next(action);
};
