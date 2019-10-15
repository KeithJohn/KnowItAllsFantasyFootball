import { Player } from './player.model';
import { PlayerStats } from './player-stats.model';

export interface FreeAgentPlayer {
    //TODO: Finish this
    //http://espn-fantasy-football-api.s3-website.us-east-2.amazonaws.com/FreeAgentPlayer.html

    player: Player;

    rawStats: PlayerStats;
    
    projectRawStats: PlayerStats;
}