import { Component , OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Address, CreditReport, Party} from 'src/app/responseModel'
import { PdfService } from 'src/app/pdf-service.service';
import { ApiService } from 'src/app/api.service';
import { CreditReportTwo } from '../responseModelTwo';
import * as JsonData from '../assets/data.json';
import * as JsonDataEquifax from '../assets/dataEquifax.json';

declare const PDFObject: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public constructor(private http: HttpClient,
    private pdfService: PdfService, 
    private api: ApiService){
      report: CreditReport;
      
  }

  src: string = ''; 
  alerts: string[] = [];
  //variable declarations
  ssnNumber = '';
  ssnEntered = "hidden";
  pdfData : any;
  public userData!: CreditReport;
  public userDataTwo! : CreditReportTwo;
  users: any;
  ofacAlert!: string;
  fraudIdentityScanAlerts! : string;
  partyOne = new Party();
  partyTwo = new Party();
  partyOneAddress = new Address();
  partyTwoAddress = new Address();

  

  public ngOnInit() : void{
    
    
  }



  onKey(input: any) { 
    this.ssnNumber = input;
    if(input == ""){
      this.ssnEntered = "hidden";
    }
  }

  public async handleClick(event: any) { 
    if(this.ssnNumber!=""){
      console.log(this.ssnNumber);
      this.ssnEntered = "inherit";
      this.viewPdf();

       
    // (await (this.api.PostReport())).subscribe(res =>{
    //   this.users = res;
    //   this.userDataTwo = Object.assign(new CreditReportTwo,Response);
    //   console.log(this.users);
    // })
    }
  } 
  
  //method to download pdf
  public b64toBlob(b64Data: string, contentType: string) {
    //let userDataTwo = JsonData;
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


  //method to show pdf file
  viewPdf(){
    this.alerts=[];
    let userDataTwo = undefined;
    if(this.ssnNumber=="666462864"){
       userDataTwo = JsonDataEquifax;
    }
    else{
      userDataTwo = JsonData;
    }
    //var blob = this.b64toBlob(this.userData.Payload.documents[0].embeddedContent, "application/pdf");
    var blob = this.b64toBlob(userDataTwo.Payload.documents[0].embeddedContent, "application/pdf");
    let a = document.createElement("a");
    document.body.appendChild(a);
    var url = window.URL.createObjectURL(blob);
    this.src = url;
    this.getAlerts();
  }


  //method to download pdf
  getDocument() {
    //var blob = this.b64toBlob(this.userData.Payload.documents[0].embeddedContent, "application/pdf");
    var blob = this.b64toBlob(this.userDataTwo.Payload.documents[0].embeddedContent, "application/pdf");
    let a = document.createElement("a");
    document.body.appendChild(a);
    var url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = String("report.pdf");
    a.click();
    window.URL.revokeObjectURL(url);
    a.remove();
  }

  getAlerts(){
    if(this.ssnNumber == "666462864"){
      let userDataTwo = JsonDataEquifax;
       this.partyOne = userDataTwo.Payload.parties[0];
       this.partyOneAddress = userDataTwo.Payload.parties[0].addresses[0];

       this.alerts.push(userDataTwo.Payload.parties[0].role.borrowerResponseInformation.fraudIdentityScanAlerts[0].description);
       this.alerts.push(userDataTwo.Payload.parties[0].role.borrowerResponseInformation.fraudIdentityScanAlerts[1].description);
    }
    else{
      let userDataTwo = JsonData;
      this.partyOne = userDataTwo.Payload.parties[0];
      this.partyOneAddress = userDataTwo.Payload.parties[0].addresses[0];
    }
    
    //this.ofacAlert = this.userData.Payload.parties[0].role.borrowerResponseInformation.fraudIdentityScanAlerts[1].description;
    
    // this.partyOne = this.userData.Payload.parties[0];
    // this.partyTwo = this.userData.Payload.parties[1];
    // this.partyOneAddress = this.userData.Payload.parties[0].addresses[0];
    // this.partyTwoAddress = this.userData.Payload.parties[1].addresses[0];
    // this.alerts.push(userDataTwo.Payload.parties[0].role.borrowerResponseInformation.fraudIdentityScanAlerts[0].description);
    // this.alerts.push(userDataTwo.Payload.parties[0].role.borrowerResponseInformation.fraudIdentityScanAlerts[1].description);

    // this.partyOne = userDataTwo.Payload.parties[0];
    // this.partyOneAddress = userDataTwo.Payload.parties[0].addresses[0];
    //this.partyTwo = userDataTwo.Payload.parties[1];
    //this.partyTwoAddress = userDataTwo.Payload.parties[1].addresses[0];
  }

}