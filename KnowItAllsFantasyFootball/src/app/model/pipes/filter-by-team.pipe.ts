import { Pipe, PipeTransform } from '@angular/core';
import { Player } from '../models/player.model';

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
