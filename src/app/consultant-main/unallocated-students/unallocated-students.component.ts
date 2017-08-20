import { Component, OnInit } from '@angular/core';
import {ConsultantMainService} from '../consultant-main.service';
import {Sidebar} from '../../sidebar/sidebar';
import {Student} from '../student';
import {SchoolService} from '../../common/school.service';
import {School} from '../../common/school';
import {genders} from '../../common/gender';

@Component({
  selector: 'app-unallocated-students',
  templateUrl: './unallocated-students.component.html',
  styleUrls: ['./unallocated-students.component.less']
})
export class UnallocatedStudentsComponent implements OnInit {

  genders: Array<object>;
  unAllocatedStudents: any[];
  curStudent: any;
  contentHeader: Sidebar[];
  filterStuName: string;
  filterGender: string;
  filterPhone: string;
  constructor(
    private consultantService: ConsultantMainService,
  ) {
    this.addStudent = this.addStudent.bind(this);
    this.updateStuInfo = this.updateStuInfo.bind(this);
  }

  ngOnInit() {
    this.fetchUnallocatedStudents();
    this.unAllocatedStudents = [];
    this.curStudent = new Student();
    this.genders = genders;
    this.contentHeader = [
      {name: '主页', icon: 'fa-dashboard'},
      {name: '学生列表页', icon: 'fa-users'}
    ];

    this.filterStuName = '';
    this.filterGender = '';
    this.filterPhone = '';
  }

  resetCurStudent(stuId): void {
    if (stuId) {
      this.consultantService.fetchStuInfoById(stuId).then( info => {
        this.curStudent = info;
      } );
    } else {
      this.curStudent = new Student();
      this.curStudent.sex = 'MALE';
    }
  }

  fetchUnallocatedStudents(): void {
    this.consultantService.fetchUnallocatedStudents().then( data => {
      this.unAllocatedStudents = data;
      this.unAllocatedStudents.forEach( item => item.selected = false );
    } );
  }

  addStudent() {
    this.consultantService.addStudent(this.curStudent).then( data => {
      this.curStudent.id = data.id;
      this.unAllocatedStudents.push(this.curStudent);
    } );
  }
  switchGender($event): void {
    this.curStudent.sex = $event.value;
  }

  switchParentGender($event): void {
    this.curStudent.parentSex = $event.value;
  }

  switchFilterGender($event): void {
    this.filterGender = $event.value === 'ALL' ? '' : $event.value;
  }

  updateStuInfo(): void {
    this.consultantService.updateStuInfo(this.curStudent).then( (result) => {
      if (result === true) {
        const toUpdateStuIndex = this.unAllocatedStudents.indexOf(this.findStuById(this.curStudent.id));
        this.unAllocatedStudents[toUpdateStuIndex] = {...this.curStudent};
      }
    } );
  }

  findStuById(id: string): Student {
    return this.unAllocatedStudents.find( stu => stu.id === id );
  }
}
