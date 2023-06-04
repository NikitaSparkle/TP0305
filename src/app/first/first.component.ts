import { Component,OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
  @Input()
  customerData: any;

  constructor() { }

  ngOnInit() {
  
  }

  clearTable(){
    this.customerData = [];
  }
  commingSoon(){
    alert('New Feature ! Coming Soon..')
  }
}
