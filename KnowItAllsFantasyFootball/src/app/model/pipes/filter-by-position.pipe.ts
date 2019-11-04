/**
 * TODO: Check if this is needed and clean up
 */

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByPosition'
})
export class FilterByPositionPipe implements PipeTransform {

  transform(items: any, position: String): any {
    if(!items) return [];
    if(!position) return items;

    return items.filter(player => {
      return player.eligiblePositions.includes(position);
    })
  }

}
