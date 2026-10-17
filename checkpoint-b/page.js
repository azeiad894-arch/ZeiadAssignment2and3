import { items } from "./items.js";

/**
 * Draws an array of items into #list, replacing whatever was there.
 * Each item becomes an <li> with class "goods-item" and text: "{name} - {price} EGP"
 */
export function renderItems(list) {
  const container = document.querySelector("#list");
  if (!container) return;

  container.textContent = "";

  for (const item of list) {
    const li = document.createElement("li");
    li.classList.add("goods-item");
    li.textContent = `${item.name} - ${item.price} EGP`;
    container.append(li);
  }
}

/**
 * Returns only the bags, as an array of item objects from items.
 * Category must be exactly "bags".
 */
export function matching() {
  return items.filter((item) => item.category === "bags");
}

/**
 * Sets the page up:
 * 1. Draws all the items straight away.
 * 2. Listens for a click on #narrow to redraw with only matching items.
 */
export function start() {
  renderItems(items);

  const narrowBtn = document.querySelector("#narrow");
  if (narrowBtn) {
    narrowBtn.addEventListener("click", () => {
      renderItems(matching());
    });
  }
}