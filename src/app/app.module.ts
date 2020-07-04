import { SvgDefinitionsComponent } from './core/svg-icon/svg-definitions.component';
import { SvgIconComponent } from './core/svg-icon/svg-icon.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ActionsComponent } from './components/actions/actions.component';
import { RelatedComponent } from './components/related/related.component';
import { JoinComponent } from './components/join/join.component';
import { ModalComponent } from './components/modal/modal.component';
import { MediaModalComponent } from './components/modal/media-modal/media-modal.component';
import { SafePipe } from './core/pipes/safe.pipe';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ActionsComponent,
    RelatedComponent,
    JoinComponent,
    SvgIconComponent,
    SvgDefinitionsComponent,
    ModalComponent,
    MediaModalComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
