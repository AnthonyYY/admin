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
  birthday: any;
  @Output()
  birthdayChange = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    setTimeout( () => {
      (<any>$)('#datepicker')
        .datepicker({
          format: 'yyyy-MM-dd',
          startDate: moment(this.birthday).format('yyyy-MM-dd')
        })
        .on('changeDate', function(e) {
          console.log(e);
          this.birthdayChange.emit(e)
        });
    } );
  }
}
