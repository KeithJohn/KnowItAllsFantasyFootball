import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByTeam'
})
export class FilterByTeamPipe implements PipeTransform {

  transform(items: any, teamId: number): any[] {
    //Check if there are no items, or if no search team Id
    if(!items) return [];
    if(!teamId) return items;

    //filter list by search team Id
    return items.filter(player => {
      return (player.teamId == teamId);
    });
    
  }

}
