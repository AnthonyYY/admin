import {Component, OnInit} from '@angular/core';
import {AlertService} from './alert.service';
import {AlertArgs} from './alert-args';

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
  alertEventSubscriber;
  constructor(
    private alertService: AlertService
  ) {}
  ngOnInit() {
    this.visible = false;
    this.dismissable = false;
    this.duration = 2000;
    this.alertEventSubscriber = this.alertService.alertEventSubject.subscribe( (config:AlertArgs) => {
      this.alert(config);
    } )
  }

  alert(alertConfig: AlertArgs): void {
      const alertDom = $('#alert');
      if ( this.t ) {
        clearTimeout(this.t);
        alertDom.hide();
      }
      alertDom.show();
      Object.assign(this,alertConfig);
      this.t = setTimeout( () => {
        $('#alert').fadeOut();
      }, this.duration );
  }

  closeAlert(): void {
    $('#alert').fadeOut();
    clearTimeout(this.t);
  }
}
