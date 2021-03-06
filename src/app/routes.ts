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
import {PersonnelManagerComponent} from './personnel-manager/personnel-manager.component';
import {EmployeeComponent} from './personnel-manager/employee/employee.component';
import {EmployeeDetailComponent} from './personnel-manager/employee-detail/employee-detail.component';
import {TeacherComponent} from './teacher/teacher.component';
import {TeacherScheduleComponent} from './teacher/teacher-schedule/teacher-schedule.component';
import {TeacherClassHourComponent} from './teacher/teacher-class-hour/teacher-class-hour.component';
import {FinanceComponent} from './finance/finance.component';
import {ToApprovementComponent} from './finance/to-approvement/to-approvement.component';
import {StuPayStatComponent} from './finance/stu-pay-stat/stu-pay-stat.component';
import {StuPayRecordComponent} from './finance/stu-pay-record/stu-pay-record.component';
import {StatComponent} from './president/stat/stat.component';
import {PaymentsComponent} from './finance/stu-pay-stat/payments/payments.component';
import {FinanceSchoolTableComponent} from './finance/stu-pay-stat/school-table/school-table.component';
import {LogSchoolTableComponent} from './finance/stu-pay-record/log-school-table/log-school-table.component';
import {PaymentLogComponent} from './finance/stu-pay-record/payment-log/payment-log.component';
import {TransferBossComponent} from './president/transfer-boss/transfer-boss.component';
import {StudentManagerBossComponent} from './student-manager-boss/student-manager-boss.component';
import {AssignmentComponent} from './student-manager-boss/assignment/assignment.component';
import {StudentMasterDocsComponent} from './student-manager-boss/student-master-docs/student-master-docs.component';
import {DrawbackComponent} from './student-manager-boss/drawback/drawback.component';
import {CounselorsSignedRecordsComponent} from './counselor/counselors-signed-records/counselors-signed-records.component';
import {DrawbackApplicationComponent} from './counselor/drawback-application/drawback-application.component';
import {DrawbackAuditingComponent} from './counselor/drawback-auditing/drawback-auditing.component';
import {DrawbackListComponent} from './stmanager/drawback-list/drawback-list.component';
import {DrawbackApprovalComponent} from './consultant-main/drawback-approment/drawback-approment.component';
import {ScheduleManagementComponent} from './student-manager-boss/schedule-management/schedule-management.component';
import {TeacherHoursComponent} from './student-manager-boss/teacher-hours/teacher-hours.component';
import {TeacherClassHistoryComponent} from './teacher/teacher-class-history/teacher-class-history.component';
import {TeacherStuScoreComponent} from './teacher/teacher-stu-score/teacher-stu-score.component';
import {StudentsComponent as StuComponent} from './president/students/students.component'

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
            redirectTo: 'consultation-record',
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
          },
          {
            path: 'drawbacks-auditing',
            component: DrawbackApprovalComponent
          }
        ]
      },
      {
        path: 'counselor',
        component: CounselorComponent,
        children: [
          {
            path: '',
            redirectTo: 'students-asset',
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
          },
          {
            path: 'counselors-signs',
            component: CounselorsSignedRecordsComponent
          },
          {
            path: 'drawback-application',
            component: DrawbackApplicationComponent
          },
          {
            path: 'drawback-auditing',
            component: DrawbackAuditingComponent
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
          },
          {
            path: 'drawbacks',
            component: DrawbackListComponent
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
        path: 'teacher',
        component: TeacherComponent,
        children: [
          {
            path: '',
            redirectTo: 'teacher-class-history',
            pathMatch: 'full'
          },
          {
            path: 'teacher-schedule',
            component: TeacherScheduleComponent,
          },
          {
            path: 'teacher-class-hour',
            component: TeacherClassHourComponent,
          },
          {
            path: 'teacher-class-history',
            component: TeacherClassHistoryComponent,
          },
          {
            path: 'teacher-stu-score',
            component: TeacherStuScoreComponent,
          }
        ]
      },
      {
        path: 'president-master',
        component: PresidentComponent,
        children: [
          {
            path: '',
            redirectTo: 'stats',
            pathMatch: 'full',
          },
          {
            path: 'refund',
            component: RefundComponent,
          },
          {
            path: 'transfer',
            component: TransferComponent
          },
          {
            path: 'transfer-audit',
            component: TransferBossComponent
          },
          {
            path: 'stats',
            component: StatComponent
          },
          {
            path: 'students',
            component: StuComponent
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
      {
        path: 'personnel-manager',
        component: PersonnelManagerComponent,
        children: [
          {
            path: '',
            redirectTo: 'employee',
            pathMatch: 'full'
          },
          {
            path: 'employee',
            component: EmployeeComponent
          },
          {
            path: 'employee/:employeeId',
            component: EmployeeDetailComponent
          }
        ]
      },
      {
        path: 'finance',
        component: FinanceComponent,
        children: [
          {
            path: '',
            redirectTo: 'to-approve',
            pathMatch: 'full'
          },
          {
            path: 'to-approve',
            component: ToApprovementComponent,
          },
          {
            path: 'stu-pay-stat',
            component: StuPayStatComponent,
            children: [
              {
                path: '',
                redirectTo: 'school-table',
                pathMatch: 'full'
              },
              {
                path: 'student-payments',
                component: PaymentsComponent
              },
              {
                path: 'school-table',
                component: FinanceSchoolTableComponent
              }
            ]
          },
          {
            path: 'stu-pay-record',
            component: StuPayRecordComponent,
            children: [
              {
                path: '',
                redirectTo: 'school-table',
                pathMatch: 'full'
              },
              {
                path: 'school-table',
                component: LogSchoolTableComponent
              },
              {
                path: 'logs',
                component: PaymentLogComponent
              }
            ]
          },
        ]
      },
      {
        path: 'studentmanager-boss',
        component: StudentManagerBossComponent,
        children: [
          {
            path: '',
            redirectTo: 'student-assignment',
            pathMatch: 'full'
          },
          {
            path: 'student-assignment',
            component: AssignmentComponent
          },
          {
            path: 'drawback',
            component: DrawbackComponent
          },
          {
            path: 'student-master-docs',
            component: StudentMasterDocsComponent
          },
          {
            path: 'schedule-management',
            component: ScheduleManagementComponent
          },
          {
            path: 'teacher-hours',
            component: TeacherHoursComponent,
          }
        ]
      }
    ]
  },
];
