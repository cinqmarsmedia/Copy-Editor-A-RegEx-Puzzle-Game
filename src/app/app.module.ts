import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from "@ionic/storage";

import { ChartsModule } from 'ng2-charts-x';

//import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContenteditableModule } from '@ng-stack/contenteditable';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { KeyPressDirective } from "../key-press/key-press";
import { HighlightPipe } from "../highlight.pipe";
import { sanHtmlPipe } from '../safe-html.pipe';

import { SpacePipe } from "../space.pipe";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { lvlSel } from '../pages/home/home';
import { txtMod } from '../pages/home/home';
import { usrLvls } from '../pages/home/home';
import { submitLvl } from '../pages/home/home';
import { makeUsr } from '../pages/home/home';
import { selectflags } from '../pages/home/home';
import { lvlWonDialogue } from '../pages/home/home';

import { fbConfig } from './../constants';
import { DragulaModule } from 'ng2-dragula';
import {enableProdMode} from '@angular/core';

enableProdMode();

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    KeyPressDirective,
    HighlightPipe,
    sanHtmlPipe,
    SpacePipe,
    lvlSel,
    txtMod,
    usrLvls,
    submitLvl,
    makeUsr,
    selectflags,
    lvlWonDialogue
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
     ContenteditableModule,
     IonicStorageModule.forRoot(),
     AngularFireModule.initializeApp(fbConfig),
    AngularFireDatabaseModule,
    ChartsModule,
    DragulaModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    lvlSel,
    txtMod,
    usrLvls,
    submitLvl,
    makeUsr,
    selectflags,
    lvlWonDialogue
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
