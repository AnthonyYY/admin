import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { Select2Module } from 'ng2-select2';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import { SyllabusComponent } from './syllabus/syllabus.component';
import { UserComponent } from './user/user.component';
import { RoleComponent } from './role/role.component';
import {HttpService} from './service/http.service';
import { AlertComponent } from './alert/alert.component';
import {UserService} from './common/user.service';
import {SyllabusService} from './syllabus/syllabus.service';
import { ModalComponent } from './modal/modal.component';
import {ModalService} from './modal/modal.service';
import { ConfirmComponent } from './confirm/confirm.component';
import {ConfirmService} from './confirm/confirm.service';
import {AlertService} from './alert/alert.service';
import { CollapseBoxComponent } from './collapse-box/collapse-box.component';
import { DateRangerPickerComponent } from './date-ranger-picker/date-ranger-picker.component';
import { AdminComponent } from './admin/admin.component';
import { RoleService } from './common/role.service';
import { SchoolService } from './common/school.service';
import { ContentHeaderComponent } from './content-header/content-header.component';
import { UsersComponent } from './admin/users/users.component';
import { SchoolsComponent } from './admin/schools/schools.component';
import { AdminService } from './admin/admin.service';
import { PaginationComponent } from './pagination/pagination.component';
import { TimeRangePipe } from './common/time-range.pipe';
import { MatchItemPipe } from './common/match-item.pipe';
import { CounselorComponent } from './counselor/counselor.component';
import { StudentsAssetComponent } from './counselor/students-asset/students-asset.component';
import { StudentsComponent } from './counselor/students/students.component';
import {CounselorService} from './counselor/counselor.service';
import { ConsultantMainComponent } from './consultant-main/consultant-main.component';
import { UnallocatedStudentsComponent } from './consultant-main/unallocated-students/unallocated-students.component';
import { ConsultationRecordComponent } from './consultant-main/consultation-record/consultation-record.component';
import {ConsultantMainService} from './consultant-main/consultant-main.service';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { StmanagerComponent } from './stmanager/stmanager.component';
import { CourseComponent } from './stmanager/course/course.component';
import { StudentScheduleComponent } from './stmanager/student-schedule/student-schedule.component';
import { StudentClassPeriodComponent } from './stmanager/student-class-period/student-class-period.component';
import { StStudentsComponent } from './stmanager/students/ststudents.component';

import { routes } from './routes';
import {StmanagerService} from './stmanager/stmanager.service';
import { ConsultRecordComponent } from './consultant-main/consult-record/consult-record.component';
import { SignRecordComponent } from './counselor/sign-record/sign-record.component';
import { RenewsReturnsComponent } from './stmanager/renews-returns/renews-returns.component';
import { TcDirectorComponent } from './tc-director/tc-director.component';
import { GradeComponent } from './tc-director/grade/grade.component';
import { OriginCourseComponent } from './tc-director/origin-course/origin-course.component';
import {TeacherDirectorService} from './tc-director/teacher-director.service';
import { PresidentComponent } from './president/president.component';
import { TransferComponent } from './president/transfer/transfer.component';
import { RefundComponent } from './president/refund/refund.component';
import { PersonnelCashierComponent } from './personnel-cashier/personnel-cashier.component';
import { FeesComponent } from './personnel-cashier/fees/fees.component';
import {PersonalCashierService} from './personnel-cashier/personal-cashier.service';
import { SchoolTableComponent } from './personnel-cashier/fees/school-table/school-table.component';
import { StudentTableComponent } from './personnel-cashier/fees/student-table/student-table.component';
import { PersonnelManagerComponent } from './personnel-manager/personnel-manager.component';
import { EmployeeComponent } from './personnel-manager/employee/employee.component';
import {PersonnelService} from './personnel-manager/personnel.service';
import { EmployeeDetailComponent } from './personnel-manager/employee-detail/employee-detail.component';
import { TeacherComponent } from './teacher/teacher.component';
import { TeacherScheduleComponent } from './teacher/teacher-schedule/teacher-schedule.component';
import { TeacherClassHourComponent } from './teacher/teacher-class-hour/teacher-class-hour.component';
import {TeacherService} from './teacher/teacher.service';
import { FinanceComponent } from './finance/finance.component';
import { ToApprovementComponent } from './finance/to-approvement/to-approvement.component';
import { StuPayStatComponent } from './finance/stu-pay-stat/stu-pay-stat.component';
import { StuPayRecordComponent } from './finance/stu-pay-record/stu-pay-record.component';
import {FinanceService} from './finance/finance.service';
import { PresidentBossComponent } from './president-boss/president-boss.component';
import { StatComponent } from './president/stat/stat.component';
import {PresidentService} from './president/president.service';
import { PaymentsComponent } from './finance/stu-pay-stat/payments/payments.component';
import { FinanceSchoolTableComponent } from './finance/stu-pay-stat/school-table/school-table.component';
import { PaymentLogComponent } from './finance/stu-pay-record/payment-log/payment-log.component';
import { LogSchoolTableComponent } from './finance/stu-pay-record/log-school-table/log-school-table.component';
import { TransferBossComponent } from './president/transfer-boss/transfer-boss.component';
import { StudentManagerBossComponent } from './student-manager-boss/student-manager-boss.component';
import { AssignmentComponent } from './student-manager-boss/assignment/assignment.component';
import { StudentMasterDocsComponent } from './student-manager-boss/student-master-docs/student-master-docs.component';
import { StudentManagerBossService} from './student-manager-boss/student-manager-boss.service';
import { PagingPipe } from './common/paging.pipe';
import { DrawbackComponent } from './student-manager-boss/drawback/drawback.component';
import { CounselorsSignedRecordsComponent } from './counselor/counselors-signed-records/counselors-signed-records.component';
import { DrawbackApplicationComponent } from './counselor/drawback-application/drawback-application.component';
import { DrawbackAuditingComponent } from './counselor/drawback-auditing/drawback-auditing.component';
import { DrawbackListComponent } from './stmanager/drawback-list/drawback-list.component';
import { DrawbackApprovalComponent } from './consultant-main/drawback-approment/drawback-approment.component';
import { ScheduleManagementComponent } from './student-manager-boss/schedule-management/schedule-management.component';
import { TeacherHoursComponent } from './student-manager-boss/teacher-hours/teacher-hours.component';
import { UploaderComponent } from './uploader/uploader.component';
import {FileSelectDirective} from 'ng2-file-upload';

