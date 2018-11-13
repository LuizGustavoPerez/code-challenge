import { BeerComponent } from './beer/beer.component';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { WineComponent } from './wine/wine.component';

//Routes configuration and default route set to wine component
const routes: Routes = [
  { path:'wine', component: WineComponent },
  { path:'beer', component: BeerComponent },
  { path: '', redirectTo:'/wine', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
