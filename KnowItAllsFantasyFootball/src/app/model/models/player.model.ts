export interface Player {
    //TODO: Finish this
    //http://espn-fantasy-football-api.s3-website.us-east-2.amazonaws.com/Player.html

    /**
     * Availability status of the player
     * Options:
     *  'ONTEAM': Currently on a team
     */

    //TODO: change to an enum
    availabilityStatus: String

    /**
     * Default position of the player
     */
    //TODO: Change to an enum
    defaultPosition: String

    /**
     * Eligible Positions of the player
     */
    //TODO: Maybe change the class to an enum
    //eligiblePositions: PlayerPosition[];

    /**
     *  First name of the player
     */

    firstName: String;

    /**
     *  Full name of the player
     */

    fullName: String;

    /**
     *  Id of the player
     */

    id: number;

    /**
     * Injury status of the player
     */
    //TODO: Change to an enum
    injuryStaus: String;

    /**
     *  Boolean representing whether or not the player is droppable
     */

    isDroppable: boolean;
    
    /**
     *  Boolean representing whether or not the player is injured
     */

    isInjured: boolean;

    /**
     * Jersey Number of the player. May not be used anymore
     */

    jerseyNumber?: number;

    /**
     *  Last Name of the player
     */

    lastName: String;

    /**
     * Professional team that the player is on
     */

    proTeam: String;

    /**
     *  Abbreviation of the professional team that the player is on
     */

    proTeamAbbreviation: String;

    /**
     *  Id of the season the player info is from
     */

    seasonId: number;

}