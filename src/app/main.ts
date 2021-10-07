import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

(window as any).global = window;

platformBrowserDynamic().bootstrapModule(AppModule);