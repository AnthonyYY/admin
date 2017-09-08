import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paging'
})
export class PagingPipe implements PipeTransform {

  transform(arr: any, page: number, pageSize?: number): any {

    if (!arr || !page) {
      return;
    }

    pageSize = pageSize || 10;
    return arr.slice((page - 1) * pageSize, page * pageSize );
  }

}
