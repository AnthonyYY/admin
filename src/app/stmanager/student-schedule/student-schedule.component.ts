import { Component, OnInit } from '@angular/core';
import {StmanagerService} from '../stmanager.service';
import {Sidebar} from '../../sidebar/sidebar';

@Component({
  selector: 'app-student-schedule',
  templateUrl: './student-schedule.component.html',
  styleUrls: ['./student-schedule.component.less']
})
export class StudentScheduleComponent implements OnInit {

  contentHeader: Sidebar[];
  schedule: any[];
  //当前值字段
  curScheduleId: string;
  //过滤器字段
  filterStuName: string;
  filterCourseName: string;
  filterScheduleState: string;
  filterTimeRange: {
    start: number,
    end: number
  };

  constructor(
    private stmanagerService: StmanagerService
  ) {
    this.finishSchedule = this.finishSchedule.bind(this);
    this.delSchedule = this.delSchedule.bind(this);
  }

  ngOnInit() {
    this.contentHeader = [
      {name: '主页', icon: 'fa-dashboard'},
      {name: '学生课表管理页', icon: 'fa-graduation-cap'}
    ];
    this.schedule = [];
    this.curScheduleId = '';
    this.filterStuName = '';
    this.filterCourseName = '';
    this.filterScheduleState = '';
    this.filterTimeRange = {
      start: new Date(new Date().getFullYear() + '-01-01').getTime(),
      end: Infinity
    };
    this.fetchStuSchedule();
  }
  /* 展示课程列表 */
  // 获取学生课程列表
  fetchStuSchedule() {
    this.stmanagerService.fetchStuSchedule().then( schedule => this.schedule = schedule );
  }
  // 筛选课程列表(课程完成状态筛选)
  changeFilterScheduleState($event): void{
      this.filterScheduleState = $event.value === 'ALL' ? '': $event.value;
  }
  // 筛选课程列表 课程上课时间筛选
  handleTimeRangeChange($event): void {
    this.filterTimeRange = {
      start: $event.start,
      end: $event.end,
    };
  }

  /* 编辑课程列表 */
  finishSchedule(): void {
    this.stmanagerService.finishSchedule(this.curScheduleId).then( success => {
      if (success) {
        this.findScheduleById(this.curScheduleId).finish = true;
      }
    } )
  }
  //搜索该课程
  findScheduleById(id): any {
    return this.schedule.find( item => item.courseScheduleStudentId === id );
  }
  //取消某个课程
  delSchedule(){
    const curSchedule = this.findScheduleById(this.curScheduleId);
    this.stmanagerService.cancelRegisterSchedule(curSchedule.courseScheduleId, curSchedule.studentId).
    then( () => {
      const curScheduleIndex = this.schedule.indexOf(curSchedule);
      this.schedule.splice(curScheduleIndex, 1);
    } )
  }
}
