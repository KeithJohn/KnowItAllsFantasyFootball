import { Player } from './player.model';

export interface Team {
    /**
     *  Id of the fantasy football team.
     */
    id: number;

    /**
     *  Abbreviation of the fantasy football team.
     */
    abbreviation: String;
    
    /**
     * Name of the fantasy football team.
     */
    name: String;

    /**
     *  Url for the logo of the fantasy football team.
     */
    logoURL: String;

    /**
     *  Roster of the fantasy football team. 
     */
    roster: Player[];

    /**
     *  Number of wins for the fantasy football team.
     */
    wins: number;

    /**
     *  Number of loses for the fantasy football team.
     */
    losses: number;

    /**
     *  Number of ties for the fantasy football team.
     */
    ties: number;

    /**
     *  Number of division wins for the fantasy football team.
     */
    divisionWins: number;

    /**
     *  Number of division loses for the fantasy football team.
     */
    divisionLosses: number;

    /**
     *  Number of division ties for the fantasy football team.
     */
    divisionTies: number;

    /**
     *  Number of home wins for the fantasy football team.
     */
    homeWins: number;

    /**
     *  Number of home losses for the fantasy football team.
     */
    homeLosses: number;

    /**
     *  Number if home ties for the fantasy footbal team.
     */
    homeTies: number;

    /**
     *  Number of away wins for the fantasy football team.
     */
    awayWins: number;

    /**
     *  Number of away loses for the fantasy football team.
     */
    awayLoses: number;

    /**
     *  Number of away ties for the fantasy football team.
     */
    awayTies: number;

    /**
     *  Total points scored by the fantasy football team.
     */
    totalPointsScored: number;

    /**
     *  Number of regular season points scored by the fantasy football team.
     */
    regularSeasonPointsFor: number;

    /**
     *  Number of regular season points allowed by the fantasy football team.
     */
    regularSeasonPointsAgainst: number;

    /**
     *  Winning percentage of the fantasy football team.
     */
    winningPercentage: number;

    /**
     *  The playoff seed of the fantasy football team. 
     */
    playoffSeed: number;

    /**
     *  Position in the final standings for the fantasy football team.
     */
    finalStandingsPosition: number;

    /**
     *  Id of the league.
     */
    leagueId: number;
}