export interface MoviesHttpResult {
  page: number
  results?: Movie[]
  total_results: number
  total_pages: number
}

export interface Movie {
  poster_path: string
  adult: boolean
  overview: string
  release_date: string
  genre_ids?: number[]
  id: number
  original_title: string
  original_language: string
  title: string
  backdrop_path: string
  popularity: number
  vote_count: number
  video: boolean
  vote_average: number
  poster_url: string
  isFavorite?: boolean
}

export interface MovieDetailHttpResult {
  adult: boolean
  backdrop_path: string
  belongs_to_collection: any
  budget: number
  genres: Genre[]
  homepage: string
  id: number
  imdb_id: string
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: any
  production_companies: ProductionCompany[]
  production_countries: ProductionCountry[]
  release_date: string
  revenue: number
  runtime: number
  spoken_languages: SpokenLanguage[]
  status: string
  tagline: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
  poster_url?: string
}

interface Genre {
  id: number
  name: string
}

interface ProductionCompany {
  id: number
  logo_path?: string
  name: string
  origin_country: string
}

interface ProductionCountry {
  iso_3166_1: string
  name: string
}

interface SpokenLanguage {
  iso_639_1: string
  name: string
}
