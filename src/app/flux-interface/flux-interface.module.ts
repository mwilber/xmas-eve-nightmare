import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FluxInterfaceComponent } from './flux-interface.component';
import { FluxDialogComponent } from './flux-dialog/flux-dialog.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FluxInterfaceComponent,
    FluxDialogComponent
  ],
  exports: [
    FluxInterfaceComponent
  ]
})
export class FluxInterfaceModule { }
