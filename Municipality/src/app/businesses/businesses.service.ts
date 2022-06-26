import { Injectable } from '@angular/core';
import { Observable, of, map } from 'rxjs';
import { BUSINESSES } from './dummy-data-businesses';
import Businesses from './Businesses';

@Injectable({
  providedIn: 'root'
})
export class BusinessesService {

  constructor() { }

  getBusinesses():Observable<Businesses[]> {
    return of(BUSINESSES);
  }

  getBusinesse(IdBusiness: number | string){
    return this.getBusinesses().pipe(
      // + - before `id` - turns a string into a number
      map((employee: Businesses[]) => employee.find((e) => e.IdBusiness === +IdBusiness)!)
    );
  }
}

