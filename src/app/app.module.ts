import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

import { AppComponent } from './app.component';
import { FluxEngineModule } from './flux-engine/flux-engine.module';
import { FluxEditorModule } from './flux-editor/flux-editor.module';
import { FluxEditComponent } from './flux-editor/flux-edit/flux-edit.component';
import { FluxEditLocationComponent } from './flux-editor/flux-edit/flux-edit-location/flux-edit-location.component';
import { FluxEditConversationComponent } from './flux-editor/flux-edit/flux-edit-conversation/flux-edit-conversation.component';
import {MaterialModule} from './material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import { FluxInterfaceModule } from './flux-interface/flux-interface.module';
import { FluxInterfaceComponent } from './flux-interface/flux-interface.component';

const appRoutes: Routes = [
  {path:'editor', component:FluxEditComponent},
  {path:'editor/location/:location', component:FluxEditLocationComponent},
  {path:'editor/conversation/:conversation', component:FluxEditConversationComponent},
  {path:'', component:FluxInterfaceComponent}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FluxEngineModule,
    FluxEditorModule,
    FluxInterfaceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
