import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import Event from '../Event';
import { EventService } from '../events.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {


  // event:Observable<Event> | undefined;

  // constructor(private service: EventService, private router: Router, private route:ActivatedRoute) { }

  // ngOnInit(): void {
  //   // this.event = this.route.paramMap.pipe(
  //   //   switchMap((params: ParamMap) => this.service.getEvent(params.get(code)))
  //   // );
  // }

  // goBack(){
  //   this.router.navigate(['/events']);
  // }
  events:Event[] = [];

  constructor(private service:EventService){}

  ngOnInit():void {
    this.getEvents();
  }
  getEvents():void{
    this.service.getEvents().subscribe(events=> this.events = events);
  }
    title = 'EventDetailComponent';

}
