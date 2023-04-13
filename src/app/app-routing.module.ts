import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
   {path: '', component: BienvenidoComponent},
   {path: 'bienvenido', component: BienvenidoComponent},
   {path: 'error', component: ErrorComponent},
   {path: 'login', component: LoginComponent},
   {path: '**', component: ErrorComponent}//el default siempre deberia ir al final porque funciona como un if, si se cumple la condicion se ejecuta primero

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