@NgModule({
  declarations: [
    FileSelectDirective,
    AppComponent,
    LoginComponent,
    DashboardComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    BasicInfoComponent,
    SyllabusComponent,
    UserComponent,
    RoleComponent,
    AlertComponent,
    ModalComponent,
    ConfirmComponent,
    CollapseBoxComponent,
    DateRangerPickerComponent,
    AdminComponent,
    ContentHeaderComponent,
    UsersComponent,
    SchoolsComponent,
    PaginationComponent,
    TimeRangePipe,
    MatchItemPipe,
    CounselorComponent,
    StudentsAssetComponent,
    StudentsComponent,
    ConsultantMainComponent,
    UnallocatedStudentsComponent,
    ConsultationRecordComponent,
    DatepickerComponent,
    StmanagerComponent,
    CourseComponent,
    StudentScheduleComponent,
    StudentClassPeriodComponent,
    StStudentsComponent,
    ConsultRecordComponent,
    SignRecordComponent,
    RenewsReturnsComponent,
    TcDirectorComponent,
    GradeComponent,
    OriginCourseComponent,
    PresidentComponent,
    TransferComponent,
    RefundComponent,
    PersonnelCashierComponent,
    FeesComponent,
    SchoolTableComponent,
    StudentTableComponent,
    PersonnelManagerComponent,
    EmployeeComponent,
    EmployeeDetailComponent,
    TeacherComponent,
    TeacherScheduleComponent,
    TeacherClassHourComponent,
    FinanceComponent,
    ToApprovementComponent,
    StuPayStatComponent,
    StuPayRecordComponent,
    PresidentBossComponent,
    StatComponent,
    PaymentsComponent,
    FinanceSchoolTableComponent,
    PaymentLogComponent,
    LogSchoolTableComponent,
    TransferBossComponent,
    StudentManagerBossComponent,
    AssignmentComponent,
    StudentMasterDocsComponent,
    PagingPipe,
    DrawbackComponent,
    CounselorsSignedRecordsComponent,
    DrawbackApplicationComponent,
    DrawbackAuditingComponent,
    DrawbackListComponent,
    DrawbackApprovalComponent,
    ScheduleManagementComponent,
    TeacherHoursComponent,
    UploaderComponent
  ],
  imports: [
    Select2Module,
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [
    HttpService,
    UserService,
    SyllabusService,
    ModalService,
    ConfirmService,
    AlertService,
    RoleService,
    SchoolService,
    AdminService,
    CounselorService,
    ConsultantMainService,
    StmanagerService,
    TeacherDirectorService,
    PersonalCashierService,
    PersonnelService,
    TeacherService,
    FinanceService,
    PresidentService,
    StudentManagerBossService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
