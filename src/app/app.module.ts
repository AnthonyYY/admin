import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import {FormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import { AuditComponent } from './audit/audit.component';
import { PermissionComponent } from './permission/permission.component';
import { SyllabusComponent } from './syllabus/syllabus.component';
import { EmployeeComponent } from './employee/employee.component';
import { StudentComponent } from './student/student.component';
import { UserComponent } from './user/user.component';
import { RoleComponent } from './role/role.component';
import { SchoolComponent } from './school/school.component';
import {HttpModule} from '@angular/http';
import {HttpService} from './service/http.service';
import { AlertComponent } from './alert/alert.component';
import {UserService} from './common/user.service';
import {SyllabusService} from './syllabus/syllabus.service';
import { ModalComponent } from './modal/modal.component';
import {ModalService} from './modal/modal.service';
import { ConfirmComponent } from './confirm/confirm.component';
import {ConfirmService} from './confirm/confirm.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    BasicInfoComponent,
    AuditComponent,
    PermissionComponent,
    SyllabusComponent,
    EmployeeComponent,
    StudentComponent,
    UserComponent,
    RoleComponent,
    SchoolComponent,
    AlertComponent,
    ModalComponent,
    ConfirmComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [HttpService, UserService, SyllabusService, ModalService, ConfirmService],
  bootstrap: [AppComponent]
})
export class AppModule { }
