import{NgModule}from'@angular/core';
import {RouterModule, Routes}from '@angular/router';

import {VideoComponent}from './video/video.component';
import { FloorplanComponent } from './floorplan/floorplan.component';

const routes: Routes = [
{path: '', component: FloorplanComponent}
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
