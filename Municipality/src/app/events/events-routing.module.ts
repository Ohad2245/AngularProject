import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditDetailComponent } from './event-detail/edit-detail/edit-detail.component';

const routes: Routes = [
  {path:"events/:code",component:EditDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
