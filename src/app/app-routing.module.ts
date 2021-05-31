import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PanoramaViewComponent } from './components/panorama-view/panorama-view.component';
import { StadiumViewComponent } from './components/stadium-view/stadium-view.component';

const routes: Routes = [  
  { path: 'stadium', component: StadiumViewComponent },
  { path: 'panorama', component: PanoramaViewComponent },
  { path: '',   redirectTo: '/stadium', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
