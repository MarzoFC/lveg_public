import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchInputComponent } from './search/components/search-input/search-input.component';
import { SearchListComponent } from './search/components/search-list/search-list.component';
import { SearchContainerComponent } from './search/container/search-container/search-container.component';
import { BarraComponent } from './barra/barra.component';

import { RouterModule } from '@angular/router';
import { VocesComponent } from './voces/voces.component';
import { ProductoresComponent } from './productores/productores.component';
import { EstudiosComponent } from './estudios/estudios.component';
import { VisualesComponent } from './visuales/visuales.component';
import { InsertarComponent } from './insertar/insertar.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchInputComponent,
    SearchListComponent,
    SearchContainerComponent,
    BarraComponent,
    VocesComponent,
    ProductoresComponent,
    EstudiosComponent,
    VisualesComponent,
    InsertarComponent,
    LoginComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: SearchContainerComponent},
      {path: 'voces', component: VocesComponent},
      {path: 'productores', component: ProductoresComponent},
      {path: 'estudios', component: EstudiosComponent},
      {path: 'visuales', component: VisualesComponent},
      {path: 'insertar', component: InsertarComponent},
      {path: 'login', component: LoginComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
