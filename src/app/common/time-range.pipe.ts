import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeRange'
})
export class TimeRangePipe implements PipeTransform {

  transform(arr: any[], args?: any, field?: string): any {
    if (!arr || !args ) return arr;
    return arr.filter(value => {
      return !value[field] || (value[ field || 'createTime'] > args.start) && (value[field || 'createTime'] < args.end);
    });
  }

}
