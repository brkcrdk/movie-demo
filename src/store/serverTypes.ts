export interface IDetail {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: {} | null;
  budget: number;
  genres: {
    id: number;
    name: string;
  }[];
  homepage: string | null;
  id: number;
  imdb_id: string | null;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  production_companies: {
    name: string;
    id: number;
    logo_path: string;
    origin_country: string;
  }[];
  production_countries: {
    iso_639_1: string;
    name: string;
  }[];
  status: string;
  tagline: string | null;
  video: boolean;
  vote_average: number;
  vote_count: number;
  credits: {
    cast: Cast[];
  };
}

export interface Cast {
  cast_id: number;
  character: string;
  credit_id: string;
  gender: number;
  id: number;
  name: string;
  order: number;
  profile_path: string;
}

export interface Genre {
  id: number;
  name: string;
}
export interface Keywords {
  id: number;
  name: string;
}
export interface MovieInfo {
  popularity: number;
  vote_count: number;
  video: boolean;
  poster_path: string;
  id: number;
  adult: boolean;
  backdrop_path: string;
  original_language: string;
  original_title: string;
  genre_ids: number[];
  title: string;
  vote_average: number;
  overview: string;
  release_date: string;
}

export interface MovieList {
  results: MovieInfo[];
  page: number;
  total_results: number;
  dates?: {
    maximum: string;
    minimum: string;
  };
  total_pages: number;
}
