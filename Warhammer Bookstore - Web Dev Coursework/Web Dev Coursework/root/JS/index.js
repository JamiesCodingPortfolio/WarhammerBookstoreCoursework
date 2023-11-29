//Array to list the books available on website
const books = [
  {
      name: "Sanguinius: The Great Angel",
      price: 13.00,
      image: "Images/Product1.jpg",
      description: "Sanguinius is the Great Angel, most beloved of all the primarchs, his mighty exploits celebrated throughout the entire Imperium as the Crusade expands into the void. And yet the origins of his Legion are shrouded in mystery and rumour, his unique physical form is an enigma, and his perilous home world remains off-limits to all but his own secretive people. When a discredited remembrancer arrives with the expeditionary fleets to chronicle the primarch’s deeds, he has to work hard to uncover the truth behind the legends. As he accompanies the IX Legion to war against the enemies of the Emperor, the curious scholar comes to learn much more than he expected – not just about the subjects of his study, but also the nature of the Imperium itself."
  },
  {
      name: "The Horus Heresy: Betrayal at Calth",
      price: 15.00,
      image: "Images/Product2.jpg",
      description: "Under the benevolent leadership of the Immortal Emperor the Imperium of Man has stretched out across the galaxy. On the eve of victory, the Emperor leaves the front lines, entrusting the great crusade to his favorite son, Horus. Promoted to Warmaster, the idealistic Horus tries to carry out the Emperor'sgrand design, all the while the seeds of heresy and rebellion have been sowed amongst his brothers."
  },
  {
      name: "The Horus Heresy - False Gods: The Heresy Takes Root",
      price: 7.99,
      image: "Images/Product3.jpg",
      description: "Far from Terra, the XVIth Legion continue in the Great Crusade as the 'Sons of Horus'. Putting the debacle with the interex behind him, the Warmaster has become more withdrawnas he struggles to deal with the jealousy of his brother primarchs, and increasingly relies on the council of his advisors as he plans each new campaign. Noble captain Garviel Loken harbours misgivings about the clandestine ways adopted by many of his brethren, but when the Legion is sent to reconquer the moon of Davin, it is clear that Horus has a personal stake in the matter which may have clouded his judgement. With dark forces rising against them, have the pimarch and his warriors been drawn into a trap?"
  },
  {
    name: "Horus Heresy - Galaxy in Flames: The Heresy Revealed",
    price: 6.19,
    image: "Images/Product4.jpg",
    description: "Having recovered from his grievous injuries, Warmaster Horus leads the triumphant Imperial forces against the rebel world of Istvaan III. Though the rebels are swiftly crushed, Horus's treachery is finally revealed as the planet is razed by virus bombs, and Space Marines turn on their battle-brothers in the most bitter struggle imaginable. Ben Counter brings the opening trilogy of this epic new series to explosive life as the Horus Heresy begins!"
}
];

//This function creates a product page for each book, each line correspondes to a different part of the product page.
function displayProduct(product) {
  const container = document.getElementById("product-container");
  const productElement = document.createElement("div");
  productElement.classList.add("product");

  //This is for the title of the book.
  const nameElement = document.createElement("h2");
  nameElement.classList.add("product-name");
  nameElement.textContent = product.name;
  productElement.appendChild(nameElement);

  //This is for the book image.
  const imageElement = document.createElement("img");
  imageElement.classList.add("product-image");
  imageElement.src = product.image;
  productElement.appendChild(imageElement);

  //This is for the product description.
  const descriptionElement = document.createElement("p");
  descriptionElement.classList.add("product-description");
  descriptionElement.textContent = `Description:\n${product.description}`;
  productElement.appendChild(descriptionElement);

  //This is for the product price.
  const priceElement = document.createElement("p");
  priceElement.classList.add("product-price");
  priceElement.textContent = `£${product.price}`;
  productElement.appendChild(priceElement);

  //This is for the button for buying the product and redirects the user to the payment page. It uses an event listener to achieve this.
  const buyButton = document.createElement("button");
  buyButton.classList.add("buy");
  buyButton.textContent = "Buy";
  productElement.appendChild(buyButton);
  buyButton.addEventListener('click', () => {
    window.location.href = 'pay.html';
  })

  //This creates the entire product div and updates it.
  container.appendChild(productElement);
}

//A for loop so that each book is display on the website, runs for the length of the array.
for (let i = 0; i < books.length; i++) {
  displayProduct(books[i]);
}