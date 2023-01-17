import { Component } from '@angular/core';

interface Application {
  value: string;
  viewValue: string;
}

interface Vendor {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent {

  selectedApplication: string | undefined;
  selectedVendor: string | undefined;

  apps: Application[] = [
    {value: 'LaserPro', viewValue: 'LaserPro'},
    {value: 'CreditQuest', viewValue: 'CreditQuest'},
    {value: 'Sample Application', viewValue: 'Sample Application'},
  ];

  vendors: Vendor[] = [
    {value: 'TransUnion', viewValue: 'TransUnion'},
    {value: 'Equifax', viewValue: 'Equifax'},
    {value: 'Openpath', viewValue: 'OpenPath'},
  ];
}
