export class User {
  createTime: number;
  deleted: boolean;
  entityId: string;
  id: string;
  lastLoginIp: string;
  lastLoginTime: number;
  name: string;
  password: string;
  phone: string;
  roleId: string;
  salt: string;
  schoolId: string;
  updateTime: number;
  userType: 'ADMIN' | 'EMPLOYEE';
  username: string;
}
