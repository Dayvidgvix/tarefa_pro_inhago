import { DetailsComponent } from './components/details/details.component';
import { PokedexComponent } from './components/pokedex/pokedex.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: "",
  component: PokedexComponent
},
{
  path: 'details/:id',
  component: DetailsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
   