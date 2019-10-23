import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuickSortService {

  
  constructor() { }

  greaterThan(){
    //TODO:
  }

  lessThan(){
    //TODO:
  }

  lessThanOrEqual(){
    //TODO:
  }

  swap(items, leftIndex, rightIndex){
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
  }

  partition(items, left, right){
    var pivot = items[Math.floor((right + left) / 2)];
    var i = left;
    var j = right;

    while (i <= j){
      while (items[i] < pivot){
        i++;
      }

      while( items[j] > pivot){
        j--;
      }

      if (i <= j){
        this.swap(items, i, j);
        i++;
        j--;
      }
    }
    return i;
  }

  quickSort(items, left, right){
    
    var index;

    if (items.length > 1) {
      index = this.partition(items, left, right);
      
      if (left < index - 1) {
        this.quickSort(items, left, index - 1);
      }

      if (index < right){
        this.quickSort(items, index, right);
      }
    }

    return items;
  }

}
