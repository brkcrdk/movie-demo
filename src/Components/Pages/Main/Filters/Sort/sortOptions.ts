export const years = () => {
  const years = [];
  for (let i = 1900; i < 2021; i++) {
    years.unshift({ value: i.toString(), text: i.toString() });
  }
  return years;
};
export const voteAvg = () => {
  const voteAverage = [];
  for (let i = 0; i < 11; i++) {
    voteAverage.push({ value: i, text: i });
  }
  return voteAverage;
};
export const sortOptions = [
  {
    value: "popularity.asc",
    text: "Popularity(Asc)"
  },
  {
    value: "popularity.desc",
    text: "Popularity(Desc)"
  },
  {
    value: "primariy_release_date.asc",
    text: "Release Date(Asc)"
  },
  {
    value: "primariy_release_date.desc",
    text: "Release Date(Desc)"
  },
  {
    value: "original_title.asc",
    text: "Title(Asc)"
  },
  {
    value: "original_date.desc",
    text: "Title(Desc)"
  },
  {
    value: "vote_average.asc",
    text: "Vote Average(Asc)"
  },
  {
    value: "vote_average.desc",
    text: "Vote Average(Desc)"
  },
  {
    value: "vote_count.asc",
    text: "Vote Count(Asc)"
  },
  {
    value: "vote_count.desc",
    text: "Vote Count(Desc)"
  }
];
