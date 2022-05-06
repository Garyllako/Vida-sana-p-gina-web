import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { RecetaScreenComponent } from './screens/receta-screen/receta-screen.component';
import { RutinaScreenComponent } from './screens/rutina-screen/rutina-screen.component';
import { ContactoScreenComponent } from './screens/contacto-screen/contacto-screen.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeScreenComponent },
  { path: 'recetas', component: RecetaScreenComponent },
  { path: 'rutinas', component: RutinaScreenComponent },
  { path: 'contacto', component: ContactoScreenComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
