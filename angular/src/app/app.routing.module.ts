import{NgModule}from'@angular/core';
import {RouterModule, Routes}from '@angular/router';

import {VideoComponent}from './video/video.component';
import { SecretStoriesComponent } from './secret-stories/secret-stories.component';

const routes: Routes = [
{path: '', component: SecretStoriesComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
