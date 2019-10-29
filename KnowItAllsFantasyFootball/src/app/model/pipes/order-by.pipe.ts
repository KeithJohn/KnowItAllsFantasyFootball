import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  static _orderByComparator(a:any, b:any):number{
    console.log(a);
    console.log(b);
    
    if(((isNaN(parseFloat(a)) || !isFinite(a)) && a ) || ((isNaN(parseFloat(b)) || !isFinite(b) && b))){
      if(a.toLowerCase() < b.toLowerCase()) return -1;
      if(a.toLowerCase() > b.toLowerCase()) return 1;
    }else{
      if(Math.abs(parseFloat(a)) < Math.abs(parseFloat(b))) return -1;
      if(Math.abs(parseFloat(a)) > Math.abs(parseFloat(b))) return 1;
    }

    return 0;
  }

  transform(input: any, config:any): any {
    if(!config){
      return input;
    }
    if(!Array.isArray(input)) return input;
    //console.log(config);
    if(!Array.isArray(config) || (Array.isArray(config) && config.length == 1)){
      //console.log(config);
      var propertyToCheck:string = !Array.isArray(config) ? config : config[0];
      var desc = propertyToCheck.substr(0, 1) == '-';
      
      //Basic array
      if(!propertyToCheck || propertyToCheck == '-' || propertyToCheck == '+'){
        return !desc ? input.sort() : input.sort().reverse();
      }else{
        var property: string = propertyToCheck.substr(0, 1) == '+' || propertyToCheck.substr(0, 1) == '-' ? propertyToCheck.substr(1) : propertyToCheck;

        return input.sort(function(a: any, b:any){
          //console.log(property);
          //console.log(propertyToCheck);
          console.log(a);
          return !desc ? OrderByPipe._orderByComparator(a[property], b [property]): -OrderByPipe._orderByComparator(a[property], b[property]);
        });
      }
    }else{
      //Loop over property of the array in order and sort
      return input.sort(function(a:any, b:any){
        for(var i:number = 0; i < config.length; i++){
          var desc = config[i].substr(0, 1) == '-';
          var property = config[i].substr(0, 1) == '+' || config[i].substr(0, 1) == '-' ? config[i].substr(1) : config[i];

          console.log('Sorting ' + a + " " + b);
          var comparison = !desc ? OrderByPipe._orderByComparator(a[property], b[property]) : -OrderByPipe._orderByComparator(a[property], b[property]);

          //Don't return 0 yet in case of needing to sort by next property
          if(comparison != 0) return comparison;
        }
        return 0; //equal each other
      });
    }
  }
}