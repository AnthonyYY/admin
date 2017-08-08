import { Injectable } from '@angular/core';
import {HttpService} from '../service/http.service';
import {Syllabus} from '../models/syllabus';

@Injectable()
export class SyllabusService {

  constructor(private http: HttpService) { }

  fetchSyllabusList(): Promise<any> {
    /*return this.http.get('course').then( ( data ) => {
      } );*/
    return Promise.resolve({
        'status': true,
        'description': '请求成功',
        'data': [
          {
            'id': '3fb5ba7373a745cc9235af157343e796',
            'schoolId': '',
            'name': '高三英语232',
            'type': 'ONETOONE',
            'studentNum': 1,
            'price': 3000,
            'selectedNum': 0,
            'backNum': 0,
            'createTime': 1501946354000,
            'updateTime': 1501946354000,
            'deleted': false
          },
          {
            'id': '3fb5ba7373a745cc9235af157343e796',
            'schoolId': '',
            'name': '高三英语232',
            'type': 'ONETOONE',
            'studentNum': 1,
            'price': 3000,
            'selectedNum': 0,
            'backNum': 0,
            'createTime': 1501946354000,
            'updateTime': 1501946354000,
            'deleted': false
          },
          {
            'id': '3fb5ba7373a745cc9235af157343e796',
            'schoolId': '',
            'name': '高三英语232',
            'type': 'ONETOONE',
            'studentNum': 1,
            'price': 3000,
            'selectedNum': 0,
            'backNum': 0,
            'createTime': 1501946354000,
            'updateTime': 1501946354000,
            'deleted': false
          },
          {
            'id': '3fb5ba7373a745cc9235af157343e796',
            'schoolId': '',
            'name': '高三英语232',
            'type': 'ONETOONE',
            'studentNum': 1,
            'price': 3000,
            'selectedNum': 0,
            'backNum': 0,
            'createTime': 1501946354000,
            'updateTime': 1501946354000,
            'deleted': false
          },
          {
            'id': '3fb5ba7373a745cc9235af157343e796',
            'schoolId': '',
            'name': '高三英语232',
            'type': 'ONETOONE',
            'studentNum': 1,
            'price': 3000,
            'selectedNum': 0,
            'backNum': 0,
            'createTime': 1501946354000,
            'updateTime': 1501946354000,
            'deleted': false
          },
          {
            'id': '3fb5ba7373a745cc9235af157343e796',
            'schoolId': '',
            'name': '高三英语232',
            'type': 'ONETOONE',
            'studentNum': 1,
            'price': 3000,
            'selectedNum': 0,
            'backNum': 0,
            'createTime': 1501946354000,
            'updateTime': 1501946354000,
            'deleted': false
          },
          {
            'id': '3fb5ba7373a745cc9235af157343e796',
            'schoolId': '',
            'name': '高三英语232',
            'type': 'ONETOONE',
            'studentNum': 1,
            'price': 3000,
            'selectedNum': 0,
            'backNum': 0,
            'createTime': 1501946354000,
            'updateTime': 1501946354000,
            'deleted': false
          },
          {
            'id': '953e096275aa4db6ae081c2d46169495',
            'schoolId': '',
            'name': '高三英语22',
            'type': 'ONETOONE',
            'studentNum': 1,
            'price': 3000,
            'selectedNum': 0,
            'backNum': 0,
            'createTime': 1501938635000,
            'updateTime': 1501938635000,
            'deleted': false
          },
          {
            'id': '98208ca95f4f4becbe7ddb47c233d5b0',
            'schoolId': '',
            'name': '高三物理',
            'type': 'ONETOONE',
            'studentNum': 1,
            'price': 3000,
            'selectedNum': 0,
            'backNum': 0,
            'createTime': 1501936860000,
            'updateTime': 1501936860000,
            'deleted': false
          },
          {
            'id': '27a2d19b118d44c0bc2a80cce009ed96',
            'schoolId': '',
            'name': '小学六年级数学',
            'type': 'BOUTIQUEGROUP',
            'studentNum': 3,
            'price': 2000,
            'selectedNum': 0,
            'backNum': 0,
            'createTime': 1501936833000,
            'updateTime': 1501936833000,
            'deleted': false
          },
          {
            'id': 'c8100f3ef7fe4498b1df551b905c92c6',
            'schoolId': '',
            'name': '小学一年级数学',
            'type': 'NORMALGROUP',
            'studentNum': 20,
            'price': 1200,
            'selectedNum': 0,
            'backNum': 0,
            'createTime': 1501936804000,
            'updateTime': 1501936804000,
            'deleted': false
          }
        ]
      }
    );
  }
}
