import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../../events.service';
import Event from '../../Event';

@Component({
  selector: 'app-edit-detail',
  templateUrl: './edit-detail.component.html',
  styleUrls: ['./edit-detail.component.css']
})
export class EditDetailComponent implements OnInit {
  event: Event | undefined;

  constructor(
    private route: ActivatedRoute, 
    private eventService: EventService,
    private location: Location) { }

  ngOnInit(): void {
    this.getEvent();
  }

 getEvent(): void{
    const id = Number(this.route.snapshot.paramMap.get('Code'));
    this.eventService.getEvent(id).subscribe(event => this.event = event);
  }

  goBack(): void{
    this.location.back();
  }

}
