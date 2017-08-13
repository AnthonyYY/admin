import { Component, OnInit } from '@angular/core';
import {SyllabusService} from './syllabus.service';
import {Syllabus} from '../models/syllabus';
import {Select2OptionData} from 'ng2-select2/ng2-select2';
import {ConfirmService} from '../confirm/confirm.service';
import {UserService} from '../common/user.service';
import * as moment from 'moment';

@Component({
  selector: 'app-syllabus',
  templateUrl: './syllabus.component.html',
  styleUrls: ['./syllabus.component.less']
})
export class SyllabusComponent implements OnInit {

  syllabusTypes: Array<Select2OptionData>;
  syllabusTypesMap: object;
  curSyllabus: Syllabus;
  syllabuses: Array<Syllabus>;
  syllabusFilter: {
    name: string,
    timeRange: {startTime: string, endTime: string}
  };
  constructor(
    private userService: UserService,
    private syllabusService: SyllabusService,
    private confirmService: ConfirmService
  ) {
    this.saveSyllabus = this.saveSyllabus.bind(this);
  }

  ngOnInit() {
    this.syllabusTypesMap = {NORMALGROUP: '常规班', ONETOONE: '一对一课程', BOUTIQUEGROUP: '精品小组'};
    this.syllabuses = [];
    this.syllabusTypes = [
      {
        id: 'NORMALGROUP',
        text: '常规班'
      },
      {
        id: 'ONETOONE',
        text: '一对一课程'
      },
      {
        id: 'BOUTIQUEGROUP',
        text: '精品小组'
      }
    ];
    this.syllabusFilter = {name: '', timeRange: {startTime: moment().format('YYYY') + '-01-01', endTime: moment().format('YYYY-MM-DD') }};
    this.resetCurSyllabus();
    this.syllabusService.fetchSyllabusList()
      .then( syllabuses => {
        this.syllabuses = syllabuses;
      } );
  }

  handleTimeRangeChange(value): void {
    console.log(value);
    this.syllabusFilter.timeRange = value;
  }

  switchSyllabusType($event): void {
    this.curSyllabus.type = $event.value;
  }

  findSyllabusById(id: string): Syllabus {
    return this.syllabuses.find( syllabus => {
      return syllabus.id === id;
    } );
  }

  resetCurSyllabus(): void {
    this.curSyllabus = new Syllabus();
    this.curSyllabus.type = 'ONETOONE';
    this.curSyllabus.schoolId = this.userService.user.schoolId;
  }

  setCurSyllabus(syllabus): void {
    this.curSyllabus = {...syllabus};
  }

  removeSyllabus(id: string, $event): void {
    $event.stopPropagation();

    const toRemoveSyllabus = this.findSyllabusById(id);
    const toRemoveIndex = this.syllabuses.indexOf(toRemoveSyllabus);

    this.confirmService.confirm({
      modalType: 'danger',
      cancelBtn: true,
      closeBtn: true,
      content: `确定删除课程:${toRemoveSyllabus.name}`,
      confirm: () => {
        this.syllabusService.removeSyllabus(id).then(
          () => {
            this.syllabuses.splice(toRemoveIndex, 1);
          }
        );
      }
    });
  }

  newSyllabus(): void {
    this.syllabusService.newSyllabus(this.curSyllabus).then( newSyllabusId => {
      this.curSyllabus.id = newSyllabusId;
      this.syllabuses.unshift({...this.curSyllabus});
    } );
  }

  updateSyllabus() {
    this.syllabusService.updateSyllabus(this.curSyllabus).then(() => {
      const toUpdateSyllabus = this.findSyllabusById(this.curSyllabus.id);
      const toUpdateSyllabusIndex = this.syllabuses.indexOf(toUpdateSyllabus);
      this.syllabuses[toUpdateSyllabusIndex] = this.curSyllabus;
      this.syllabuses = [...this.syllabuses];
    });
  }

  saveSyllabus(): void {
    !this.curSyllabus.id ? this.newSyllabus() : this.updateSyllabus();
  }
}
