import { DraftType } from '../enums/draft-type.enum';

export interface League {
    
    /**
     *  Name of the league
     */

    name: string;

    /**
     *  Number of teams in the league 
     */

    size: number;

    /**
     *  Boolean representing whehter or not the league is public. 
     */

    isPublic: boolean;

    /**
     *  Draft settins for the league
     */

    draftSettings: DraftSettings;

    /**
     *  Roster settings for the league
     */

    rosterSettings: RosterSettings;

    /**
     *  Schedule settings for the league
     */

    scheduleSettings: ScheduleSettings;
}

export interface DraftSettings {
    /**
     *  Date of the draft. 
     */
    
    date: Date;
    
    /**
     *  Type of the draft.
     *  Options:
     *      Offline 
     *      Snake
     *      Autopick
     *      Snail
     *      Auction
     */
    
    type: DraftType;
    
    /**
     *  Time allowed for each pick. 
     */
    
    timePerPick: number;
    
    /**
     *  Boolean representing whether or not teams can trade draft picks.
     */

    canTradeDraftPicks: boolean;
}

export interface ScheduleSettings {
    /**
     *  Number of regular season matchups for the season.
     */
    
    numberOfRegularSeasonMatchups: number;
    
    /**
     *  Number of weeks one regular season matchup lasts.
     */
    
    regularSeasonMatchupLength: number;
    
    /**
     *  Number of matchups during the league playoffs.
     */
    
    numberOfPlayoffMatchups: number;
    
    /**
     *  Number of weeks one playoff matchup lasts.
     */
    
    playoffMatchupLength: number;
    
    /**
     *  Number of teams that will make the playoffs.
     */
    
    numberOfPlayoffTeams: number;
}

export interface RosterSettings {
    /**
     *  Number of roster spots in a lineup.
     */
    
    lineupPostionCount: PositionCount;
    
    /**
     *  The maximum number of players a team can have for a given position.
     */

    positionLimits: PositionCount;
}

export interface PositionCount{
    Bench: number;
    CB: number;
    DST: number;
    DB: number; 
    DE: number 
    DP: number; 
    DT: number; 
    HC: number;  
    IR: number; 
    LB: number;   
    OP: number;  
    P: number;   
    QB: number;  
    RB: number;  
    RBWR?: number;  
    RBWRTE?: number;  
    S: number;  
    TE: number;  
    TQB: number;  
    Unknown?: number;  
    WR: number;  
    WRTE?: number;  
}