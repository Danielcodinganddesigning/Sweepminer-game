import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { WinPageComponent } from './win-page/win-page.component'; // Corrected import path
import { MenuPageComponent } from './menu-page/menu_page.component';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)],
};
