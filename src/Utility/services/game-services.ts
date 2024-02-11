import { GenreResponse } from "../../types";
import ApiClient from "./api-client";

const APIKEY = "ed60b1b092684223a9e26f642d6feca8";

type QueryParameter = { [key: string]: string | number };

class GameServices {
  APIKEY: string;

  constructor(APIKEY: string) {
    this.APIKEY = APIKEY;
  }
  /**
   *
   * @param params - A list of Query Parameters e.g. [{genre: 'adventure'}]
   * @returns {} A promise which contains the Games in 'res.data.results'
   */
  getGames(...params: QueryParameter[]) {
    const queries = params
      .map((query) => {
        if (Object.keys(query).length == 0) {
          return "";
        }
        return `&${Object.entries(query)[0].join("=")}`;
      })
      .join("");

    const promise = ApiClient.get(`/games?key=${this.APIKEY}${queries}`);
    return promise;
  }
  /**
   *
   * @returns A promise which contains a list of Genres in 'res.data.results'
   */
  getGenres() {
    const promise = ApiClient.get<GenreResponse>(`/genres?key=${this.APIKEY}`);
    return promise;
  }
}
/**
 * An object with the functionality to retrieve games and genres
 * @method getGames() Retrieves a list of Games
 * @method getGenres() Retrieves a list of Genres
 */
const GameService = new GameServices(APIKEY);

export default GameService;
