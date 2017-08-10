export class Syllabus {
  type: 'ONETOONE' | 'BOUTIQUEGROUP' | 'NORMALGROUP' | '';
  name: string;
  price: number;
  schoolId: string;
  studentNum: number;
  studyHour: number;
  id?: string;
  backNum?: number;
  deleted?: boolean;
  selectedNum?: number;
  updateTime?: number;
  createTime?: number;
}
