/*
=========================================================
TOY HAVEN - PRODUCT DATA
=========================================================

VIVA TIP:
If you need to ADD, REMOVE or EDIT a product, this is
the MAIN FILE you should edit.

Each product has:
  id          = unique number
  name        = product name
  category    = Figurines / Toys / Board Games / Diecast Cars
  price       = price in dollars
  description = text shown in the product modal
  image       = image file inside the assets folder

Example:
  Change the price:
    price: 29.99  ->  price: 32.99

  Change the name:
    name: "Spider-Man Figurine" -> name: "Super Hero Figure"

  Add a product:
    Copy one object, give it a new id, then change its details.

IMPORTANT:
The id must be unique.
=========================================================
*/

const PRODUCTS = [
  {
    id: 1,
    name: "Spider-Man Figurine",
    category: "Figurines",
    price: 29.99,
    description: "A display-ready superhero figurine for collectors and fans.",
    image: "assets/spiderman.jpg"
  },
  {
    id: 2,
    name: "Batman Figurine",
    category: "Figurines",
    price: 34.99,
    description: "A classic caped hero figure made for your collection shelf.",
    image: "assets/batman.jpg"
  },
  {
    id: 3,
    name: "LEGO City Police Set",
    category: "Toys",
    price: 49.99,
    description: "Build an action-packed city police scene with this creative set.",
    image: "assets/lego-city.jpg"
  },
  {
    id: 4,
    name: "LEGO Star Wars Set",
    category: "Toys",
    price: 59.99,
    description: "A galaxy-themed building set for imaginative play and display.",
    image: "assets/lego-star-wars.jpg"
  },
  {
    id: 5,
    name: "Monopoly Classic",
    category: "Board Games",
    price: 24.99,
    description: "The classic property trading board game for family game nights.",
    image: "assets/monopoly.jpg"
  },
  {
    id: 6,
    name: "Ferrari F40 Model",
    category: "Diecast Cars",
    price: 24.99,
    description: "A detailed red sports-car model for diecast collectors.",
    image: "assets/ferrari.jpg"
  },
  {
    id: 7,
    name: "BMW M3 Diecast",
    category: "Diecast Cars",
    price: 19.99,
    description: "A compact collectible model inspired by the iconic BMW M3.",
    image: "assets/bmw.jpg"
  },
  {
    id: 8,
    name: "Mini Construction Truck",
    category: "Toys",
    price: 16.99,
    description: "A sturdy toy truck for small-world construction adventures.",
    image: "assets/truck.jpg"
  }
];
