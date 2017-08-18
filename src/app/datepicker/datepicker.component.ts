import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import * as moment from "moment";

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.less']
})
export class DatepickerComponent implements OnInit {

  @Input()
  placeholder: string;
  @Input()
  birthday: number;
  @Output()
  birthdayChange = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    let that = this;
    setTimeout( () => {
      (<any>$)('#datepicker')
        .datepicker({
          language: 'zh-CN',
          format: 'yyyy-MM-dd',
          startDate: moment(this.birthday).format('yyyy-MM-dd')
        })
        .on('changeDate', function(e) {
          that.birthdayChange.emit(e)
        })
    } );
  }
}
