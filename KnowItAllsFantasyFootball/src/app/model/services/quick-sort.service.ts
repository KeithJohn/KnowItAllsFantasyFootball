import { Injectable } from '@angular/core';
import { SortType } from '../enums/sort-type.enum';

@Injectable({
  providedIn: 'root'
})
export class QuickSortService {

  sortType: SortType;
  
  constructor() { }

  greaterThan(lhs, rhs): boolean{
    console.log('Greater Than ' + lhs + ' ' + rhs);
    if(typeof lhs === 'number' && typeof rhs === 'number'){
      return lhs <= rhs;
    }
    
    switch(this.sortType) {
      case SortType.AvgAuctionValue: {
        return lhs.auctionVauleAverage > rhs.auctionVauleAverage; 
      }
      case SortType.TransactionTrends: {
        return Math.abs(lhs.percentChange) > Math.abs(rhs.percentChange);
      }
      default: {
        return lhs > rhs;
      }
    }
  }

  lessThan(lhs, rhs): boolean{
    console.log('Less Than ' + lhs + ' ' + rhs) ;
    if(typeof lhs === 'number' && typeof rhs === 'number'){
      return lhs <= rhs;
    }

    switch(this.sortType) {
      case SortType.AvgAuctionValue: {
        return lhs.auctionVauleAverage < rhs.auctionVauleAverage; 
      }
      case SortType.TransactionTrends: {
        return Math.abs(lhs.percentChange) < Math.abs(rhs.percentChange);
      }
      default: {
        return lhs < rhs;
      }
  }
}

  lessThanOrEqual(lhs, rhs):boolean{
    console.log('Less Than Or Equal ' + lhs + ' ' + rhs);
    if(typeof lhs === 'number' && typeof rhs === 'number'){
      return lhs <= rhs;
    }

    switch(this.sortType) {
      case SortType.AvgAuctionValue: {
        return lhs.auctionVauleAverage <= rhs.auctionVauleAverage; 
      }
      case SortType.TransactionTrends: {
        return Math.abs(lhs.percentChange) <= Math.abs(rhs.percentChange);
      }
      default: {
        return lhs <= rhs;
      }
    }
  }

  swap(items, leftIndex, rightIndex){
    console.log('Swapping: ' + items[leftIndex] + " " + items[rightIndex]);
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
  }

  partition(items, left, right){
    var pivot = items[Math.floor((right + left) / 2)];
    var i = left;
    var j = right;

    while (this.lessThanOrEqual(i, j)){
      while (this.lessThan(items[i], pivot)){
        i++;
      }

      while(this.greaterThan(items[j], pivot)){
        j--;
      }

      if (this.lessThanOrEqual(i, j)){
        this.swap(items, i, j);
        i++;
        j--;
      }
    }
    return i;
  }

  quickSort(items, left, right){
    console.log('Quick Sort Enter');
    
    var index;

    if (items.length > 1) {
      console.log('Partitioning');
      index = this.partition(items, left, right);
      if (left < index - 1) {
        this.quickSort(items, left, index - 1);
      }

      if (index < right){
        this.quickSort(items, index, right);
      }
    }
    console.log('Quick Sort Exit');
    
    return items;
  }

}
