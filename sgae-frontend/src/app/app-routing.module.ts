import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './pages/home/home.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { EscalaComponent } from './pages/escala/escala.component';
import { ComunicacaoComponent } from './pages/comunicacao/comunicacao.component';
import { MidiaComponent } from './pages/midia/midia.component';


/**
 * Routes for the root module (AppModule)
 */
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'cadastro',
    component: CadastroComponent,
  },
  {
    path: 'escala',
    component: EscalaComponent,
  },
  {
    path: 'comunicacao',
    component: ComunicacaoComponent,
  },
  {
    path: 'midia',
    component: MidiaComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }