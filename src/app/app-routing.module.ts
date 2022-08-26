import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './auth/auth.routing';
import { PaginasRoutingModule } from './components/paginas.routing';

import { HomeComponent } from './components/home/home.component';
import { PagenofoundComponent } from './components/pagenofound/pagenofound.component';


const APP_ROUTES: Routes = [
    
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PagenofoundComponent }
];


@NgModule({
  declarations: [],
  imports: [
    AuthRoutingModule,
    RouterModule.forRoot( APP_ROUTES ), //! o puede export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES); cuando es sin modulo
    PaginasRoutingModule
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
