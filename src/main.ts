import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { UserComponent } from './app/user.component';

bootstrapApplication(UserComponent, appConfig)
  .catch((err) => console.error(err));
