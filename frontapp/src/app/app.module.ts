import { BrowserModule } from '@angular/platform-browser';
import { Injectable, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { PharmacyListComponent } from './components/pharmacy-list/pharmacy-list.component';
import { PharmacyServiceService } from './service/pharmacy-service.service';
import { HttpClientModule, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MedicineListComponent } from './components/medicine-list/medicine-list.component';
import { MedicineServiceService } from './service/medicine-service.service';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { AuthServiceService } from './service/auth-service.service';
import { ApiServiceService } from './service/api-service.service';
import { UserServiceService } from './service/user-service.service';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './components/home-page/home-page.component';
import { HomePagePatientComponent } from './components/home-page/home-page-patient/home-page-patient.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { AllergiesListComponent } from './components/allergies-list/allergies-list.component';
import { PharmacyProfileComponent } from './components/pharmacy-profile/pharmacy-profile.component';
import { ExamScheduleComponent } from './components/exam-schedule/exam-schedule.component';
import { CounselingScheduleComponent } from './components/counseling-schedule/counseling-schedule.component';
import { SchedulingCounselingComponent } from './components/scheduling-counseling/scheduling-counseling.component';
import { MedicineReservationListComponent } from './components/medicine-reservation-list/medicine-reservation-list.component';
import { ExaminationHistoryListComponent } from './components/examination-history-list/examination-history-list.component';
import { CounselingHistoryListComponent } from './components/counseling-history-list/counseling-history-list.component';
import { SearchPipe } from './search.pipe';
import { DataTablesModule } from 'angular-datatables';
import { HomePageSystemAdminComponent } from './components/home-page/home-page-system-admin/home-page-system-admin.component';
import { CreatePharmacyComponent } from './components/create-pharmacy/create-pharmacy.component';
import { RegisterNewUserComponent } from './components/register-new-user/register-new-user.component';
import { CreateMedicineComponent } from './components/create-medicine/create-medicine.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { WriteComplaintComponent } from './components/write-complaint/write-complaint.component';
import { ComplaintListComponent } from './components/complaint-list/complaint-list.component';
import { HomePageDermatologistComponent } from './components/home-page/home-page-dermatologist/home-page-dermatologist.component';
import { HomePagePharmacistComponent } from './components/home-page/home-page-pharmacist/home-page-pharmacist.component';
import { PatientListComponent } from './components/patient-list/patient-list.component';
import { WorkingScheduleComponent } from './components/working-schedule/working-schedule.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    PharmacyListComponent,
    MedicineListComponent,
    RegisterFormComponent,
    HomePageComponent,
    HomePagePatientComponent,
    MyProfileComponent,
    AllergiesListComponent,
    PharmacyProfileComponent,
    ExamScheduleComponent,
    CounselingScheduleComponent,
    SchedulingCounselingComponent,
    MedicineReservationListComponent,
    ExaminationHistoryListComponent,
    CounselingHistoryListComponent,
    SearchPipe,
    HomePageSystemAdminComponent,
    CreatePharmacyComponent,
    RegisterNewUserComponent,
    CreateMedicineComponent,
    ChangePasswordComponent,
    WriteComplaintComponent,
    ComplaintListComponent,
    HomePageDermatologistComponent,
    HomePagePharmacistComponent,
    PatientListComponent,
    WorkingScheduleComponent
  ],
  imports: [
    DataTablesModule,
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [PharmacyServiceService,
    MedicineServiceService, 
    AuthServiceService,
    UserServiceService,
    JwtHelperService,
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    ApiServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
@Injectable(
)
export class XhrInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const xhr = req.clone({
      headers: req.headers.set('X-Requested-With', 'XMLHttpRequest')
    });
    return next.handle(xhr);
  }
}