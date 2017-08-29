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
import {ConsultRecordComponent} from './consultant-main/consult-record/consult-record.component';
import {SignRecordComponent} from './counselor/sign-record/sign-record.component';
import {RenewsReturnsComponent} from './stmanager/renews-returns/renews-returns.component';
import {GradeComponent} from './tc-director/grade/grade.component';
import {OriginCourseComponent} from './tc-director/origin-course/origin-course.component';
import {TcDirectorComponent} from './tc-director/tc-director.component';
import {TransferComponent} from './president/transfer/transfer.component';
import {RefundComponent} from './president/refund/refund.component';
import {PresidentComponent} from './president/president.component';
import {PersonnelCashierComponent} from './personnel-cashier/personnel-cashier.component';
import {FeesComponent} from './personnel-cashier/fees/fees.component';
import {SchoolTableComponent} from './personnel-cashier/fees/school-table/school-table.component';
import {StudentTableComponent} from './personnel-cashier/fees/student-table/student-table.component';

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
            redirectTo: 'consult-record',
            pathMatch: 'full'
          },
          {
            path: 'unallocated-students',
            component: UnallocatedStudentsComponent
          },
          {
            path: 'consultation-record',
            component: ConsultationRecordComponent
          },
          {
            path: 'consult-record',
            component: ConsultRecordComponent
          }
        ]
      },
      {
        path: 'counselor',
        component: CounselorComponent,
        children: [
          {
            path: '',
            redirectTo: 'sign-record',
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
          {
            path: 'sign-record',
            component: SignRecordComponent
          }
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
          },
          {
            path: 'renews-returns',
            component: RenewsReturnsComponent
          }
        ]
      },
      {
        path: 'teacher-director',
        component: TcDirectorComponent,
        children: [
          {
            path: '',
            redirectTo: 'course',
            pathMatch: 'full'
          },
          {
            path: 'course',
            component: OriginCourseComponent,
          },
          {
            path: 'grade',
            component: GradeComponent,
          }
        ]
      },
      {
        path: 'president-master',
        component: PresidentComponent,
        children: [
          {
            path: '',
            redirectTo: 'refund',
            pathMatch: 'full'
          },
          {
            path: 'refund',
            component: RefundComponent,
          },
          {
            path: 'transfer',
            component: TransferComponent
          }
        ]
      },
      {
        path: 'personal-cashier',
        component: PersonnelCashierComponent,
        children: [
          {
            path: '',
            redirectTo: 'fees',
            pathMatch: 'full'
          },
          {
            path: 'fees',
            component: FeesComponent,
            children: [
              {
                path: '',
                redirectTo: 'schools',
                pathMatch: 'full'
              },
              {
                path: 'schools',
                component: SchoolTableComponent
              },
              {
                path: ':schoolId/students',
                component: StudentTableComponent
              }
            ]
          }
        ]
      },
    ]
  },
];
