import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AddShoppingPage } from "../add-shopping/add-shopping";
import { FirebaseListObservable, AngularFireDatabase } from "angularfire2/database";
import { ShoppingItem } from "../../models/shopping-item/shopping-item.interface";


@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html',
})
export class ShoppingListPage {

  shoppingListRef$: FirebaseListObservable<ShoppingItem[]>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private angularFireDatabase: AngularFireDatabase) {
      /**
       * shoppingListRef pointe vers Firbase -> 'shopping-list'.
       * Pas seulement pour lire mais aussi pour ecrire (via .push)
       */
    this.shoppingListRef$ = this.angularFireDatabase.list('shopping-list');
    this.shoppingListRef$.subscribe(data => console.log("data", data));
  }

  navigateToAddShoppingPage(){
    this.navCtrl.push(AddShoppingPage);
  }

}
