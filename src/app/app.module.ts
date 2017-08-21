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
import { EmployeeComponent } from './employee/employee.component';
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
import { EmployeeService } from './employee/employee.service';
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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    BasicInfoComponent,
    SyllabusComponent,
    EmployeeComponent,
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
    EmployeeService,
    RoleService,
    SchoolService,
    AdminService,
    CounselorService,
    ConsultantMainService,
    StmanagerService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
