import { APP_BASE_HREF } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';

import { AppModule } from './app/app.module';
import { EmptyRouteComponent } from './app/empty-route/empty-route.component';

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));

bootstrapApplication(AppComponent, {
  providers: [
    //  AppRoutingModule // use a separate module or ng 15 route provider directly for routes as below
    { provide: APP_BASE_HREF, useValue: '/' },
    provideRouter([{ path: '**', component: EmptyRouteComponent }]),
  ],
});
