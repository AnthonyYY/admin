import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'matchItem'
})
export class MatchItemPipe implements PipeTransform {

  transform(value: any, filter: any, field: string): any {
    if(!value || !filter) return value;
    return value.filter( val => {
      return val[field].indexOf(filter) > -1;
    } );
  }

}
