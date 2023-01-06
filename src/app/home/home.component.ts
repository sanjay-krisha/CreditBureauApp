import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
ssnNumber = '';
ssnEntered = "hidden";

onKey(input: any) { // without type info
  this.ssnNumber = input;
  if(input == ""){
    this.ssnEntered = "hidden";
  }
}

handleClick(event: any) { 
  console.log(this.ssnNumber);
  this.ssnEntered = "inherit";
} 
}
