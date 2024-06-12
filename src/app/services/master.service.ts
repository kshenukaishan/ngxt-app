import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../../model/Customer';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  constructor(private http: HttpClient) {}

  getCustomers() {
    return this.http.get<Customer[]>('http://localhost:3000/customers');
  }
}
