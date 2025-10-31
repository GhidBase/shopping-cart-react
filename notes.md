MVP:
 - Three pages:
     - Home
     - Shop
     - Cart
 - Routing
 - Nav bar
     - The link to the Cart page should show how many items are in the cart when there are items
 - Shop features:
     - Input field to manually enter the number wanted
     - Increment and decrement to adjust
     - Title each item
     - Add to cart button
     - Shop items must come from FakeStore API
     - Use the UseEffect
 - Cart features:
     - Display the items and their quantities
     - Allow them to manually adjust, or increment/decrement


Additional:
 - Try developing this with TDD
 - Need a vercel.json file at the root of my project
 {
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}