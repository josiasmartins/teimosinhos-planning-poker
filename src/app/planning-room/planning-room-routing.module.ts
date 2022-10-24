import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanninComponent } from './components/plannin/plannin.component';

const routes: Routes = [
  {
    path: '',
    component: PlanninComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanningRomRoutingModule { }
