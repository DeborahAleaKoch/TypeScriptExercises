import { createOrder } from "./order/OrderFunctions";
import { addOrderToService } from "./order/OrderServiceFunctions";

import { createProduct } from "./product/ProductFunctions";
import { addProductToService } from "./product/ProductServiceFunctions";

createOrder(["wasser", "IceTee"]);

addOrderToService("hallo", "12");

createProduct("tofu", 12);
addProductToService("good", "22");

import { addProductToServiceIndex, createProductIndex } from "./product";

addProductToServiceIndex("super", "1");
createProductIndex("obst", 13);

import { addOrderToServiceIndex, createOrderIndex } from "./order";

addOrderToServiceIndex("super", "13");
createOrderIndex(["tofu", "wasser"]);
