import {Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AuditComponent} from './audit/audit.component';
import {PermissionComponent} from './permission/permission.component';
import {EmployeeComponent} from './employee/employee.component';
import {StudentComponent} from './student/student.component';
import {UserComponent} from './user/user.component';
import {RoleComponent} from './role/role.component';
import {AdminComponent} from './admin/admin.component';
import {UsersComponent} from './admin/users/users.component';
import {SchoolsComponent} from './admin/schools/schools.component';

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
        path: 'admin',
        component: AdminComponent,
        children: [
          {
            path: '',
            redirectTo: 'users',
            pathMatch: 'full'
          },
          {
            path: 'users',
            component: UsersComponent,
          },
          {
            path: 'schools',
            component: SchoolsComponent
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
