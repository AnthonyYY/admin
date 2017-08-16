import {Component, Input, OnInit} from '@angular/core';
import {Sidebar} from './sidebar';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.less']
})
export class SidebarComponent {

  @Input()
  sidebarMenu: Array<Sidebar>;
  constructor() { }

}
