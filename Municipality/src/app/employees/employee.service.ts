import { Injectable } from '@angular/core';
import { Observable, of, map } from 'rxjs';
import { EMPLOYEES } from './dummy-data-employee';
import Employee from './Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees():Observable<Employee[]> {
    return of(EMPLOYEES);
  }

  getEmployee(id: number | string){
    return this.getEmployees().pipe(
      // + - before `id` - turns a string into a number
      map((employee: Employee[]) => employee.find((e) => e.Id === +id)!)
    );
  }
}
