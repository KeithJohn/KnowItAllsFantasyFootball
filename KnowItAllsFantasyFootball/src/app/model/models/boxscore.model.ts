import { BoxscorePlayer } from './boxscore-player.model';

export interface Boxscore {
    //TODO: Finish This
    //http://espn-fantasy-football-api.s3-website.us-east-2.amazonaws.com/Boxscore.html

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

    awayRoster: BoxscorePlayer[]
}