export class Syllabus {
  type: 'ONETOONE' | 'BOUTIQUEGROUP' | 'NORMALGROUP' | '';
  name: string;
  price: number;
  schoolId: string;
  id?: string;
  backNum?: number;
  deleted?: boolean;
  selectedNum?: number;
  studentNum?: number;
  updateTime?: number;
  createTime?: number;
}
