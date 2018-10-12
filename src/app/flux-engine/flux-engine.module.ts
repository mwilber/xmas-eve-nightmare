import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FluxInterfaceComponent } from './flux-interface/flux-interface.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FluxInterfaceComponent
  ],
  exports: [
    FluxInterfaceComponent
  ]
})
export class FluxEngineModule { }
