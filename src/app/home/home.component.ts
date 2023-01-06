import { Component , OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CreditReport} from './responseModel'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public constructor(private http: HttpClient){

  }
  public userData!: CreditReport;

  public ngOnInit() : void{
    const url:string ='/assets/data.json';
    this.http.get(url).subscribe((response) => {
      this.userData = Object.assign(new CreditReport,response);
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
    this.getDocument();
  } 

  public b64toBlob(b64Data: string, contentType: string) {
    contentType = contentType || '';
    let sliceSize = 512;
  
    var byteCharacters = atob(b64Data);
    var byteArrays = [];
  
    for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        var slice = byteCharacters.slice(offset, offset + sliceSize);
  
        var byteNumbers = new Array(slice.length);
        for (var i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }
  
        var byteArray = new Uint8Array(byteNumbers);
  
        byteArrays.push(byteArray);
    }
    var blob = new Blob(byteArrays, { type: contentType });
  return blob;
  }

  getDocument() {
    var blob = this.b64toBlob(this.userData.Payload.documents[0].embeddedContent, "application/pdf");
    let a = document.createElement("a");
    document.body.appendChild(a);
    var url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = String("report.pdf");
    a.click();
    window.URL.revokeObjectURL(url);
    a.remove();
  }

}