import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AplicationRoutes } from './shared/enums/aplication-routes';

const routes: Routes = [
  {
    path: '',
    redirectTo: AplicationRoutes.MENU,
    pathMatch: 'full'
  },
  {
    path: AplicationRoutes.MENU,
    loadChildren: () => import('./menu/menu.module').then(m => m.MenuModule)
  },
  {
    path: AplicationRoutes.PLANING_ROOM,
    loadChildren: () => import('./planning-room/planning-room.module').then(m => m.PlanningRomModule)
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
