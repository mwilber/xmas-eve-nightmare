import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FluxEditComponent } from './flux-edit/flux-edit.component';
import { FluxEditLocationComponent } from './flux-edit/flux-edit-location/flux-edit-location.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [FluxEditComponent, FluxEditLocationComponent],
  exports: [FluxEditComponent]
})
export class FluxEditorModule { }
