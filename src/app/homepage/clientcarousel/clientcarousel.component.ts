import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-clientcarousel',
  templateUrl: './clientcarousel.component.html',
  styleUrl: './clientcarousel.component.css'
})
export class ClientcarouselComponent {


  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    autoplay:true,
    // autoplayTimeout: 3000,
    navSpeed: 700,
  
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1,
      },
      600: {
        items: 1,
      
      },
      740: {
        items: 2,

      },
      1140: {
        items: 3
      }
    },
    nav: false
  }

}
