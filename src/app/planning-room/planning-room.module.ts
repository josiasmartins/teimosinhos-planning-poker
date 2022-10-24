import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanningRomRoutingModule } from './planning-room-routing.module';
import { PlanninComponent } from './components/plannin/plannin.component';


@NgModule({
  declarations: [
    PlanninComponent
  ],
  imports: [
    CommonModule,
    PlanningRomRoutingModule
  ]
})
export class PlanningRomModule { }
