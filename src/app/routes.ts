import {Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {BasicInfoComponent} from './basic-info/basic-info.component';
import {AuditComponent} from './audit/audit.component';
import {PermissionComponent} from './permission/permission.component';
import {SyllabusComponent} from './syllabus/syllabus.component';
import {EmployeeComponent} from './employee/employee.component';
import {StudentComponent} from './student/student.component';
import {UserComponent} from './user/user.component';
import {RoleComponent} from './role/role.component';
import {SchoolComponent} from './school/school.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: '',
        redirectTo: 'basic-info',
        pathMatch: 'full'
      },
      {
        path: 'basic-info',
        component: BasicInfoComponent,
        children: [
          {
            path: '',
            redirectTo: 'syllabus',
            pathMatch: 'full'
          },
          {
            path: 'syllabus',
            component: SyllabusComponent
          },
          {
            path: 'employees',
            component: EmployeeComponent
          },
          {
            path: 'students',
            component: StudentComponent
          },
          {
            path: 'users',
            component: UserComponent
          },
          {
            path: 'roles',
            component: RoleComponent
          },
          {
            path: 'schools',
            component: SchoolComponent
          }
        ]
      },
      {
        path: 'audit',
        component: AuditComponent
      },
      {
        path: 'permission',
        component: PermissionComponent
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  }
];
