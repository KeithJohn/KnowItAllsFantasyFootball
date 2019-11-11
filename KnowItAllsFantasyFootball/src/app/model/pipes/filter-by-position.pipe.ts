import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByPosition'
})
export class FilterByPositionPipe implements PipeTransform {

  transform(items: any, position: String): any {
    //Check if there are no items, or if no search position
    if(!items) return [];
    if(!position) return items;

    //filter list by search position
    return items.filter(player => {
      return player.eligiblePositions.includes(position);
    });
  
  }

}
