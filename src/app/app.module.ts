import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';

import { FIREBASE_CREDENTIALS } from './firebase.credentials';

import { MyApp } from './app.component';
import { ShoppingListPage } from "../pages/shopping-list/shopping-list";

@NgModule({
  declarations: [
    MyApp,
    ShoppingListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    // Initialise Angularfire avec le identifiant de connexion du dashborad de Firebase
    AngularFireModule.initializeApp(FIREBASE_CREDENTIALS)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ShoppingListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
