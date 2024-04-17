import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartScreenComponent } from './start-screen/start-screen.component';
import { WinPageComponent } from './win-page/win-page.component';

const routes: Routes = [
  { path: 'start', component: StartScreenComponent },
  { path: 'win', component: WinPageComponent },
  { path: '', redirectTo: '/start', pathMatch: 'full' }, // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
