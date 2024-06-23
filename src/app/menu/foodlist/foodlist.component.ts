import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service.service';
import { OwlOptions } from 'ngx-owl-carousel-o';



@Component({
  selector: 'app-foodlist',
  templateUrl: './foodlist.component.html',
  styleUrl: './foodlist.component.css'
})
export class FoodlistComponent implements OnInit{




 constructor(public app:ServiceService){}

  ngOnInit(): void {
  this.getFoods()
  this.getAllCategory()

  }

  // ------------------
                     // Get AllFoods

  public allFoods:any

  getFoods(){
    this.app.getAllFoods().subscribe(data=>{
      this.allFoods = data
      
    })
  }
//  ------------------------------

                      //  Get Category

  public allCategory:any

  getAllCategory(){
    this.app.getCategory().subscribe(data => {
      console.log(data);
     this.allCategory = data      
    })
  }        
  
  
  // ---------------------------------
  
  
                            // Get Category By Id

 

getId(id: any) {
    
  this.app.getCategById(id).subscribe((data:any)=>{
     console.log(data.products);
     this.allFoods = data.products
  })

    }


           
    




    customOptions: OwlOptions = {
      loop: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: true,
      dots: false,
      
      navSpeed: 700,
      navText: ['Prev', 'Next'],
      responsive: {
        0: {
          items: 2
        },
        400: {
          items: 3
        },
        740: {
          items: 5
        },
        940: {
          items: 7,
        }
      },
      nav: true
    } 



    isMoving:boolean = false

    mottoMove() {

        this.isMoving = true

      }

      //  -------------------------------
      
      //  ADD TO Cart
        

      goToCartPost(foodId: any, foodPrice: any) {
 
           this.app.addToCartPost({
            "quantity": 1,
            "price": foodPrice,
            "productId": foodId
           }).subscribe({
            next: () => {
              alert('Aded To Cart Successfully')
              
            }
      })

        }
}
