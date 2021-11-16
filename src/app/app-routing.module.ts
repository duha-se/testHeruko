import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhoneBookComponent } from './phone-book/phone-book.component';


const routes: Routes = [ {path:'phoneB',component:PhoneBookComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes ,{
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
