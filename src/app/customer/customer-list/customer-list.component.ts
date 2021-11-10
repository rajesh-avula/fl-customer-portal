import { Component, OnInit } from '@angular/core';
import { customers } from '../customers';
@Component({
  selector: 'customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  customers = customers;
  constructor() { }

  ngOnInit(): void {
    
  }

}
