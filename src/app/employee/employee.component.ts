import { Component, OnInit } from '@angular/core';
import {Employee} from './employee';
import {EmployeeService} from './employee.service';
import {ConfirmService} from '../confirm/confirm.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.less']
})


export class EmployeeComponent implements OnInit {

  curEmployee: Employee;
  employees: Array<Employee>;
  constructor(
    private confirmService: ConfirmService,
    private employeeService: EmployeeService
  ) {
    this.newEmployee = this.newEmployee.bind(this);
  }

  ngOnInit() {

    this.curEmployee = new Employee();
    this.employees = [];

    this.employeeService.fetchEmployees().then( employees => {
      console.log(employees);
      this.employees = employees;
    } );
  }

  switchEmployeeGender(event): void {
    this.curEmployee.sex = event.value;
  }

  findEmployeeIndexById(id: string): Employee {
    return this.employees.find( employee => {
      return employee.id === id;
    } );
  }

  removeEmployee(id: string): void {
    const toRemoveEmployee = this.findEmployeeIndexById(id);
    const toRemoveIndex = this.employees.indexOf(toRemoveEmployee);
    this.confirmService.confirm({
      modalType: 'danger',
      cancelBtn: true,
      closeBtn: true,
      content: `确定删除员工:${toRemoveEmployee.name}`,
      confirm: () => {
        this.employeeService.removeEmployee(id).then( result => {
          this.employees.splice(toRemoveIndex, 1);
        } );
      }
    });
  }

  newEmployee(): void {
    this.employeeService.newEmployee(this.curEmployee).then( result => {
      console.log(this.curEmployee);
      console.log(result);
    } );
  }
}
