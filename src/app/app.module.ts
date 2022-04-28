import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';
import { AddNewHeroComponent } from './components/add-new-hero/add-new-hero.component';
import { HeroSearchComponent } from './components/hero-search/hero-search.component';
import { HeroesListComponent } from './components/heroes-list/heroes-list.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SortingBarComponent } from './components/sorting-bar/sorting-bar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HeroDetailComponent } from './pages/hero-detail/hero-detail.component';
import { HeroesComponent } from './pages/heroes/heroes.component';
import { metaReducers, reducers } from './store';
import { EffectsModule } from '@ngrx/effects';
import { HeroEffects } from './effects/hero.effects';



@NgModule( {
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
    HeroesListComponent,
    SortingBarComponent,
    AddNewHeroComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    // Удалить это, когда нужно будет отправлять реальные HTTP-запросы
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    StoreModule.forRoot( reducers, {
      metaReducers, runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    } ),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot( [ HeroEffects ] )
  ],
  bootstrap: [ AppComponent ]
} )
export class AppModule { }
