import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(public http:HttpClient) { }

   public userSender: BehaviorSubject<any> = new BehaviorSubject({})
   public logginSender: Subject<boolean> = new Subject()
   getAllFoods(){
   return this.http.get("https://restaurant.stepprojects.ge/api/Products/GetAll")
   }

   
   getCategory(){
    return this.http.get("https://restaurant.stepprojects.ge/api/Categories/GetAll")
   }

   getCategById(id:any){
    return this.http.get(`https://restaurant.stepprojects.ge/api/Categories/GetCategory/${id}`)
   }

   addToCartPost(body:any){
    return this.http.post(`https://restaurant.stepprojects.ge/api/Baskets/AddToBasket`, body)
   }

   cartList(){
    return this.http.get("https://restaurant.stepprojects.ge/api/Baskets/GetAll")
   }

   deleteItem(id:any){
    return this.http.delete(`https://restaurant.stepprojects.ge/api/Baskets/DeleteProduct/${id}`)
   }

   cartPut(body:any){
    return this.http.put("https://restaurant.stepprojects.ge/api/Baskets/UpdateBasket", body)
   }

}
