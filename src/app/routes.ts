import {Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AdminComponent} from './admin/admin.component';
import {UsersComponent} from './admin/users/users.component';
import {SchoolsComponent} from './admin/schools/schools.component';
import {CounselorComponent} from './counselor/counselor.component';
import {StudentsComponent} from './counselor/students/students.component';
import {StudentsAssetComponent} from './counselor/students-asset/students-asset.component';
import {ConsultantMainComponent} from './consultant-main/consultant-main.component';
import {UnallocatedStudentsComponent} from './consultant-main/unallocated-students/unallocated-students.component';
import {ConsultationRecordComponent} from './consultant-main/consultation-record/consultation-record.component';
import {StmanagerComponent} from './stmanager/stmanager.component';
import {CourseComponent} from './stmanager/course/course.component';
import {StudentClassPeriodComponent} from './stmanager/student-class-period/student-class-period.component';
import {StudentScheduleComponent} from './stmanager/student-schedule/student-schedule.component';
import {StStudentsComponent} from './stmanager/students/ststudents.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
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
          }
        ]
      },
      {
        path: 'consultant-main',
        component: ConsultantMainComponent,
        children: [
          {
            path: '',
            redirectTo: 'unallocated-students',
            pathMatch: 'full'
          },
          {
            path: 'unallocated-students',
            component: UnallocatedStudentsComponent
          },
          {
            path: 'consultation-record',
            component: ConsultationRecordComponent
          }
        ]
      },
      {
        path: 'counselor',
        component: CounselorComponent,
        children: [
          {
            path: '',
            redirectTo: 'students',
            pathMatch: 'full'
          },
          {
            path: 'students-asset',
            component: StudentsAssetComponent
          },
          {
            path: 'students',
            component: StudentsComponent
          },
        ]
      },
      {
        path: 'studentmanager',
        component: StmanagerComponent,
        children: [
          {
            path: '',
            redirectTo: 'schedule',
            pathMatch: 'full'
          },
          {
            path: 'schedule',
            component: CourseComponent,
          },
          {
            path: 'students',
            component: StStudentsComponent,
          },
          {
            path: 'student-schedule',
            component: StudentScheduleComponent,
          },
          {
            path: 'stu-class-period',
            component: StudentClassPeriodComponent
          }
        ]
      }
    ]
  },
];
