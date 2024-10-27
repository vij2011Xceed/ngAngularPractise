import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-count',
  templateUrl: './employee-count.component.html',
  styleUrls: ['./employee-count.component.css']
})
export class EmployeeCountComponent implements OnInit {

  @Input() maleCountToChildFromParent:string;
  constructor() { 
    this.maleCountToChildFromParent='0';
  }

  ngOnInit() {  
    console.log(this.maleCountToChildFromParent);  
    }  
}
