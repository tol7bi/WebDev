
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { products } from '../products';
import { Product } from '../products';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],

})
export class ProductListComponent {

  products = [...products];

  constructor(private route: ActivatedRoute,) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const categoryName = params.get('categoryName');
      if (categoryName) {
        this.products = products.filter(product => product.categoryName === categoryName);
      } else {
        this.products = products;
      }
    });
  }

  shareTelegram(p: Product) {
    const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(p.link)}`;
    window.open(telegramUrl, '_blank');
  }

  shareWhatsapp(p: Product){
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent('Check out this product!')}%20${encodeURIComponent(p.link)}`;
    window.open(whatsappUrl, '_blank')
  }


  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
