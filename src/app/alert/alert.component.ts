import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.less']
})
export class AlertComponent implements OnInit {
  visible: boolean;
  dismissable: boolean;
  type: string;
  title: string;
  content: string;
  duration: number;
  private t: any;
  constructor() {
    this.alert = this.alert.bind(this);
  }
  ngOnInit() {
    this.visible = false;
    this.dismissable = false;
    this.duration = 3000;
  }

  alert(type: string, title: string, content: string, dismissable?: boolean, duration?: number): void {
      const alertDom = $('#alert');
      if ( this.t ) {
        clearTimeout(this.t);
        alertDom.hide();
      }
      alertDom.show();
      this.type = type;
      this.title = title;
      this.content = content;
      if (dismissable) {
        this.dismissable = dismissable;
      }
      if (duration) {
        this.duration = duration;
      }
      this.t = setTimeout( () => {
        $('#alert').fadeOut();
      }, this.duration );
  }

  closeAlert(): void {
    $('#alert').fadeOut();
    clearTimeout(this.t);
  }
}
