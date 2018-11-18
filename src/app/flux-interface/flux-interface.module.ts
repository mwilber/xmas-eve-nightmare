import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FluxInterfaceComponent } from './flux-interface.component';
import { FluxDialogComponent } from './flux-dialog/flux-dialog.component';
import { MaterialModule } from '../material.module';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule
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
