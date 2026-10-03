# Everyday Essentials Printables

A one-page store for the Everyday Essentials print-at-home PDFs. A Facebook ad can land here. The page leads with the $29 Everyday Essentials Printable Life Pack, then the ten single printables.

There is no payment form. This page does not collect card details and does not charge anyone.

## Run it

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8080
```

Then open http://localhost:8080

Paths are relative, so the same files work at the root of a GitHub Pages site. `.nojekyll` is included so Pages serves the files as they are.

## Where checkout links go

Edit **`checkout.config.js`** in the project root. That is the only place a checkout URL belongs.

Each key is one offer. Paste a full `https://` URL from Payhip, Gumroad, or your own checkout. Leave `""` until the link exists.

```js
window.EE_CHECKOUT = {
  "life-pack": "",
  "budget-debt-payoff-planner": "",
  "weekly-meal-planner-grocery-guide": ""
  // remaining product ids are in the file
};
```

A buy button on the page opens that product’s sheet in the same tab. The sheet is the checkout-ready state: cover, price, who it’s for, what it does, and one button.

- When the matching value is an `http` or `https` URL, that button opens it in the same tab.
- When the value is empty, the sheet says checkout is not connected and nothing is charged.

Do not add a card form to this page.

## Prices

Prices and wording come from the sales package. The ten singles are $7, $5, $9, $9, $7, $7, $5, $8, $6, and $8, which add up to $71. The Life Pack is $29. Those are the only prices on the page.

Money Reset ($19), Home & Family ($24), and Planning & Focus ($19) are in the sales package and are not listed here, so the page stays one bundle decision and then the singles.
