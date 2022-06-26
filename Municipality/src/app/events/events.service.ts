import { Injectable } from '@angular/core';
import { Observable, of, map } from 'rxjs';
import { EVENTS } from './dummy-data-events';
import Event from './Event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }


  // A function to return the students array:
  getEvents():Observable<Event[]> {
    return of(EVENTS);
  }

  getEvent(code: number | string){
    return this.getEvents().pipe(
      // + - before `id` - turns a string into a number
      map((event: Event[]) => event.find((e) => e.Code === +code)!)
    );
  }
}
