import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeRange'
})
export class TimeRangePipe implements PipeTransform {

  transform(arr: any[], args?: any, field?: string): any {
    if(!arr || !args) return arr;
    return arr.filter(value => {
      console.log(value[ field || 'createTime'] , args.start);
      return (value[ field || 'createTime'] > args.start) && (value[field || 'createTime'] < args.end);
    });
  }

}
