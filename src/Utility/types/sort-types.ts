export const SortTypes = ["Relevance", "Date", "Name"];

export interface Platform {
  id: number;
  name: string;
}

export interface ParentPlatform {
  platform: Platform;
}

export interface PlatformResponse {
  results: Platform[];
}
