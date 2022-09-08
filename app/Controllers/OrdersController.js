import { appState } from "../AppState.js";
import { ordersService } from "../Services/OrdersService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { setHTML } from "../Utils/Writer.js";

function _drawOrders() {
  let template = ''
  appState.orders.forEach(order => template += order.Template)
  setHTML('orders', template)
}

export class OrdersController {
  constructor() {
    appState.on('orders', _drawOrders)
    appState.on('items', _drawOrders)
    _drawOrders()
  }
  createOrder() {
    try {
      // @ts-ignore
      window.event.preventDefault()
      // @ts-ignore
      const form = window.event.target
      let formData = getFormData(form)
      // console.log('Does this object look okay?', formData);
      ordersService.createOrder(formData)
      // @ts-ignore
      form.reset()
    } catch (error) {
      console.error('[CREATE_ORDER]', error);
    }
  }

  toggleShellfishAllergy(id) {
    ordersService.toggleShellfishAllergy(id)
  }
}