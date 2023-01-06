import { Component , OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public constructor(private http: HttpClient){

  }
  public userData : any;

  public ngOnInit() : void{
    const url:string ='/assets/data.json';
    this.http.get(url).subscribe((response) => {
      this.userData = response;
    })
  }

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
