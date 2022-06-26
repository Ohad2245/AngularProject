import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import Businesses from '../Businesses';
import { BusinessesService } from '../businesses.service';

@Component({
  selector: 'app-businesses-detail',
  templateUrl: './businesses-detail.component.html',
  styleUrls: ['./businesses-detail.component.css']
})
export class BusinessesDetailComponent implements OnInit {

  businesses:Businesses[] = [];

  constructor(private service:BusinessesService) {}

  ngOnInit():void {
    this.getEvents();
  }
  getEvents():void{
    this.service.getBusinesses().subscribe(businesses => this.businesses = businesses);
  }
    title = 'BusinessesDetailComponent';

}


