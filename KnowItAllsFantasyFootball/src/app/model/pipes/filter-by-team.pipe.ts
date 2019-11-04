/**
 * TODO: Check if this is needed and clean up
 */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByTeam'
})
export class FilterByTeamPipe implements PipeTransform {

  transform(items: any, teamId: number): any[] {
    if(!items) return [];
    if(!teamId) return items;

    return items.filter(player => {
      return (player.teamId == teamId);
    })
  }

}
