// Checkpoint A — your work goes in this file.
//
// Read checkpoint-a/spec.md. It was written for your GitHub account and it is
// the only description of the task that matters.
//
// Check your work with:  npm test a

import { findAllOrders, findOrderById } from "./orders-db.js";

/**
 * 1. loadOrders()
 * async. Returns every order from the database, as an array.
 */
export async function loadOrders() {
  const orders = await findAllOrders();
  return orders;
}

/**
 * 2. myOrders(orders)
 * Takes an array of orders. Returns only the ones that are both:
 * - from Alexandria, and
 * - with status paid
 */
export function myOrders(orders) {
  return orders.filter(
    (order) => order.city === "Alexandria" && order.status === "paid"
  );
}

/**
 * 3. summarize(orders)
 * Takes an array of orders. Returns highest single price, as a number.
 * The largest price of any one order in the list. Ignore quantity. For an empty list, the answer is 0.
 */
export function summarize(orders) {
  if (!orders || orders.length === 0) {
    return 0;
  }
  return orders.reduce(
    (maxPrice, order) => (order.price > maxPrice ? order.price : maxPrice),
    0
  );
}

/**
 * 4. describeOrder(id)
 * async. Looks up one order by its id and returns a label in exactly this shape:
 * {item} x{quantity} ordered by {student}
 * If rejected / not found: "Order {id} not found"
 */
export async function describeOrder(id) {
  try {
    const order = await findOrderById(id);
    return `${order.item} x${order.quantity} ordered by ${order.student}`;
  } catch (error) {
    return `Order ${id} not found`;
  }
}

/**
 * 5. toJsonLines(orders)
 * Takes an array of orders. Returns JSON text for an array of objects
 * keeping only `item` and `quantity` from each order, in that order, and nothing else.
 */
export function toJsonLines(orders) {
  const simplified = orders.map((order) => ({
    item: order.item,
    quantity: order.quantity,
  }));
  return JSON.stringify(simplified);
}