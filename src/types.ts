export const Platforms = [
  "PC",
  "PlayStation",
  "Xbox",
  "iOS",
  "Android",
  "Linux",
  "Nintendo",
  "Apple Macintosh",
] as const;

type PlatformName = (typeof Platforms)[number];

export const SortTypes = ["Relevance", "Date", "Name"] as const;

// type SortType = (typeof SortTypes)[number];

interface Platform {
  platform: { name: PlatformName };
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: Platform[];
  metacritic: number;
  description: string;
  released: Date;
}

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

export interface GenreResponse {
  results: Genre[];
}
