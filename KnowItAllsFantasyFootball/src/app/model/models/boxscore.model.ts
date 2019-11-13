/** TODO:
 *      Check if this is needed and clean up
 *      Add additional necessary variables
 */

import { BoxscorePlayer } from './boxscore-player.model';

export interface Boxscore {
    /**
     *  Score of home team
     */

    homeScore: number;

    /**
     *  Id of home team
     */

    homeTeamId: number;

    /**
     *  Roster of the home team
     */

    homeRoster: BoxscorePlayer[]

    /**
     *  Score of away team
     */

    awayScore: number;

    /**
     *  Id of away team
     */

    awayTeamId: number;

    /**
     *  Roster of the away team
     */

    awayRoster: BoxscorePlayer[];

    /**
     * Projected score for home team
     */

    homeProjectedScore: number;

    /**
     * Projected score for away team
     */
    awayProjectedScore: number;
}
