import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ShoppingItem } from "../../models/shopping-item/shopping-item.interface";
//(!) c'est pas le même import AngularFireDatabaseModule - AngularFireDatabase
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database";
import { ShoppingListPage } from "../shopping-list/shopping-list";

@Component({
  selector: 'page-add-shopping',
  templateUrl: 'add-shopping.html',
})
export class AddShoppingPage {

  shoppingItem = {} as ShoppingItem;
  //"$"" fait référence à un observable
  // Quelle type de list ça va être ? -> ça va être une list de type ShoppingItem

  // shopping-list:
  //   0:
  //     itemName: 'Pizza',
  //     itemNumber: 1
  //   1:
  //     itemName: 'Cheesecake',
  //     itemNumber: 5

  shoppingItemRef$: FirebaseListObservable<ShoppingItem[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private angularFireDatabase: AngularFireDatabase) {
    this.shoppingItemRef$ = this.angularFireDatabase.list('shopping-list');
  }

  addShoppingItem(shoppingItem : ShoppingItem){
    /**
     * Crée un objet anonyme et on s'assure de convertir itemNumber en type number
     * Et le Push dans notre Firebase database à l'interieure de 'shopping-list' node.
     */
    this.shoppingItemRef$.push({
      itemName: this.shoppingItem.itemName,
      itemNumber: Number(this.shoppingItem.itemNumber)
    });

    //Reset notre shoppingItem
    this.shoppingItem = {} as ShoppingItem;

    //Nous redirige vers notre page de liste de shopping
    this.navCtrl.pop(ShoppingListPage);
  }


}
