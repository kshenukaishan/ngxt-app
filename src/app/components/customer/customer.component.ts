import { Component, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { Customer } from '../../../model/Customer';
import { MaterialModule } from '../../../module/MaterialModule';
import { MatTableDataSource } from '@angular/material/table';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [MaterialModule, CommonModule],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css',
})
export class CustomerComponent implements OnInit {
  constructor(private service: MasterService) {}

  customers!: Customer[];
  dataSource: any;
  tableColumns: string[] = ['id', 'firstName', 'lastName', 'email'];

  ngOnInit(): void {
    this.loadInitialData();
  }

  loadInitialData() {
    this.service.getCustomers().subscribe((res) => {
      this.customers = res;
      this.dataSource = new MatTableDataSource(this.customers);
    });
  }
}
