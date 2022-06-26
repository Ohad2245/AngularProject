import { Component,OnInit} from '@angular/core';
import {EventService} from './events.service';
import Event from './Event';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})

export class EventsComponent implements OnInit {

  events:Event[] = [];

  constructor(private service:EventService){}

  ngOnInit():void {
    this.getEvents();
  }
  getEvents():void{
    this.service.getEvents().subscribe(events=> this.events = events);
  }
    title = 'EventsComponent';

}
 

