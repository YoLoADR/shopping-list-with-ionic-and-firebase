import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseObjectObservable } from "angularfire2/database";
import { Subscription } from 'rxjs/Subscription';

import { ShoppingItem } from "../../models/shopping-item/shopping-item.interface";
import { ShoppingListPage } from "../shopping-list/shopping-list";

@Component({
  selector: 'page-edit-shopping-item',
  templateUrl: 'edit-shopping-item.html',
})
export class EditShoppingItemPage {
  shoppingItemSubscription: Subscription;
  shoppingItemRef$: FirebaseObjectObservable<ShoppingItem>;
  shoppingItem = {} as ShoppingItem;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private angularFireDatabase: AngularFireDatabase) {

      // Caputre l'id du shoppingItem dans le NavParameter => shoppingItemId
      const shoppingItemId = this.navParams.get('shoppingItemId');
      console.log("shoppingItemId", shoppingItemId);
      this.shoppingItemRef$ = this.angularFireDatabase.object(`shopping-list/${shoppingItemId}`);

      this.shoppingItemSubscription = this.shoppingItemRef$.subscribe(shoppingItem => this.shoppingItem = shoppingItem);
  }

  editShoppingItem(shoppingItem : ShoppingItem){
    //Mis à jour de notre item
    this.shoppingItemRef$.update(shoppingItem);
    //Reset notre shoppingItem
    this.shoppingItem = {} as ShoppingItem;

    //Nous redirige vers notre page de liste de shopping
    this.navCtrl.pop(ShoppingListPage);
  }

  ionViewWillLeave(){
    // Unsubscribe à l'observable quand on quitte la page
    this.shoppingItemSubscription.unsubscribe();
  }
}
