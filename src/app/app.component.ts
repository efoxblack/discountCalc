import { Component } from '@angular/core';

@Component({
  selector: 'dc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  price: any;

  discount: any;

  priceAfterDiscount: any;

  discountCalc(): any {
    var actualDiscount = (this.discount / 100) * this.price;
    return  this.priceAfterDiscount = "$" + (Math.round((this.price - actualDiscount) * 100) / 100).toFixed(2);
  }

}
