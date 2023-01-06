import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
ssnNumber = '';

onKey(input: any) { // without type info
  this.ssnNumber = input;
}

handleClick(event: any) { 
  console.log(this.ssnNumber);
   
} 
}
