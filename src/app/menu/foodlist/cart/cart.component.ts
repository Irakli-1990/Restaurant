import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../../service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{




  constructor(public app:ServiceService){}
  ngOnInit(): void {
  this.getCartList()
  // this.totalPrice()
  this.totalPrice()
  }


  cartList:any
  cartLength:any
  allPrice: number = 0
  getCartList(){
    this.app.cartList().subscribe((data:any) => {
    this.cartList = data
    console.log(data.length);
    this.cartLength = data.length
    this.totalPrice()

    })


  }

// ------------------------------------


   totalPrice(){
    this.allPrice = 0
    this.cartList.forEach((item:any)=>{
       this.allPrice += item.product.price * item.quantity
       console.log(this.allPrice);
       
    })
   }

// ------------------------------
        //  Delete

        deleteItem(id: any) {
   
            this.app.deleteItem(id).subscribe({
              next: () => {
                this.getCartList()
                alert('removed succesfully')
              }
            })

          }
     
// ------------------------------------------

            // PUT BASKET

  
   increase(item: any) {

    item.quantity++

    this.app.cartPut({
      "quantity": item.quantity,
      "price": item.product.price,
      "productId": item.product.id
    }).subscribe({
      next: () =>{
        this.totalPrice()
      }
    })


              }

              decrease(item: any) {

         if(item.quantity >= 2 ){
          item.quantity--
         }
         else{

         }

         this.app.cartPut({
          "quantity": item.quantity,
          "price": item.product.price,
          "productId": item.product.id
        }).subscribe({
          next: () =>{
            this.totalPrice()
          }
        })

         }
            


}
