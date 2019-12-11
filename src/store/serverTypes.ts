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
  runtime: number;
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
  images: {
    backdrops: ImageProps[];
    posters: ImageProps[];
  };
  videos: {
    results: VideoProps[];
  };
  similar: {
    page: number;
    results: MovieInfo[];
    totalPages: number;
    total_results: number;
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

export interface IGenre {
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

export interface ActorBio {
  adult: boolean;
  also_known_as: string[];
  biography: string;
  birthday: string;
  deathday: null | string;
  gender: number;
  homepage: string;
  id: number;
  imdb_id: string;
  known_for_department: string;
  name: string;
  place_of_birth: string;
  popularity: number;
  profile_path: string;
}
export interface ImageProps {
  aspect_ratio: number;
  file_path: string;
  height: number;
  iso_639_1: string | null;
  vote_average: number;
  vote_count: number;
  width: number;
}
export interface VideoProps {
  id: string;
  iso_639_1: string;
  iso_3166_1: string;
  key: string;
  name: string;
  site: string;
  size: number;
  type: string;
}
