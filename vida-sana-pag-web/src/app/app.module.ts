import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponentComponent } from './components/nav-bar-component/nav-bar-component.component';
import { FooterComponentComponent } from './components/footer-component/footer-component.component';
import { ContactoScreenComponent } from './screens/contacto-screen/contacto-screen.component';
import { RutinaScreenComponent } from './screens/rutina-screen/rutina-screen.component';
import { RecetaScreenComponent } from './screens/receta-screen/receta-screen.component';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { LoginScreenComponent } from './screens/login-screen/login-screen.component';
import { SigninScreenComponent } from './screens/signin-screen/signin-screen.component';
import { ListComponentComponent } from './components/list-component/list-component.component';
import { GaleriaScreenComponent } from './screens/galeria-screen/galeria-screen.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponentComponent,
    FooterComponentComponent,
    ContactoScreenComponent,
    RutinaScreenComponent,
    RecetaScreenComponent,
    HomeScreenComponent,
    LoginScreenComponent,
    SigninScreenComponent,
    GaleriaScreenComponent,
    ListComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
