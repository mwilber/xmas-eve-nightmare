import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterfaceComponent } from './interface/interface.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    InterfaceComponent
  ],
  exports: [
    InterfaceComponent
  ]
})
export class FluxEngineModule { }
