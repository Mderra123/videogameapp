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

export interface Platform {
  platform: { name: PlatformName };
}
