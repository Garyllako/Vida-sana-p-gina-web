import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { RecetaScreenComponent } from './screens/receta-screen/receta-screen.component';
import { RutinaScreenComponent } from './screens/rutina-screen/rutina-screen.component';
import { ContactoScreenComponent } from './screens/contacto-screen/contacto-screen.component';
import { LoginScreenComponent } from './screens/login-screen/login-screen.component';
import { SigninScreenComponent } from './screens/signin-screen/signin-screen.component';
import { GaleriaScreenComponent } from './screens/galeria-screen/galeria-screen.component';
import { ItemRecetaScreenComponent } from './screens/item-receta-screen/item-receta-screen.component';
import { ItemRutinaScreenComponent } from './screens/item-rutina-screen/item-rutina-screen.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeScreenComponent },
  { path: 'recetas', component: RecetaScreenComponent },
  { path: 'rutinas', component: RutinaScreenComponent },
  { path: 'contacto', component: ContactoScreenComponent },
  { path: 'login', component: LoginScreenComponent },
  { path: 'signin', component: SigninScreenComponent },
  { path: 'galeria', component: GaleriaScreenComponent },
  { path: 'item-receta', component: ItemRecetaScreenComponent },
  { path: 'item-rutina', component: ItemRutinaScreenComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
