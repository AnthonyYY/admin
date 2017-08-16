import {Component, Input, OnInit} from '@angular/core';
import {Sidebar} from '../sidebar/sidebar';

@Component({
  selector: 'app-content-header',
  templateUrl: './content-header.component.html',
  styleUrls: ['./content-header.component.less']
})
export class ContentHeaderComponent implements OnInit {
  @Input()
  menus: Array<Sidebar>;
  @Input()
  title: string;
  @Input()
  subTitle: string;
  constructor() { }
  ngOnInit() {}
}
