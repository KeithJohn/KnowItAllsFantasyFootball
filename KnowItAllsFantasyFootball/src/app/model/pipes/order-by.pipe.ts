import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  static _orderByComparator(a:any, b:any):number{
    //If a is not a number, compare as string. Else compare as float.
    if(((isNaN(parseFloat(a)) || !isFinite(a)) && a ) || ((isNaN(parseFloat(b)) || !isFinite(b) && b))){
      if(a.toLowerCase() < b.toLowerCase()) return -1;
      if(a.toLowerCase() > b.toLowerCase()) return 1;
    }else{
      if(Math.abs(parseFloat(a)) < Math.abs(parseFloat(b))) return -1;
      if(Math.abs(parseFloat(a)) > Math.abs(parseFloat(b))) return 1;
    }
    
    return 0; //equal each other
  }

  transform(input: any, config:any): any {
    //If no order by config return same input
    if(!config){
      return input;
    }

    //If input is not an array return same input;
    if(!Array.isArray(input)) return input;

    if(!Array.isArray(config) || (Array.isArray(config) && config.length == 1)){
      //Only 1 property to sort by

      //Get property by which to sort the array of objects by.
      var propertyToCheck:string = !Array.isArray(config) ? config : config[0];
      //Get whether to sort by descending or not.
      var desc = propertyToCheck.substr(0, 1) == '-';
      
      if(!propertyToCheck || propertyToCheck == '-' || propertyToCheck == '+'){
        //Basic array. Sort by default value.
        return !desc ? input.sort() : input.sort().reverse();
      }else{
        //Sort by specific property
        
        //Get property without +,- prefix.
        var property: string = propertyToCheck.substr(0, 1) == '+' || propertyToCheck.substr(0, 1) == '-' ? propertyToCheck.substr(1) : propertyToCheck;
        
        //Sort by property using comparator
        return input.sort(function(a: any, b:any){
          return !desc ? OrderByPipe._orderByComparator(a[property], b [property]): -OrderByPipe._orderByComparator(a[property], b[property]);
        });

      }
    }else{
      //Sort by each property in order.

      return input.sort(function(a:any, b:any){
        //Loop over property of the array in order and sort
        for(var i:number = 0; i < config.length; i++){
          var desc = config[i].substr(0, 1) == '-';
          var property = config[i].substr(0, 1) == '+' || config[i].substr(0, 1) == '-' ? config[i].substr(1) : config[i];
          var comparison = !desc ? OrderByPipe._orderByComparator(a[property], b[property]) : -OrderByPipe._orderByComparator(a[property], b[property]);

          //Don't return 0 yet in case of needing to sort by next property
          if(comparison != 0) return comparison;
        }
        return 0; //equal each other
      });

    }

  }
  
}
