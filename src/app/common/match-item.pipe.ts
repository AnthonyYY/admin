import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'matchItem'
})
export class MatchItemPipe implements PipeTransform {

  transform(value: any, filter: any, field: string, accuracy?: string): any {
    if (!value || !filter) {
      return value;
    }
    if (accuracy === 'exact' ) {
      return value.filter( val => {
        return val[field].toString() === filter;
      } );
    } else {
      return value.filter( val => {
        return (val[field] || '').indexOf(filter) > -1;
      } );
    }
  }

}
