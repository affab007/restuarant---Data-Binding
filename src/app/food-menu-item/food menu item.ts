import { Component } from "@angular/core";

@Component({
  selector: 'app-food-menu-item',
  templateUrl: './food menu item.component.html'
})
export class FoodMenuItem {
  foodMenuId: number = 1;
  foodMenuStatus: string = 'Available';

  getFoodMenuStatus(){
    return this.foodMenuStatus;
  }
}
