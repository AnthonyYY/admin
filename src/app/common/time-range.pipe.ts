import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeRange'
})
export class TimeRangePipe implements PipeTransform {

  transform(arr: any[], args?: any): any {
    if(!arr || !args) return arr;
    return arr.filter(value => {
      return (value.createTime > args.start) && (value.createTime < args.end);
    });
  }

}
