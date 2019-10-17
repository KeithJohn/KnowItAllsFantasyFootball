import { Player } from './player.model';
import { PlayerStats } from './player-stats.model';

export interface FreeAgent {
    /**
     *  Player information for the free agent. 
     */
    player: Player;

    /**
     *  Raw stats for the season of the free agent.
     */
    rawStats: PlayerStats;
    
    /**
     *  Projected raw stats for the season of the free agent.
     */
    projectRawStats: PlayerStats;
}