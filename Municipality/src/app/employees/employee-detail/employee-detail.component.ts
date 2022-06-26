
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import Employee from '../Employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  employee:Employee[] = [];

  constructor(private service:EmployeeService) {}

  ngOnInit():void {
    this.getEvents();
  }
  getEvents():void{
    this.service.getEmployees().subscribe(employees=> this.employee = employees);
  }
    title = 'EmployeeDetailComponent';

}

