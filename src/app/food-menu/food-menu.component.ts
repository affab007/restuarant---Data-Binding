import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-menu',
  templateUrl: './food-menu.component.html',
  styleUrls: ['./food-menu.component.css']
})
export class FoodMenuComponent implements OnInit {
  allowNewMenuItem = false;
  menuItemCreationStatus = "ไม่มีการเพิ่มรายการเมนู";
  menuItemName = "";

  constructor() {
    setTimeout( () => { this.allowNewMenuItem = true },3000);

  }

  ngOnInit(): void {
  }
  onCreateMenuItem() {
      this.menuItemCreationStatus = "รายการเมนู " + this.menuItemName + " ได้ถูกเพิ่มขึ้นแล้ว"
  }
  onUpdateMenuName(event: Event){
    this.menuItemName = (<HTMLInputElement>event.target).value;
  }
}
