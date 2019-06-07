import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { HomeComponent } from './pages/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { EscalaComponent } from './pages/escala/escala.component';
import { ComunicacaoComponent } from './pages/comunicacao/comunicacao.component';
import { MidiaComponent } from './pages/midia/midia.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CadastroComponent,
    HomeComponent,
    EscalaComponent,
    ComunicacaoComponent,
    MidiaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
