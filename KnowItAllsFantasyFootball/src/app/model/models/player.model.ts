import { AvailabilityStatus } from '../enums/availability-status.enum';
import { InjuryStatus } from '../enums/injury-status.enum';

export class Player {
  teamId: number;
  /**
   * Availability status of the player.
   * Options:
   *  'ONTEAM': Currently on a fantasy team
   *  'FREEAGENT': Currently a fantasy free agent
   *  'NONE': Unavailable in fantasy
   */
  availabilityStatus: AvailabilityStatus

  /**
   * Default position of the player.
   */
  defaultPosition: String

  /**
   * Eligible Positions of the player.
   */
  eligiblePositions: String[];

  /**
   *  First name of the player.
   */
  firstName: String;

  /**
   *  Full name of the player.
   */
  fullName: String;

  /**
   *  Id of the player.
   */
  id: number;

  /**
   * Injury status of the player.
   * Options:
   *  'ACTIVE'
   *  'BEREAVEMENT' 
   *  'DAY_TO_DAY'
   *  'DOUBTFUL'
   *  'FIFTEEN_DAY_DL' 
   *  'INJURY_RESERVE' 
   *  'OUT' 
   *  'PATERNITY' 
   *  'PROBABLE' 
   *  'QUESTIONABLE' 
   *  'SEVEN_DAY_DL' 
   *  'SIXTY_DAY_DL' 
   *  'SUSPENSION'
   *  'TEN_DAY_DL'   
   */
  injuryStaus: InjuryStatus;

  /**
   *  Boolean representing whether or not the player is droppable.
   */
  isDroppable: boolean;
  
  /**
   *  Boolean representing whether or not the player is injured.
   */
  isInjured: boolean;

  /**
   * Jersey Number of the player. May not be used anymore.
   */
  jerseyNumber?: number;

  /**
   *  Last Name of the player.
   */
  lastName: String;

  /**
   * Professional team that the player is on.
   */
  proTeam: String;

  /**
   *  Abbreviation of the professional team that the player is on.
   */
  proTeamAbbreviation: String;

  /**
   *  Id of the season the player info is from.
   */
  seasonId: number;

  /**
   *  Average auction value of the player.
   */
  auctionVauleAverage?: number; 

  /**
   *  Average position the player was drafted.
   */
  averageDraftPosition?: number;

  /**
   *  Percent of change in terms of adding or dropping from teams. 
   *    If the player was added the number will be positive, negative if dropped. 
   */
  percentChange?: number;

  /**
   *  Percent of leagues in which the player is owned.
   */
  percentOwned?: number;

  /**
   * Percentage of leagues in which a team starts this player.
   */
  percentStarted?: number;
  teamName: String;

  getPosition(): String{
    if(this.eligiblePositions.includes("QB")){
      return "QB";
    }else if(this.eligiblePositions.includes("RB")){
      return "RB";
    }else if(this.eligiblePositions.includes("WR")){
      return "WR";
    }else if(this.eligiblePositions.includes("TE")){
      return "TE";
    }else if(this.eligiblePositions.includes("D/ST")){
      return "D/ST";
    }else if(this.eligiblePositions.includes("K")){
      return "K";
    }
  }
  
}
