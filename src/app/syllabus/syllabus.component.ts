import {AfterContentInit, AfterViewChecked, Component, OnInit} from '@angular/core';
import {SyllabusService} from './syllabus.service';
import {Syllabus} from '../models/syllabus';

@Component({
  selector: 'app-syllabus',
  templateUrl: './syllabus.component.html',
  styleUrls: ['./syllabus.component.less']
})
export class SyllabusComponent implements OnInit ,AfterViewChecked{

  syllabusTypes: object;
  curSyllabus: Syllabus;
  syllabuses: Array<Syllabus>;
  constructor(
    private syllabusService: SyllabusService
  ) { }

  ngAfterViewChecked(){
    $('.select2').select2();
    // console.log(1);
  }

  ngOnInit() {
    this.curSyllabus = new Syllabus();
    this.syllabuses = [];
    this.syllabusTypes = {
      ONETOONE: '一对一课程',
      BOUTIQUEGROUP: '精品小组',
      NORMALGROUP: '常规班'
    };
    this.syllabusService.fetchSyllabusList()
      .then( syllabuses => {
        this.syllabuses = syllabuses;
      } );
  }

  removeSyllabus(id: string, $event): void {
    $event.stopPropagation();
    this.syllabusService.removeSyllabus(id).then(
      (data) => {
        console.log(data);
      }
    );
  }
}
