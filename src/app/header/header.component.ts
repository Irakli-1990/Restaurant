import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{


  constructor( public router:Router, public service: ServiceService ){}

  userData:any;

  ngOnInit(): void {

   this.getUserSender()
   this.service
  }

  showHide:boolean = false
  


  getUserSender(){
    this.service.userSender.subscribe((data:any)=>{
   this.userData = data
   console.log(this.userData);
    
   
    })
  }



    public menuValue:boolean = false
    menuIcon:string = 'fa-solid fa-bars'

    openMenu() {
      this.menuValue = !this.menuValue
      this.menuIcon = this.menuValue ? 'fa-solid fa-x' : 'fa-solid fa-bars'
      
      
      
    }

    close() {

      this.menuValue = false
      this.menuIcon = 'fa-solid fa-bars'

    }




    
}
