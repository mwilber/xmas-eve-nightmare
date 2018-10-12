import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FluxEngineModule } from './flux-engine/flux-engine.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FluxEngineModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
