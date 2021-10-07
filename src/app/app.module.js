var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from "@ionic/storage";
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContenteditableModule } from '@ng-stack/contenteditable';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { KeyPressDirective } from "../key-press/key-press";
import { HighlightPipe } from "../highlight.pipe";
import { SpacePipe } from "../space.pipe";
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { lvlSel } from '../pages/home/home';
import { txtMod } from '../pages/home/home';
import { usrLvls } from '../pages/home/home';
import { submitLvl } from '../pages/home/home';
import { fbConfig } from './../constants';
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [
            MyApp,
            HomePage,
            KeyPressDirective,
            HighlightPipe,
            SpacePipe,
            lvlSel,
            txtMod,
            usrLvls,
            submitLvl
        ],
        imports: [
            BrowserModule,
            IonicModule.forRoot(MyApp),
            ContenteditableModule,
            IonicStorageModule.forRoot(),
            AngularFireModule.initializeApp(fbConfig),
            AngularFireDatabaseModule
        ],
        bootstrap: [IonicApp],
        entryComponents: [
            MyApp,
            HomePage,
            lvlSel,
            txtMod,
            usrLvls,
            submitLvl
        ],
        providers: [
            StatusBar,
            SplashScreen,
            { provide: ErrorHandler, useClass: IonicErrorHandler }
        ]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map