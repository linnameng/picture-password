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
import { SecretStoriesComponent } from './secret-stories/secret-stories.component';
import { SecretStoriesService } from './secret-stories/secret-stories.service';

@NgModule({
  declarations: [
    AppComponent,
    VideoComponent,
    SecretStoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    CookieModule.forRoot()
  ],
  providers: [VideoService, SecretStoriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
