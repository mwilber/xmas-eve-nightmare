import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FluxInterfaceComponent } from './flux-interface/flux-interface.component';
import { FluxDialogComponent } from './flux-interface/flux-dialog/flux-dialog.component';
import { WebStorageModule } from 'ngx-store';

@NgModule({
  imports: [
    CommonModule,
    WebStorageModule
  ],
  declarations: [
    FluxInterfaceComponent,
    FluxDialogComponent
  ],
  exports: [
    FluxInterfaceComponent
  ]
})
export class FluxEngineModule { }
