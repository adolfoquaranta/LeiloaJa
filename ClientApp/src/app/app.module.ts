import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';

import { CounterComponent } from './components/counter/counter.component';
import { FetchDataComponent } from './components/fetch-data/fetch-data.component';

import { BuscarLeilaoComponent } from './components/buscarleilao/buscarleilao.component';
import { AddLeilaoComponent } from './components/addleilao/addleilao.component';

import { ApiAuthorizationModule } from 'src/api-authorization/api-authorization.module';
import { AuthorizeGuard } from 'src/api-authorization/authorize.guard';
import { AuthorizeInterceptor } from 'src/api-authorization/authorize.interceptor';
import { IndicadorSimNaoBooleanPipe } from './pipes/custompipes.component';
import { VerleilaoComponent } from './components/verleilao/verleilao.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,

    CounterComponent,
    FetchDataComponent,

    IndicadorSimNaoBooleanPipe,

    BuscarLeilaoComponent,
    AddLeilaoComponent,
    VerleilaoComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ApiAuthorizationModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent, canActivate: [AuthorizeGuard] },
      { path: 'buscar-leilao', component: BuscarLeilaoComponent, canActivate: [AuthorizeGuard] },
      { path: 'add-leilao/:idLeilao', component: AddLeilaoComponent, canActivate: [AuthorizeGuard] },
      { path: 'ver-leilao/:idLeilao', component: VerleilaoComponent, canActivate: [AuthorizeGuard] }
    ])
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true }
  ], 
  bootstrap: [AppComponent]
})
export class AppModule { }
