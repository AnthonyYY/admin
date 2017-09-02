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

export const auditState = {
  'AUDITING': '审核中',
  'AUDIT_SUCCESS': '审核通过',
  'AUDIT_FAIL': '审核拒绝',
};

export const payType = {
  'STUDENTMANAGER_PAY': '学管师续费',
  'COUNSELOR_PAY': '咨询师缴费',
  'STUDENTMANAGER_BACK': '学管师退费'
};

export const payTypeList = [
  {id: 'STUDENTMANAGER_PAY', text: '学管师续费'},
  {id: 'COUNSELOR_PAY', text: '咨询师缴费'},
  {id: 'STUDENTMANAGER_BACK', text: '学管师退费'}
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
  'super_admin': 'SUPER_ADMIN',                               // 超级管理员

  'consultant': 'CONSULTANT',                                 // 咨询师
  'consultant_boss': 'CONSULTANT_BOSS',                     // 咨询主任
  'consultant_main': 'CONSULTANT_MAIN',                     // 咨询总监

  'studentmanager': 'STUDENTMANAGER',                        // 学管师
  'studentmanager_boss': 'STUDENTMANAGER_BOSS',            // 教管主任

  'teacher': 'TEACHER',                                        // 教师

  'teacher_director': 'TEACHER_DIRECTOR',                   // 教研主任

  'schoolmaster': 'SCHOOLMASTER',                             // 分校长
  'schoolmaster_boss': 'SCHOOLMASTER_BOSS',                  // 总校长

  'finance': 'FINANCE',                                        // 财务
  'personnel_cashier': 'PERSONNEL_CASHIER',                 // 人事专员出纳
  'personnel_manager': 'PERSONNEL_MANAGER',                 // 人事经理
};

export const roleMap = {
  'SUPER_ADMIN': '系统管理员',                             // 超级管理员

  'CONSULTANT': '咨询师',                                 // 咨询师
  'CONSULTANT_BOSS': '咨询主任',                     // 咨询主任
  'CONSULTANT_MAIN': '咨询总监',                     // 咨询总监

  'STUDENTMANAGER': '学管师',                        // 学管师
  'STUDENTMANAGER_BOSS': '教管主任',            // 教管主任

  'TEACHER': '教师',                                        // 教师

  'TEACHER_DIRECTOR': '教研主任',                   // 教研主任

  'SCHOOLMASTER': '分校长',                             // 分校长
  'SCHOOLMASTER_BOSS': '总校长',                  // 总校长

  'FINANCE': '财务',                                        // 财务
  'PERSONNEL_CASHIER': '人事专员出纳',                 // 人事专员出纳
  'PERSONNEL_MANAGER': '人事经理',                 // 人事经理
};

export const roleList = [
 {id: 'CONSULTANT', text: '咨询师'},                                 // 咨询师
{id: 'CONSULTANT_BOSS', text: '咨询主任'},                     // 咨询主任
{id: 'CONSULTANT_MAIN', text: '咨询总监'},                     // 咨询总监

{id: 'STUDENTMANAGER', text: '学管师'},                        // 学管师
{id: 'STUDENTMANAGER_BOSS', text: '教管主任'},            // 教管主任

{id: 'TEACHER', text: '教师'},                                        // 教师

{id: 'TEACHER_DIRECTOR', text: '教研主任'},                   // 教研主任

{id: 'SCHOOLMASTER', text: '分校长'},                             // 分校长
{id: 'SCHOOLMASTER_BOSS', text: '总校长'},                  // 总校长

{id: 'FINANCE', text: '财务'},                                        // 财务
{id: 'PERSONNEL_CASHIER', text: '人事专员出纳'},                 // 人事专员出纳
{id: 'PERSONNEL_MANAGER', text: '人事经理'},                 // 人事经理
];


export const gender = {
  'MALE': '男',
  'FEMALE': '女'
};

export const genderList = [
  {id: 'MALE', text: '男'},
  {id: 'FEMALE', text: '女'},
];
