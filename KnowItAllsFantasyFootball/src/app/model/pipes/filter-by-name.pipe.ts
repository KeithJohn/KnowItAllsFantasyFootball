/**
 * TODO: Check if this is needed and clean up
 */

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByName'
})
export class FilterByNamePipe implements PipeTransform {

  transform(items: any, searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;

    searchText = searchText.toLowerCase();

    return items.filter(player =>{
      return player.fullName.toLowerCase().includes(searchText);
    });
  }

}