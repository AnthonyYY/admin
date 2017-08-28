export const state = {
  'CONNECTION_NO': '未联系',
  'NO_PAY': '已联系',
  'HAS_PAY': '已缴费',
};

export const states = [
  {id: 'CONNECTION_NO', text: '未联系'},
  {id: 'NO_PAY', text: '已联系'},
  {id: 'HAS_PAY', text: '已缴费'}
];

export const payType = {
  'STUDENTMANAGER_PAY': '学管师续费',
  'COUNSELOR_PAY': '咨询师缴费',
  'STUDENTMANAGER_BACK': '学管师退费',
  'SELF_PAY': '自主缴费',
};

export const payTypeList = [
  {id: 'STUDENTMANAGER_PAY', text: '学管师续费'},
  {id: 'COUNSELOR_PAY', text: '咨询师缴费'},
  {id: 'STUDENTMANAGER_BACK', text: '学管师退费'},
  {id: 'SELF_PAY', text: '自主缴费'}
];

export const courseTypeMap = {
  NORMALGROUP:  '常规班',
  ONETOONE: '一对一课程',
  BOUTIQUEGROUP:  '精品小组'
};

export const courseTypeList = [
  {id: 'NORMALGROUP', text: '常规班'},
  {id: 'ONETOONE', text: '一对一课程'},
  {id: 'BOUTIQUEGROUP', text: '精品小组'}
];

export const roles = {
  'super_admin': 'SUPER_ADMIN',
  'consultant': 'CONSULTANT',
  'consultant_boss': 'CONSULTANT_BOSS',
  'finance': 'FINANCE',
  'studentmanager': 'STUDENTMANAGER',
  'teacher': 'TEACHER',
  'consultant_main': 'CONSULTANT_MAIN',
  'teacher_director': 'TEACHER_DIRECTOR',
  'schoolmaster': 'SCHOOLMASTER',
};
