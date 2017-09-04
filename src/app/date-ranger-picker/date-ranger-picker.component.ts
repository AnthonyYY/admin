import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-date-ranger-picker',
  templateUrl: './date-ranger-picker.component.html',
  styleUrls: ['./date-ranger-picker.component.less']
})
export class DateRangerPickerComponent implements OnInit {

  @Input()
  format: string;
  @Input()
  timePicker: boolean;
  @Input()
  startTime: number;
  @Output()
  dateRangeSetEvent: EventEmitter<{start: string, end: string}> = new EventEmitter();
  constructor() { }

  ngOnInit() {
    setTimeout( () => {
      (<any>$)('.date-range-picker').daterangepicker({
        locale: {
          applyLabel: '确定',
          cancelLabel: '取消',
          fromLabel: '起始时间',
          toLabel: '结束时间',
          customRangeLabel: '自定义',
          daysOfWeek: ['日', '一', '二', '三', '四', '五', '六'],
          monthNames: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
          firstDay: 1,
          format: this.format ||  'YYYY-MM-DD'
        },
        timePicker: this.timePicker,
        ranges: {
          '今天': [moment(), moment()],
          '昨天': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
          '本周': [moment().subtract(6, 'days'), moment()],
          '前30天': [moment().subtract(29, 'days'), moment()]
        },
        startDate: this.startTime ? moment(this.startTime).format('YYYY-MM-DD') : Date.now(),
        minDate: '1950-01-01'
      }, (start, end) => {
        this.dateRangeSetEvent.emit({ start: start.valueOf(), end: end.valueOf() });
      });
    } );
  }
}
