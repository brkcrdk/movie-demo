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
}
