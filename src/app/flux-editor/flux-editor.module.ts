import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FluxEditComponent } from './flux-edit/flux-edit.component';
import { FluxEditLocationComponent } from './flux-edit/flux-edit-location/flux-edit-location.component';
import { FormsModule } from '@angular/forms';
import { FluxEditDialogComponent } from './flux-edit/flux-edit-conversation/flux-edit-dialog/flux-edit-dialog.component';
import { RouterModule } from '@angular/router';
import { FluxEditConversationComponent } from './flux-edit/flux-edit-conversation/flux-edit-conversation.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule
  ],
  declarations: [FluxEditComponent, FluxEditLocationComponent, FluxEditDialogComponent, FluxEditConversationComponent],
  exports: [FluxEditComponent]
})
export class FluxEditorModule { }
