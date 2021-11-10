import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'customer-card',
  templateUrl: './customer-card.component.html',
  styleUrls: ['./customer-card.component.scss']
})
export class CustomerCardComponent implements OnInit {

  @Input() customer:any;
  constructor() { }

  ngOnInit(): void {
  }

}

