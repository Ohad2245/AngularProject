import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventDetailComponent } from './events/event-detail/event-detail.component';
import { BusinessesComponent } from './businesses/businesses.component';
import { EmployeesComponent } from './employees/employees.component';
import { HomeComponent } from './home/home.component';
import { EmployeeDetailComponent } from './employees/employee-detail/employee-detail.component';
import { BusinessesDetailComponent } from './businesses/businesses-detail/businesses-detail.component';


const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "Businesses", component: BusinessesComponent },
    { path: "event-detail", component: EventDetailComponent },
    { path: "employee", component: EmployeesComponent},
    { path: "employee-detail", component: EmployeeDetailComponent},
    { path: "businesses-detail", component: BusinessesDetailComponent},
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }