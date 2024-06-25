import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component'; // Example component
import { CarteComponent } from './carte/carte.component'; // Example component
import { ReserveComponent } from './reserve/reserve.component'; // Example component
import { ContactComponent } from './contact/contact.component'; // Example component

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'carte', component: CarteComponent },
  { path: 'reserve', component: ReserveComponent },
  { path: 'contact', component: ContactComponent },
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideAnimations(),
    // Add other providers if needed
  ],
};
