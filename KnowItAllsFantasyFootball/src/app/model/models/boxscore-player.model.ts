import { Player } from './player.model';
import { PlayerStats } from './player-stats.model';

export interface BoxscorePlayer {
    //TODO: Finish this
    //http://espn-fantasy-football-api.s3-website.us-east-2.amazonaws.com/BoxscorePlayer.html
    
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
     *  Options:
     *  'QB': Quarterback
     *  //TODO: Finish this 
     */

    //TODO: Change from string to enum
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
}