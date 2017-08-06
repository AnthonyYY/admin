import {Component, OnInit} from '@angular/core';

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
      this.visible = true;
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
        this.visible = false;
        alert(1);
      }, this.duration );
  }

  closeAlert(): void {
    this.visible = false;
    clearTimeout(this.t);
  }
}
