import { Component, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { Posts } from '../../../model/Posts';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css',
})
export class CustomerComponent implements OnInit {
  constructor(private service: MasterService) {}

  postData!: Posts[];
  ngOnInit(): void {
    this.loadInitialData();
  }

  loadInitialData() {
    this.service.getPosts().subscribe((res) => {
      this.postData = res;
      console.log(this.postData);
    });
  }
}
