export class User {
  name: string;
  password: string;
  phone: string;
  userType: 'ADMIN' | 'EMPLOYEE';
  username: string;
  entityId: string;
  roleId: string;
  createTime?: number;
  deleted?: boolean;
  id?: string;
  lastLoginIp?: string;
  lastLoginTime?: number;
  salt?: string;
  schoolId?: string;
  updateTime?: number;
}
