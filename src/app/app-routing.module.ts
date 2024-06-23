import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CartComponent } from './menu/foodlist/cart/cart.component';
import { LoginComponent } from './login/login.component';
import { blokcguardGuard } from './blokcguard.guard';

const routes: Routes = [
  {path:'', component:HomepageComponent},
  {path:'about', component:AboutComponent},
  {path:'menu', component:MenuComponent},
  {path:'contact', component:ContactComponent},
  {path:'cart', component:CartComponent},
  {path:'login', component:LoginComponent , canDeactivate: [blokcguardGuard]},


  {path:'**', component:NotfoundComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
