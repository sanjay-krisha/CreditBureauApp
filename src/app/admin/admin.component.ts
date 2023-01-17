import { Component } from '@angular/core';
import { TableUtil } from "../tableUtil";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  items: Array<any> = ["LaserPro","CreditQuest","SampleApplication"];
  itemsVendor: Array<any> = ["Open Path","TransUnion","Equifax"];
  newItem!: string;
  newItemVendor!: string;

  addItems(input: any) {
    this.items.push(input);
    console.log(this.items);

  }

  removeItem(index: number) {
    this.items.splice(index, 1); // remove 1 item at ith place
  }

  addItemsVendor(inputVendor: any) {
    this.itemsVendor.push(inputVendor);
    console.log(this.itemsVendor);

  }

  removeItemVendor(index: number) {
    this.itemsVendor.splice(index, 1); // remove 1 item at ith place
  }

  exportNormalTable() {
    TableUtil.exportTableToExcel("ExampleNormalTable","");
  }
}



