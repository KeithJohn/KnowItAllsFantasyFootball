export interface League {
    //TODO: Finish this
    //http://espn-fantasy-football-api.s3-website.us-east-2.amazonaws.com/League.html

    name: string;

    size: number;

    isPublic: boolean;

    draftSettings: DraftSettings;

    rosterSettings: RosterSettings;

    scheduleSettings: LeagueMap;
}

export interface DraftSettings {
    date: Date;
    //type: DRAFT_TYPE;
    timePerPick: number;
    canTradeDraftPicks: boolean;
}

export interface LeagueMap {
    numberOfRegularSeasonMatchups: number;
    regularSeasonMatchupLength: number;
    numberOfPlayoffMatchups: number;
    playoffMatchupLength: number;
    numberOfPlayoffTeams: number;
}

export interface RosterSettings {
    
    //TODO: Create object for these
    lineupPostionCount: object;
    
    positionLimits: object;
    
    //locktime: LINEUP_LOCK_TIMES;
}