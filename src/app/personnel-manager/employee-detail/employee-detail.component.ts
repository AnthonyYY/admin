import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.less']
})
export class EmployeeDetailComponent implements OnInit {

  employee: object;
  constructor() { }

  ngOnInit() {
    this.employee = {
      "address": "啊是第几撒大啊的啊",
      "birthday": "2017-08-29T01:58:01.932Z",
      "clamantName": "啊速度集合",
      "clamantPhone": "18849550032",
      "createTime": "2017-08-29T01:58:01.932Z",
      "deleted": true,
      "education": "高中",
      "email": "yjh2332@163.com",
      "graduationSchool": "；哦嘀神3；呢1",
      "id": "string",
      "idCard": "350521199112226515",
      "name": "哦阿斯顿",
      "phone": "18859033232",
      "remark": "啊的批发价啊是电脑哦哦的粉底撒",
      "schoolId": "string",
      "sex": "男",
      "specialty": "撒的评价那",
      "updateTime": "2017-08-29T01:58:01.932Z"
    };
  }

}
