import { ParentPlatform } from "./sort-types";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: ParentPlatform[];
  metacritic: number;
  description: string;
  released: Date;
}
