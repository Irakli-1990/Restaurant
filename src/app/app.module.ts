import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { FooterComponent } from './footer/footer.component';
import { HomepagesComponent } from './homepages/homepages.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AboutpageComponent } from './about/aboutpage/aboutpage.component';
import { MastechefComponent } from './about/mastechef/mastechef.component';
import { ClientcarouselComponent } from './homepage/clientcarousel/clientcarousel.component';


import { CarouselModule } from 'ngx-owl-carousel-o';
import { ContactpageComponent } from './contact/contactpage/contactpage.component';
import { FoodlistComponent } from './menu/foodlist/foodlist.component';
import { CartComponent } from './menu/foodlist/cart/cart.component';
import { LoaderComponent } from './loader/loader.component';
import { InterceptService } from './intercept.service';
import { LoginComponent } from './login/login.component';
import { FormgroupDirective } from './formgroup.directive';
import { FormsModule, ReactiveFormsModule,  } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    AboutComponent,
    MenuComponent,
    ContactComponent,
    NotfoundComponent,
    FooterComponent,
    HomepagesComponent,
    AboutpageComponent,
    MastechefComponent,
    ClientcarouselComponent,
    ContactpageComponent,
    FoodlistComponent,
    CartComponent,
    LoaderComponent,
    LoginComponent,
    FormgroupDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    RouterOutlet,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  
  providers: [{

    provide: HTTP_INTERCEPTORS,
    useClass:InterceptService,
    multi: true
    

  },

    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
