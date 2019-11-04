/** TODO:
 *      Check if this is needed and clean up
 *      Add additional necessary variables 
 */
export interface NFLGameMap {
    /**
     *  The start time of the NFL game.
     */
    startTime: Date;

    /**
     *  The current quarter the NFL game is in.
     */
    quarter: number;

    /**
     *  The current clock the NFL game is in.
     */
    clock: String;

    /**
     *  The odds of the NFL game.
     */
    odds: String;

    /**
     *  The broadcaster of the NFL game.
     */
    broadcaster: String;

    /**
     *  The status of the NFL Game
     */
    gameStatus: String;

    /**
     *  The home team of the NFL game.
     */
    homeTeam: NFLTeam;

    /**
     *  The away team of the NFL game.
     */
    awayTeam: NFLTeam;
}

export interface NFLTeam {
    /**
     *  Id of the NFL team.
     */
    id: number;

    /**
     *  Name of the NFL team.
     */
    team: String;

    /**
     *  Abbreviation of the NFL team.
     */
    teamAbbrev: String;

    /**
     *  Record of the NFL team.
     */
    record: String;

    /**
     *  Score of the NFL team.
     */
    score: number;
}