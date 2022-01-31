import { BrowserModule } from '@angular/platform-browser';
import { PokedexService } from './components/pokedex/pokedex.service';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokedexComponent } from './components/pokedex/pokedex.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailsComponent } from './components/details/details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchComponent } from './components/search/search.component';




@NgModule({
  declarations: [
    AppComponent,
    PokedexComponent,
    DetailsComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
    
  ],
  providers: [PokedexService],
  bootstrap: [AppComponent]
})
export class AppModule { }
