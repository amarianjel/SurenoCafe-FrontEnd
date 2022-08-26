import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenofoundComponent } from './components/pagenofound/pagenofound.component';
import { PaginasRoutingModule } from './components/paginas.routing';


import { HomeComponent } from './components/home/home.component';


const APP_ROUTES: Routes = [
    
  { path: 'home', component: HomeComponent},
  
  //{ path: 'salado', component: SaladoComponent},
  // { path: 'carne', component: CarnesComponent},
  // { path: 'acompanhamineto', component: AcompanhamientosComponent},
  
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PagenofoundComponent }
  //{ path: '**', pathMatch: 'full', redirectTo: 'home'}
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( APP_ROUTES ), //! o puede export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES); cuando es sin modulo
    PaginasRoutingModule
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
