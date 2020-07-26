import { SvgDefinitionsComponent } from './core/svg-icon/svg-definitions.component';
import { SvgIconComponent } from './core/svg-icon/svg-icon.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { ActionsComponent } from './components/actions/actions.component';
import { JoinComponent } from './components/join/join.component';
import { ModalComponent } from './components/modal/modal.component';
import { MediaModalComponent } from './components/modal/media-modal/media-modal.component';
import { SafePipe } from './core/pipes/safe.pipe';
import { HttpClientModule } from '@angular/common/http';
import { NavPanelComponent } from './components/nav-panel/nav-panel.component';
import { RecentActionComponent } from './components/recent-action/recent-action.component';
import { MediaItemComponent } from './components/media-item/media-item.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { SectionDirectoryComponent } from './components/section-directory/section-directory.component';

@NgModule({
  declarations: [
    AppComponent,
    NavPanelComponent,
    AboutComponent,
    ResourcesComponent,
    ActionsComponent,
    JoinComponent,
    SvgIconComponent,
    SvgDefinitionsComponent,
    ModalComponent,
    MediaModalComponent,
    SafePipe,
    RecentActionComponent,
    MediaItemComponent,
    SectionDirectoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PdfViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
