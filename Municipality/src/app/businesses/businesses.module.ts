import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusinessesRoutingModule } from './businesses-routing.module';
import { BusinessesDetailComponent } from './businesses-detail/businesses-detail.component';


@NgModule({
  declarations: [
    BusinessesDetailComponent
  ],
  imports: [
    CommonModule,
    BusinessesRoutingModule
  ]
})

export  class BusinessesModule { }
