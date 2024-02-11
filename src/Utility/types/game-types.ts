import { Platform } from "./sort-types";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: Platform[];
  metacritic: number;
  description: string;
  released: Date;
}
