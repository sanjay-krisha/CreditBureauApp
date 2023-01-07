import { Component , OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CreditReport} from 'src/app/responseModel'
import { PdfService } from 'src/app/pdf-service.service';
declare const PDFObject: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public constructor(private http: HttpClient,
    private pdfService: PdfService){
  }
  src: string = ''; 
  //variable declarations
  ssnNumber = '';
  ssnEntered = "hidden";
  pdfData : any;
  public userData!: CreditReport;

  public ngOnInit() : void{
    const url:string ='/assets/data.json';
    this.http.get(url).subscribe((response) => {
      this.userData = Object.assign(new CreditReport,response);
    })
  }



  onKey(input: any) { 
    this.ssnNumber = input;
    if(input == ""){
      this.ssnEntered = "hidden";
    }
  }

  handleClick(event: any) { 
    console.log(this.ssnNumber);
    this.ssnEntered = "inherit";
    //uncomment to download pdf
    //this.getDocument();
    //method to view pdf
    this.viewPdf();
    
  } 
  
  //method to download pdf
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


  //method to show pdf file
  viewPdf(){
    var blob = this.b64toBlob(this.userData.Payload.documents[0].embeddedContent, "application/pdf");
    let a = document.createElement("a");
    document.body.appendChild(a);
    var url = window.URL.createObjectURL(blob);
    this.src = url;
  }


  //method to download pdf
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