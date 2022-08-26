import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginasRoutingModule } from './components/paginas.routing';
import { AuthRoutingModule } from './auth/auth.routing';


import { PagenofoundComponent } from './components/pagenofound/pagenofound.component';
import { HomeComponent } from './components/home/home.component';
import { AuthComponent } from './auth/auth.component';


const APP_ROUTES: Routes = [

  { path:'auth', component: AuthComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PagenofoundComponent }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( APP_ROUTES ), //! o puede export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES); cuando es sin modulo
    AuthRoutingModule,
    PaginasRoutingModule
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
