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
  schools: School[];
  counselors: any[];
  assignedSchool: any;
  assignedCounselor: any;
  assignedCounselorInfo: any;
  filterStuName: string;
  filterGender: string;
  filterPhone: string;
  constructor(
    private consultantService: ConsultantMainService,
    private schoolService: SchoolService
  ) {
    this.addStudent = this.addStudent.bind(this);
    this.assignStudentToCounselor = this.assignStudentToCounselor.bind(this);
    this.updateStuInfo = this.updateStuInfo.bind(this);
  }

  ngOnInit() {
    this.fetchUnallocatedStudents();
    this.fetchSchoolList();
    this.unAllocatedStudents = [];
    this.curStudent = new Student();
    this.assignedCounselorInfo = {totalStudentNum: '', signNum: '', totalMoney: ''};
    this.genders = genders;
    this.contentHeader = [
      {name: '主页', icon: 'fa-dashboard'},
      {name: '学生列表页', icon: 'fa-users'}
    ];

    this.filterStuName = '';
    this.filterGender = '';
    this.filterPhone = '';
  }

  fetchSchoolList(): void {
    this.schoolService.fetchSchoolList().then( schools => {
      this.schools = [];
      schools.forEach( (school) => {
        this.schools.push( {text: school.name, ...school} );
      } );
      if (this.schools.length) {
        this.assignedSchool = this.schools[0];
        this.fetchCounselorsBySchoolId();
      }
    } );
  }

  fetchCounselorsBySchoolId(): void {
    const schoolId = (<any>this.assignedSchool).id;
    this.consultantService.fetchCounselorsBySchoolId(schoolId, 'CONSULTANT').then( counselors => {
      this.counselors = [];
      counselors.forEach( counselor => {
        this.counselors.push( {
          id: counselor.id,
          text: counselor.name
        } );
      } );
      if (this.counselors.length) {
        this.assignedCounselor = this.counselors[0];
        this.fetchCounselorInfo(this.assignedCounselor.id);
      } else {
        this.assignedCounselor = null;
        this.assignedCounselorInfo = null;
      }
    } );
  }

  fetchCounselorInfo(employeeId): void {
    this.consultantService.fetchCounselorStat(employeeId).then( data => {
      console.log(data[0]);
      this.assignedCounselorInfo = data[0];
    } );
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

  findSchoolBySchoolId(id): School {
    return this.schools.find( school => school.id === id );
  }

  switchAssignedSchool($event): void {
    this.assignedSchool = this.findSchoolBySchoolId($event.value);
    this.fetchCounselorsBySchoolId();
  }

  switchAssignedCounselor($event): void {
    this.fetchCounselorInfo($event.value);
  }

  addStudent() {
    this.consultantService.addStudent(this.curStudent).then( data => {
      this.curStudent.id = data.id;
      this.unAllocatedStudents.push(this.curStudent);
    } );
  }

  ifAnyStudentChosen(): boolean {
    return this.unAllocatedStudents.some( stu => stu.selected );
  }

  assignStudentToCounselor(): void {
    const body = {
      employeeId: this.assignedCounselor.id,
      studentId: []
    };
    this.unAllocatedStudents.forEach( stu => {
      if ( stu.selected ) {
        body.studentId.push(stu.id);
      }
    } );
    this.consultantService.assignStudentToCounselor(body).then( result => {
      if ( result === true ) {
        const unChosenStudents = this.unAllocatedStudents.filter( (stu, index) => {
            return stu.selected = false;
        } );
        this.unAllocatedStudents = [...unChosenStudents];
      }
    } );
  }

  unSelectStudents(): void {
    this.unAllocatedStudents.forEach( stu => stu.selected = false );
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
