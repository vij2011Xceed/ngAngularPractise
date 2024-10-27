import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  firstName:string='Tom';
  lastName:string='Tarkish';
  gender  :string='male';
  age:number=20;
  imgSrc: string ='https://m.media-amazon.com/images/I/71XSRQDU+6L._AC_UY327_FMwebp_QL65_.jpg';
  colspanEmp:string='2px';
  classestoApply:string='italicClass boldClass'
  applyBoldClass:boolean=true;
  details:string ='Hide Details';
  isButtonDisbaled:boolean=true;
  getFullName():string{
    return this.firstName + ' '+ this.lastName;
  }
  TrackOnClick():void {
    console.log('Back button clicked');
  }
  showDetails:boolean=false;
  toggleDetails():void{
    console.log('toggle called');
    this.showDetails=!this.showDetails
    this.details=this.showDetails ? 'Show Details' :'Hide Details'
  }

  getMaleCountFromParent():string{
    return '20';
  }
  

}
