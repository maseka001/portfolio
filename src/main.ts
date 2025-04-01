import { provideHttpClient } from '@angular/common/http'; 
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app/app.routes';
import { ContactComponent } from './app/components/contact/contact.component'; 



bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(), // Enable HttpClient
    provideRouter(appRoutes)
  ],
}).catch((err) => console.error(err));


