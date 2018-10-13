import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FluxEditComponent } from './flux-edit/flux-edit.component';
import { FluxEditLocationComponent } from './flux-edit/flux-edit-location/flux-edit-location.component';
import { FormsModule } from '@angular/forms';
import { FluxEditDialogComponent } from './flux-edit/flux-edit-dialog/flux-edit-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [FluxEditComponent, FluxEditLocationComponent, FluxEditDialogComponent],
  exports: [FluxEditComponent]
})
export class FluxEditorModule { }
