import { appState } from "../AppState.js"
import { Item } from "../Models/Item.js"

class ItemsService {
  removeItem(id) {
    let leftovers = appState.items.filter(item => item.id !== id)
    appState.items = leftovers
  }
  createItem(formData) {
    let item = new Item(formData)
    appState.items = [item, ...appState.items]
    console.log(appState.items);
  }

}

export const itemsService = new ItemsService()