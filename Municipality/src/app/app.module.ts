import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { BusinessesComponent } from './businesses/businesses.component';
import { EventsComponent } from './events/events.component';
import { EventDetailComponent } from './events/event-detail/event-detail.component';
import { HomeComponent } from './home/home.component';
import { EventsModule } from './events/events.module';
import { EmployeesModule } from './employees/employees.module';
import { BusinessesModule } from './businesses/businesses.module';
// import { BusinessesDetailComponent } from './businesses/businesses-detail/businesses-detail.component';


@NgModule({
  declarations: [
    EventDetailComponent,
    AppComponent,
    EmployeesComponent,
    BusinessesComponent,
    EventsComponent,
    HomeComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EventsModule,
    EmployeesModule,
    BusinessesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
