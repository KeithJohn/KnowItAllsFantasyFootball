/** TODO:
 *      Check if this is needed and clean up
 *      Add additional necessary variables
 */

import { Player } from './player.model';
import { PlayerStats } from './player-stats.model';

export interface BoxscorePlayer {
    /**
     *  Player Information
     */
    player: Player;

    /**
     *  Breakdown of points for the player
     */
    pointBreakdown: PlayerStats;

    /**
     *  Position of the player in Lineup
     */
    position: String;

    /**
     * Projected breakdown of points for the player
     */
    projectedPointBreakdown: PlayerStats;

    /**
     *  Projected Raw stats
     */
    projectedRawStats: PlayerStats;

    /**
     *  Actual Raw Stats
     */
    rawStats: PlayerStats;

    /**
     * Total Points scored by the player
     */
    totalPoints: number;

    /**
     *  Total projected points scored by the player
     */
    totalProjPoints: number;
}
