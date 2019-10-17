export interface PlayerStats {
    /**
     *  Number of passing yards for the player.
     */
    passingYards?: number;

    /**
     *  Number of passing touchdowns for the player.
     */
    passingTouchdowns?: number;

    /**
     *  Number of passing 2 pt conversions for the player.
     */
    passing2PtConversion?: number;

    /**
     *  Number of interceptions for the player.
     */
    passingInterceptions?: number;

    /**
     *  Number of rushing yards for the player.
     */
    rushingYards?: number;

    /**
     *  Number of rushing touchdowns for the player.
     */
    rushingTouchdowns?: number;

    /**
     *  Number of rushing 2 pt conversions for the player.
     */
    rushing2PtConversions?: number;

    /**
     *  Number of receiving yards for the player.
     */
    receivingYards?: number;

    /**
     *  Number of receiving touchdowns for the player.
     */
    receivingTouchdowns?: number;

    /**
     *  Number of receiving 2 pt conversions for the player.
     */
    receiving2PtConversions?: number;

    /**
     *  Number of receptions for the player.
     */
    receivingReceptions?: number;

    /**
     *  Number of fumbles lost for the player.
     */
    lostFumbles?: number;

    /**
     *  Number of made field goals from 50 or more yards for the player.
     */
    madeFieldGoalsFrom50Plus?: number;

    /**
     *  Number of field goals made between 40 and 49 yards for the player.
     */
    madeFieldGoalsFrom40To49?: number;

    /**
     *  Number of fields goals made from 40 or less yards for the player.
     */
    madeFieldGoalsFromUnder40?: number;

    /**
     *  Number of missed field goals for the player.
     */
    missedFieldGoals?: number;

    /**
     *  Number of extra points made for the player.
     */
    madeExtraPoints?: number;

    /**
     *  Number of extra points missed for the player.
     */
    missedExtraPoints?: number;

    /**
     *  Number of representing whether or not the team has given up 0 points.
     *  1 if yes
     */
    defensive0PointsAllowed?: number;

    /**
     *  Number of representing whether or not the team has given up 1 to 6 points.
     *  1 if yes
     */
    defensive1To6PointsAllowed?: number;

    /**
     *  Number of representing whether or not the team has given up 7 to 13 points.
     *  1 if yes
     */
    defensive7To13PointsAllowed?: number;

    /**
     *  Number of representing whether or not the team has given up 14 to 17 points.
     *  1 if yes
     */
    defensive14To17PointsAllowed?: number;

    /**
     *  Number of representing whether or not the team has given up 18 to 27 points.
     *  1 if yes
     */
    defesnive18To27PointsAllowed?: number;

    /**
     *  Number of representing whether or not the team has given up 28 to 34 points.
     *  1 if yes
     */
    defensive28To34PointsAllowed?: number;

    /**
     *  Number of representing whether or not the team has given up 35 to 45 points.
     *  1 if yes
     */
    defensive35To45PointsAllowed?: number;

    /**
     *  Number of blocked kicks for touchdowns for the team/player.
     */
    defensiveBlockedKickForTouchdowns?: number;

    /**
     *  Number of interceptions for the team/player.
     */
    defensiveInterceptions?: number;

    /**
     *  Number of forced fumbles for the team/player.
     */
    defensiveFumbles?: number;

    /**
     *  Number of blocked kicks for the team/player.
     */
    defensiveBlockedKicks?: number;

    /**
     *  Number of safteies for the team/player.
     */
    defensiveSafeties?: number;

    /**
     *  Number of sacks for the player.
     */
    defensiveSacks?: number;

    /**
     *  Number of kickoff return touchdowns for the player.
     */
    kickoffReturnTouchdown?: number;

    /**
     *  Number of punt return touchdowns for the player.
     */
    puntReturnTouchdown?: number;

    /**
     *  Number of fumble return touchdowns for the player.
     */
    fumbleReturnTouchdown?: number;

    /**
     *  Number of interception return touchdowns for the player.
     */
    interceptionReturnTouchdown?: number;

    /**
     *  Number representing whether or not a team has given up 100 - 199 yards in the game.
     *  1 if yes
     */
    defensive100To199YardsAllowed?: number;

    /**
     *  Number representing whether or not a team has given up 200 - 299 yards in the game.
     *  1 if yes
     */
    defensive200To299YardsAllowed?: number;

    /**
     *  Number representing whether or not a team has given up 300 - 349 yards in the game.
     *  1 if yes
     */
    defensive300To349YardsAllowed?: number;

    /**
     *  Number representing whether or not a team has given up 350 - 399 yards in the game.
     *  1 if yes
     */
    defensive350To399YardsAllowed?: number;

    /**
     *  Number representing whether or not a team has given up 400 - 449 yards in the game.
     *  1 if yes
     */
    defensive400To449YardsAllowed?: number;

    /**
     *  Number representing whether or not a team has given up 450 - 499 yards in the game.
     *  1 if yes
     */
    defensive450To499YardsAllowed?: number;

    /**
     *  Number representing whether or not a team has given up 500 - 549 yards in the game.
     *  1 if yes
     */
    defensive500To549YardsAllowed?: number;

    /**
     *  Number representing whether or not a team has given up 550 or more yards in the game.
     *  1 if yes
     */
    defensiveOver550YardsAllowed?: number;

    /**
     *  Boolean representing whether or not the player uses points.
     */
    usesPoints?: boolean;

}