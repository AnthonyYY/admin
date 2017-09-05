import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.less']
})
export class PaginationComponent implements OnInit {

  @Input()
  curPage: number;
  @Input()
  pageSize: number;
  @Input()
  totalCount: number;
  @Output()
  changePage: EventEmitter<number> = new EventEmitter();
  pages: number[];
  constructor() { }

  ngOnInit() {
    this.curPage = this.curPage || 1;
    this.pageSize = this.pageSize || 10;
    this.totalCount = this.totalCount || 0;
    console.log(this.totalCount);
    this.pages = new Array(Math.ceil(this.totalCount / this.pageSize)).fill(0).map( (v, i) => i + 1 );
  }

  next(): void {
    if ( this.curPage + 1 < this.pages.length ) {
      this.changePageEvent(++this.curPage);
    }
  }

  prev(): void {
    if ( this.curPage - 1 > 0 ) {
      this.changePageEvent(--this.curPage);
    }
  }

  changePageEvent(pageNum): void {
    if ( typeof  pageNum !== 'number') { return; }
    if ( this.curPage !== pageNum ) {
      this.curPage = pageNum;
      this.changePage.emit(pageNum);
    }
  }
}
