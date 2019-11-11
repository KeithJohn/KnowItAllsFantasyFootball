import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByName'
})
export class FilterByNamePipe implements PipeTransform {

  transform(items: any, searchText: string): any[] { 
    //Check if there are no items, or if no search text
    if(!items) return [];
    if(!searchText) return items;

    //filter list by lowercase search text
    searchText = searchText.toLowerCase();
    return items.filter(player =>{
      return player.fullName.toLowerCase().includes(searchText);
    });

  }
  
}
