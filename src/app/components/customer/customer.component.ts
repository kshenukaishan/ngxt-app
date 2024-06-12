import { Component, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { Customer } from '../../../model/Customer';
import { MaterialModule } from '../../../module/MaterialModule';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css',
})
export class CustomerComponent implements OnInit {
  constructor(private service: MasterService) {}

  customers!: Customer[];
  ngOnInit(): void {
    this.loadInitialData();
  }

  loadInitialData() {
    this.service.getCustomers().subscribe((res) => {
      this.customers = res;
      console.log(this.customers);
    });
  }
}
