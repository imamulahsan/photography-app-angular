import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GraffitiComponent } from './graffiti/graffiti.component';
import { LivePaintingComponent } from './live-painting/live-painting.component';
import { StreetArtToursComponent } from './street-art-tours/street-art-tours.component';
import { StreetArtCoursesComponent } from './street-art-courses/street-art-courses.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'graffiti', component: GraffitiComponent },
  { path: 'live-painting', component: LivePaintingComponent },
  { path: 'street-art-tours', component: StreetArtToursComponent },
  { path: 'street-art-courses', component: StreetArtCoursesComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
