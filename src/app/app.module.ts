import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { FIREBASE_CREDENTIALS } from './firebase.credentials';

import { MyApp } from './app.component';
import { ShoppingListPage } from "../pages/shopping-list/shopping-list";
import { AddShoppingPage } from "../pages/add-shopping/add-shopping";
import { EditShoppingItemPage } from "../pages/edit-shopping-item/edit-shopping-item";

@NgModule({
  declarations: [
    MyApp,
    ShoppingListPage,
    AddShoppingPage,
    EditShoppingItemPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    // Initialise Angularfire avec le identifiant de connexion du dashborad de Firebase
    AngularFireModule.initializeApp(FIREBASE_CREDENTIALS),
    // Initialise le module pour interragir avec la base de données AngularFireDatabaseModule
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ShoppingListPage,
    AddShoppingPage,
    EditShoppingItemPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
