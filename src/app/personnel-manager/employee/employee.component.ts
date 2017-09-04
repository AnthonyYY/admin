import { Component, OnInit } from '@angular/core';
import {Sidebar} from '../../sidebar/sidebar';
import {PersonnelService} from '../personnel.service';
import {genderList, roleList, roleMap} from '../../common/enum';
import {SchoolService} from '../../common/school.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.less']
})
export class EmployeeComponent implements OnInit {

  schools: any[];
  roles: any[];
  roleMap: any;
  curEmployee: any;
  genders: any;
  employees: any[];
  contentHeader: Sidebar[];

  filterEmployeeName: string;
  filterEmployeeGender: string;
  filterEmployeePhone: string;
  constructor(
    private personnelService: PersonnelService,
    private schoolService: SchoolService,
  ) {
    this.initCurEmployee = this.initCurEmployee.bind(this);
    this.createOrUpdateEmployee = this.createOrUpdateEmployee.bind(this);
    this.deleteEmployee = this.deleteEmployee.bind(this);
  }

  ngOnInit() {
    this.schools = [];
    this.roles = roleList;
    this.roleMap = roleMap;
    this.curEmployee = {};
    this.genders = genderList;
    this.employees = [];
    this.contentHeader = [
      {name: '主页', icon: 'fa-dashboard'},
      {name: '员工列表管理页', icon: 'fa-users'}
    ];

    this.filterEmployeeName = '';
    this.filterEmployeeName = '';
    this.filterEmployeePhone = '';

    this.initCurEmployee();
    this.fetchEmployee();
    this.fetchSchools();
  }

  initCurEmployee(employee?: any): void {
    if (employee) {
      this.curEmployee = {...employee};
      console.log(this.curEmployee);
    } else {
      const initRoleId = [this.roles[0]['id']];
      const initSchoolId = this.schools.length ? this.schools[0]['id'] : '';
      this.curEmployee = {
        address: '',
        clamantName: '',
        clamantPhone: '',
        education: '',
        email: '',
        graduationSchool: '',
        idCard: '',
        name: '',
        phone: '',
        remark: '',
        roleIds: initRoleId,
        schoolId: initSchoolId,
        sex: 'MALE',
        specialty: '',
        username: ''
      };
    }
  }

  /* fetches */
  fetchEmployee(): void {
    this.personnelService.fetchEmployee().then( employees => this.employees = employees );
  }

  fetchSchools(): void {
    this.schoolService.fetchSchoolList().then( schools => {
      this.schools = schools;
      this.schools.forEach( school => {
        school.text = school.name;
      } );
    } );
  }

  createOrUpdateEmployee(): void {
    if (this.curEmployee.id) {
      this.editEmployee();
    } else {
      this.createEmployee();
    }
  }

  createEmployee(): void {
    if (this.ifDisabledSchool() ) {
      delete this.curEmployee.schoolId;
    }
    this.personnelService.createEmployee(this.curEmployee).then( data => {
      this.curEmployee.id = data.id;
      this.curEmployee.birthday = data.birthday;
      this.curEmployee.role = this.curEmployee.roleIds[0];
      delete this.curEmployee.roleIds;
      this.employees.unshift({...this.curEmployee});
    });
  }

  editEmployee(): void {
    this.personnelService.updateEmployeeInfo(this.curEmployee).then( () => {
      const curEmployee = this.findEmployeeById(this.curEmployee.id);
      const curEmployeeIndex = this.employees.indexOf(curEmployee);
      this.employees[curEmployeeIndex] = {...this.curEmployee};
    } );
  }

  deleteEmployee(): void {
    this.personnelService.deleteEmployee(this.curEmployee.id).then( success => {
      if (success) {
        const curEmployee = this.findEmployeeById(this.curEmployee.id);
        const toRemoveIndex = this.employees.indexOf(curEmployee);
        this.employees.splice(toRemoveIndex, 1);
      }
    } );
  }

  /* action */
  switchFilterGender($event): void {
    this.filterEmployeeGender = $event.value ===  'ALL' ? '' : $event.value;
  }

  switchCurEmployeeGender($event) {
    this.curEmployee.sex = $event.value;
  }

  switchCurEmployeeRole($event) {
    this.curEmployee.roleIds = [$event.value];
  }
  switchCurEmployeeSchool($event) {
    this.curEmployee.schoolId = $event.value;
  }

  /* helpers */
  ifDisabledSchool(): boolean {
    if (this.curEmployee.id) {
      return true;
    }
    return this.curEmployee.roleIds.indexOf('PERSONNEL_MANAGER') >= 0 ||
      this.curEmployee.roleIds.indexOf('SUPER_ADMIN') >= 0 ||
      this.curEmployee.roleIds.indexOf('FINANCE') >= 0 ||
      this.curEmployee.roleIds.indexOf('PERSONNEL_CASHIER') >= 0 ||
      this.curEmployee.roleIds.indexOf('SCHOOLMASTER_BOSS') >= 0 ||
      this.curEmployee.roleIds.indexOf('CONSULTANT_MAIN') >= 0;
  }

  findEmployeeById(id: string): object {
    return this.employees.find( employee => employee.id === id );
  }

}
