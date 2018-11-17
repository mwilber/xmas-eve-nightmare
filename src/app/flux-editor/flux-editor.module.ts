import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FluxEditComponent } from './flux-edit/flux-edit.component';
import { FluxEditLocationComponent } from './flux-edit/flux-edit-location/flux-edit-location.component';
import { FormsModule } from '@angular/forms';
import { FluxEditDialogComponent } from './flux-edit/flux-edit-conversation/flux-edit-dialog/flux-edit-dialog.component';
import { RouterModule } from '@angular/router';
import { FluxEditConversationComponent } from './flux-edit/flux-edit-conversation/flux-edit-conversation.component';
import { MaterialModule } from '../material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { FluxAuthComponent } from './flux-edit/flux-auth/flux-auth.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    MaterialModule,
    FlexLayoutModule
  ],
  entryComponents: [
    FluxAuthComponent
  ],
  declarations: [FluxEditComponent, FluxEditLocationComponent, FluxEditDialogComponent, FluxEditConversationComponent, FluxAuthComponent],
  exports: [FluxEditComponent]
})
export class FluxEditorModule { }
