import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { AddShoppingPage } from "../add-shopping/add-shopping";
import { FirebaseListObservable, AngularFireDatabase } from "angularfire2/database";
import { ShoppingItem } from "../../models/shopping-item/shopping-item.interface";
import { EditShoppingItemPage } from "../edit-shopping-item/edit-shopping-item";


@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html',
})
export class ShoppingListPage {

  shoppingListRef$: FirebaseListObservable<ShoppingItem[]>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private angularFireDatabase: AngularFireDatabase,
    private actionSheetController: ActionSheetController) {
      /**
       * shoppingListRef pointe vers Firbase -> 'shopping-list'.
       * Pas seulement pour lire mais aussi pour ecrire (via .push)
       */
    this.shoppingListRef$ = this.angularFireDatabase.list('shopping-list');
    this.shoppingListRef$.subscribe(data => console.log("data", data));
  }

  /**
   * A la section affiche différentes option grace à ActionSheet
   * 1. Edit un item
   * 2. Supprime un item
   * 3. Cancel selection
   *
   * @memberof ShoppingListPage
   */
  selectShoppingItem(shoppingItem : ShoppingItem){
    this.actionSheetController.create({
      title: `${shoppingItem.itemName}`,
      buttons: [
        {
          text: 'Edit',
          handler: () => {
            // Send the user to EditShoppingItemPage et la clés en paramètre
            this.navCtrl.push(EditShoppingItemPage, {shoppingItemId : shoppingItem.$key});
            /**
             * Navigation
             *  ['ShoppingListPage',
             * 'EditShoppingItemPage',
             *  {shoppingItemId : -KrUL2bRVBPeMAkBBtlV}]
             */
          }
        },
        {
          text: 'Delete',
          role: 'destructive',
          handler: () => {
            // Supprime le shoppingItem courant grace à la clés passé en paramètre
            this.shoppingListRef$.remove(shoppingItem.$key);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            // Send the user to EditShoppingItemPage et la clés en paramètre
            console.log("L'utilisateur a selectionner le bouton cancel");
          }
        },
      ]
    }).present();
  }

  navigateToAddShoppingPage(){
    this.navCtrl.push(AddShoppingPage);
  }

}
