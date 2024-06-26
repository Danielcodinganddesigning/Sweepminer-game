import { Routes } from '@angular/router';
import { StartScreenComponent } from './start-screen/start-screen.component';
import { WinPageComponent } from './win-page/win-page.component';
import { LosePageComponent } from './lose-page/lose-page.component';
import { MenuPageComponent } from './menu-page/menu_page.component';

export const routes: Routes = [
  { path: 'start', component: StartScreenComponent },
  { path: 'win', component: WinPageComponent },
  { path: '', redirectTo: '/start', pathMatch: 'full' }, // Default route
  { path: "lose", component:LosePageComponent },
  { path: "menu", component:MenuPageComponent},
];
