import { Player } from './player.model';

export interface Team {
    //TODO: finish this
    //http://espn-fantasy-football-api.s3-website.us-east-2.amazonaws.com/Team.html#~TeamMap
    id: number;

    abbreviation: String;

    name: String;

    logoURL: String;

    wavierRank: number;

    roster: Player[];

    wins: number;

    losses: number;

    ties: number;

    divisionWins: number;

    divisionLosses: number;

    divisionTies: number;

    homeWins: number;

    homeLosses: number;

    homeTies: number;

    awayWins: number;

    awayLoses: number;

    awayTies: number;

    totalPointsScored: number;

    regularSeasonPointsFor: number;

    regularSeasonPointsAgainst: number;

    winningPercentage: number;

    playoffSeed: number;

    finalStandingsPosition: number;
}