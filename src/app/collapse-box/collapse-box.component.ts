import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-collapse-box',
  templateUrl: './collapse-box.component.html',
  styleUrls: ['./collapse-box.component.less']
})
export class CollapseBoxComponent implements OnInit {

  @Input()
  collapse: boolean;
  @Input()
  icon: string;
  @Input()
  boxTitle: string;
  constructor() { }

  ngOnInit() { }

}
