import { NumberSymbol } from '@angular/common';

export interface PlayerStats {
    //http://espn-fantasy-football-api.s3-website.us-east-2.amazonaws.com/PlayerStats.html

    passingYards?: number;

    passingTouchdowns?: number;

    passing2PtConversion?: number;

    passingInterceptions?: number;

    rushingYards?: number;

    rushingTouchdowns?: number;

    rushing2PtConversions?: number;

    receivingYards?: number;

    receivingTouchdowns?: number;

    receiving2PtConversions?: number;

    receivingReceptions?: number;

    lostFumbles?: number;

    madeFieldGoalsFrom50Plus?: number;

    madeFieldGoalsFrom40To49?: number;

    madeFieldGoalsFromUnder40?: number;

    missedFieldGoals?: number;

    madeExtraPoints?: number;

    missedExtraPoints?: number;

    defensive0PointsAllowed?: number;

    defensive1To6PointsAllowed?: number;

    defensive7To13PointsAllowed?: number;

    defensive14To17PointsAllowed?: number;

    defesnive18To27PointsAllowed?: number;

    defensive28To34PointsAllowed?: number;

    defensive35To45PointsAllowed?: number;

    defensiveBlockedKickForTouchdowns?: number;

    defensiveInterceptions?: number;

    defensiveFumbles?: number;

    defensiveBlockedKicks?: number;

    defensiveSafeties?: number;

    defensiveSacks?: number;

    kickoffReturnTouchdown?: number;

    puntReturnTouchdown?: number;

    fumbleReturnTouchdown?: number;

    interceptionReturnTouchdown?: number;

    defensive100To199YardsAllowed?: number;

    defensive200To299YardsAllowed?: number;

    defensive300To349YardsAllowed?: number;

    defensive350To399YardsAllowed?: number;

    defensive400To449YardsAllowed?: number;

    defensive450To499YardsAllowed?: number;

    defensive500To549YardsAllowed?: number;

    defensiveOver550YardsAllowed?: number;

}