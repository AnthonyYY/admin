import { Component, OnInit } from '@angular/core';
import {Sidebar} from '../../sidebar/sidebar';
import {CounselorService} from '../counselor.service';

@Component({
  selector: 'app-students-asset',
  templateUrl: './students-asset.component.html',
  styleUrls: ['./students-asset.component.less']
})
export class StudentsAssetComponent implements OnInit {

  contentHeader: Sidebar[];
  allStuAsset: any[];
  curStuAsset: any;
  filterStuName: string;
  constructor(
    private counselorService: CounselorService
  ) { }

  ngOnInit() {
    this.contentHeader = [
      {name: '主页', icon: 'fa-dashboard'},
      {name: '学生资产信息页', icon: 'fa-graduation-cap'}
    ];
    this.allStuAsset = [];
    this.curStuAsset = {};
    this.filterStuName = '';
    this.fetchStuAsset();
  }

  fetchStuAsset(): void {
    this.counselorService.fetchStuAsset().then( data => {
      this.allStuAsset = data;
    } );
  }

  setCurStuAsset(asset): void {
    this.curStuAsset = asset;
  }

}
