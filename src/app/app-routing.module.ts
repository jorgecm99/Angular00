
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'teams',
    loadChildren: () => import ('./pages/teams/teams.module').then((module) => module.TeamsModule)
  },

  {
    path:'home',
    loadChildren: () => import ('./pages/home-page/home.module').then((module)=>module.HomeModule)
  },

  {
    path:'players',
    loadChildren: () => import ('./pages/players-page/players.module').then((module)=>module.PlayersModule)
  },

  {
    path:'tickets',
    loadChildren: () => import ('./pages/tickets-page/tickets.module').then((module)=>module.TicketsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
