import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CookieModule } from 'ngx-cookie';

import { AppComponent } from './app.component';
import { VideoComponent } from './video/video.component';
import { AppRoutingModule } from './app.routing.module';
import { VideoService } from './video/video.service';
import { HttpClientModule } from '@angular/common/http';
import { FloorplanComponent } from './floorplan/floorplan.component';
import { FloorplanService } from './floorplan/floorplan.service';

@NgModule({
  declarations: [
    AppComponent,
    VideoComponent,
    FloorplanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    CookieModule.forRoot()
  ],
  providers: [VideoService, FloorplanService],
  bootstrap: [AppComponent]
})
export class AppModule { }
