export interface NFLGameMap {
    //TODO: Finish this
    //http://espn-fantasy-football-api.s3-website.us-east-2.amazonaws.com/NFLGame.html

    startTime: Date;

    quarter: number;

    clock: String;

    odds: String;

    broadcaster: String;

    gameStatus: String;

    homeTeam: NFLTeam;

    awayTeam: NFLTeam;
}

export interface NFLTeam {
    id: number;

    team: String;

    teamAbbrev: String;

    record: String;

    score: number;
}