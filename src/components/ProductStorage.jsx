const sharedDescriptions = {
  colour:
    "Explore our premium wallet collection in stunning colors—classNameic Black, elegant Tan, rich Brown, sophisticated Navy Blue, trendy Olive Green, and luxurious Wine Red (Maroon). Each shade complements your style with a touch of className and durability. Choose your perfect color and personalize it for a unique statement. Order now and upgrade your everyday essentials!",
  charm:
    "Enhance your customized wallets with our stylish metal charms! Choose from a wide range of designs, including crowns, hearts, guitars, anchors, wings, love symbols, and more. Each charm adds a unique and elegant touch to your wallet, making it truly personal.",
  images: ["/photos/charm list 1.jpg","/photos/charm list 2.jpg"], // shared photos
   colouroptions:["Brown","Black","Tan","Wine Red","Navy Blue","Olive Green"],
   charmoptions:["1. Indian Flag","2. Red Heart","3. Peace Symbol","4. Om","5. Guitar","6. King Crown 1","7. King Crown 2","8. Queen Crown","9. Camera","10. Horse","11. Big Mustache","12. Black Mustache","13. Small Mustache","14. Car","15. Anchor","16. Infinity Love","17. Love Text","18. Heart with Small Hearts","19. Sunglasses","20. Double Heart","21. Skull with Crossbones","22. Anchor with Rope","23. Crossed Anchors","24. Wings with Badge","25. Couple in Love","26. Medical Symbol (Caduceus)","27. Eiffel Tower","28. Music Note (Treble Clef)","29. Motorcycle","30. Airplane 1","31. Glasses","32. Fairy","33. \"Mr\" Text (Big Size)","34. Wings","35. \"Mrs\" Text (Big Size)","36. \"Mr.\" Text (Small Size)","37. \"Mrs.\" Text (Small Size)","38. Pistol","39. Love Text with Loops","40. Sunglasses","41. Airplane 2","42. Airplane 3","43. Two Hearts Linked","44. Motorcycle 2","45. \"I ♥ You\"","46. Ribbon Bow","47. Letter \"A\" with Arrow","48. Rose","49. Scooter","50. Football (Soccer Ball)"]


};

const ProductStorage = {
  MenCollections:[
  {
    id: 1,
    name: "Customized Men Wallet",
    description: "Customized leather wallet personalized with your name and lucky charm.",
    price: "450",
    discount: "50% OFF",
    marketPrice: "₹899",
    rating: 4.7,
    details: [
      "Original Vegan Leather Men Wallet",
      "Customized with Name and Charm",
      "Dimensions 12 x 8.6 x 1.5 cm (when closed)",
      "Comes with 2 Cash Slots, Card Slots & Photo Slot",
      "Uniquely Designed with your Name & Good Luck Charm"
    ],
    inputFields: [
      { label: "Name on Wallet", type: "text" },
      { label: "Select Colour", type: "select", options:sharedDescriptions.colouroptions },
      { label: "Select Symbol", type: "select", options:sharedDescriptions.charmoptions}
    ],
    images: ["/photos/Wallet4.jpg","/photos/Wallet2.jpg","/photos/Wallet3.jpg",
             "/photos/Wallet4.jpg","/photos/Wallet5.jpg",...sharedDescriptions.images],
    longDescription: {
      tittle:["Overview","Inner View","Beautiful Colours","Stylish Charm List"],
      descriptions:
      ["Upgrade your style with a personalized wallet! Crafted with premium materials, engraved with your name, and designed for elegance and durability. A perfect gift for birthdays, anniversaries, and special occasions. Stand out with a unique, custom touch that defines you. Order now and carry luxury in your pocket!",
        "Experience the perfect blend of style and functionality with our premium wallet! Designed with multiple card slots, a transparent ID window, and a spacious cash compartment, it ensures convenience and elegance. Crafted from high-quality material with fine stitching, this wallet is perfect for everyday use. Stay organized and stylish—order your personalized wallet today!",
        sharedDescriptions.colour,sharedDescriptions.charm]}
},
  {
  id: 2,
  name: "Customized Sketch Wallet",
  description: "Vegan leather sketch wallet with your photo and name printed.",
  price: "799",
  discount: "20% OFF",
  marketPrice: "₹1000",
  rating: 4.5,
  details: [
    "Vegan Leather Sketch Wallet",
    "Customized with Name & Photo",
    "Dimensions 12 x 8.6 x 1.5 cm (when closed)",
    "Comes with 2 Cash Slots, Card Slots & Photo Slot",
    "Uniquely Designed with your Name & Good Luck Charm"
  ],
  inputFields: [
    { label: "Name on Sketch Wallet", type: "text" },
    { label: "Select Symbol", type: "select", options: sharedDescriptions.charmoptions }
  ],
  images: [
    "/photos/SketchWallet1.jpg",
    "/photos/SketchWallet2.jpg",
    "/photos/Wallet3.jpg",
    "/photos/SketchWallet3.jpg",
    "/photos/SketchWallet1.jpg",
    ...sharedDescriptions.images
  ],
  longDescription: {
    tittle: ["Overview", "Inner View", "Beautiful Colours", "Stylish Charm List"],
    descriptions: [
      "Personalize your Sketch Wallet with your photo and name printed beautifully. Crafted from premium vegan leather for durability, style, and elegance. A perfect gift for birthdays, anniversaries, or any special occasion. Make your wallet truly yours and stand out with a unique custom design!",
      "The Sketch Wallet features multiple card slots, a transparent ID window, and a spacious cash compartment, making it practical and stylish. High-quality material and fine stitching ensure longevity. Stay organized and carry your essentials in style!",
      sharedDescriptions.colour,
      sharedDescriptions.charm
    ]
  }
},
  {
  id: 3,
  name: "Premium Men Wallet",
  description: "Premium High Quality Men Wallet with your name and lucky charm.",
  price: "699",
  discount: "30% OFF",
  marketPrice: "₹1000",
  rating: 4.8,
  details: [
    "Premium High-Quality Vegan Leather Men Wallet",
    "Customized with Name and Charm",
    "Dimensions 12 x 8.6 x 1.5 cm (when closed)",
    "Comes with 2 Cash Slots, Card Slots & chain",
    "Uniquely Designed with your Name & Good Luck Charm"
  ],
  inputFields: [
    { label: "Name on Wallet", type: "text" },
    { label: "Select Colour", type: "select", options: sharedDescriptions.colouroptions },
    { label: "Select Symbol", type: "select", options: sharedDescriptions.charmoptions }
  ],
  images: [
    "/photos/NexonWallet1.jpg",
    "/photos/NexonWallet2.jpg",
    "/photos/NexonWallet3.jpg",
    "/photos/NexonWallet4.jpg",
    "/photos/NexonWallet1.jpg",
    ...sharedDescriptions.images
  ],
  longDescription: {
    tittle: ["Overview", "Inner View", "Beautiful Colours", "Stylish Charm List"],
    descriptions: [
      "Premium Men Wallet crafted from high-quality vegan leather. Elegant, durable, and designed for sophistication. A perfect companion for everyday use or gifting, combining style and practicality.",
      "This wallet features a chain on the inner side for added security. It has multiple card slots and a cash compartment but does not include a photo slot. Fine stitching ensures durability and a premium look.",
      sharedDescriptions.colour,
      sharedDescriptions.charm
    ]
  }
},
  {
  id: 4,
  name: "Men 4 Set Combo",
  description: "High-end quality leather wallet, keychain, Passport Cover & Sunglasses Cover.",
  price: "1300",
  discount: "40% OFF",
  marketPrice: "₹2100",
  rating: 4.6,
  details: [
    "High-Quality Leather Wallet & Keychain Combo",
    "Customized with Name & Good Luck Charm",
    "Wallet Dimensions 12 x 8.6 x 1.5 cm (when closed)",
    "Comes with 2 Cash Slots, Card Slots & Photo Slot",
    "Uniquely Designed with your Name & Good Luck Charm"
  ],
  inputFields: [
    { label: "Name on Items", type: "text" },
    { label: "Select Colour", type: "select", options: sharedDescriptions.colouroptions },
    { label: "Select Wallet Symbol", type: "select", options: sharedDescriptions.charmoptions },
    { label: "Select Passport Cover Symbol", type: "select", options: sharedDescriptions.charmoptions },
    { label: "Select Sunglass Cover Symbol", type: "select", options: sharedDescriptions.charmoptions }
  ],
  images: [
    "/photos/men4setcombo1.jpg",
    "/photos/men4setcombo5.png",
    "/photos/men4setcombo4.jpg",
    "/photos/men4setcombo3.jpg",
    "/photos/men4setcombo1.jpg",
    ...sharedDescriptions.images
  ],
  longDescription: {
    tittle: ["Overview", "Inner View", "Beautiful Colours", "Stylish Charm List"],
    descriptions: [
      "High-end leather wallet and matching keychain set. Personalized with your name and a lucky charm, crafted for style, elegance, and practicality. Perfect gift for special occasions or personal use.",
      "The wallet features multiple card slots, a spacious cash compartment, and a transparent ID window. The keychain has a premium metal finish. Both items are designed for durability and everyday convenience, making it an ideal combo gift.",
      sharedDescriptions.colour,
      sharedDescriptions.charm
    ]
  }
},
{
  id: 9,
  name: "Men Wallet and Keychain Combo",
  description: "Premium leather wallet and keychain combo, personalized with your name and charm – perfect for gifting or daily use.",
  price: "700",
  discount: "30% OFF",
  marketPrice: "₹1000",
  rating: 4.8,
  details: [
    "Original Vegan Leather Men Wallet with customization",
    "Durable metal keychain with personalized charm",
    "Wallet Dimensions: 12 x 8.6 x 1.5 cm (when closed)",
    "Wallet includes 2 Cash Slots, Multiple Card Slots & a Photo Slot",
    "RFID protection for card safety and a stylish finish for modern elegance"
  ],
  inputFields: [
    { label: "Name on Wallet", type: "text" },
    { label: "Select Colour", type: "select", options: sharedDescriptions.colouroptions },
    { label: "Select Symbol", type: "select", options: sharedDescriptions.charmoptions }
  ],
  images: [
    "/photos/WalletKeychain1.jpg",
    "/photos/Wallet2.jpg",
    "/photos/Wallet3.jpg",
    "/photos/LeatherKeychain.jpg",
    "/photos/WalletKeychain1.jpg",
    ...sharedDescriptions.images
  ],
  longDescription: {
    tittle: ["Overview", "Inner View", "Beautiful Colours", "Stylish Charm List"],
    descriptions: [
      "Elevate your everyday essentials with our premium Men’s Wallet and Keychain Combo. Crafted from vegan leather and finished with precision, this combo is the perfect blend of utility and style. Personalize it with your name and lucky charm to make it uniquely yours or gift it to someone special.",
      "The wallet includes multiple card slots, a transparent ID window, spacious currency compartments, and RFID protection to secure your data. The metallic keychain adds a personalized, polished touch – making this combo an ideal gift for birthdays, anniversaries, or festive occasions.",
      sharedDescriptions.colour,
      sharedDescriptions.charm
    ]
  }
}
,
{
  id: 10,
  name: "Colour Photo Men's Wallet",
  description: "Personalized men's wallet with your favourite colour photo and name engraving – a meaningful gift for every occasion.",
  price: "999",
  discount: "33% OFF",
  marketPrice: "₹1499",
  rating: 4.9,
  details: [
    "Original Vegan Leather Men's Wallet with high-quality colour photo print",
    "Customized with Name and optional Charm",
    "Dimensions: 12 x 8.6 x 1.5 cm (when closed)",
    "Includes 2 Cash Slots, Multiple Card Slots & a Transparent Photo Slot",
    "Make it special with a personal image – perfect for gifts or keepsakes"
  ],
  inputFields: [
    { label: "Name on Wallet", type: "text" },
    { label: "Upload Photo", type: "file" },
    { label: "Select Colour", type: "select", options: sharedDescriptions.colouroptions },
    { label: "Select Symbol", type: "select", options: sharedDescriptions.charmoptions }
  ],
  images: [
    "/photos/PhotoWallet1.jpg",
    "/photos/Wallet2.jpg",
    "/photos/Wallet3.jpg",
    "/photos/ColourPhotoWallet4.jpg",
    "/photos/PhotoWallet1.jpg",
    ...sharedDescriptions.images
  ],
  longDescription: {
    tittle: ["Overview", "Inner View", "Beautiful Colours", "Stylish Charm List"],
    descriptions: [
      "Celebrate memories with our Colour Photo Men’s Wallet – a personalized masterpiece printed with your favourite photograph and engraved with your name. Whether it’s for yourself or a loved one, this wallet captures moments that matter, crafted from premium vegan leather for a durable, stylish finish.",
      "Inside the wallet, you'll find spacious cash compartments, multiple card slots, and a dedicated transparent slot to display your special photo. The vibrant image printing ensures clarity and long-lasting quality. Carry a moment close every day – order your custom photo wallet now.",
      sharedDescriptions.colour,
      sharedDescriptions.charm
    ]
  }
},
{
  id: 11,
  name: "Croc Men's Wallet",
  description: "Stylish crocodile-textured vegan leather wallet customized with your name and charm, now with a zip compartment.",
  price: "499",
  discount: "44% OFF",
  marketPrice: "₹899",
  rating: 4.8,
  details: [
    "Premium Croc-Textured Vegan Leather Men's Wallet",
    "Customized with Name and Charm",
    "Dimensions: 12 x 8.6 x 1.5 cm (when closed)",
    "Includes 2 Cash Slots, Multiple Card Slots & 1 Zip Compartment",
    "Elegant croc finish design with durable stitching for long-lasting use"
  ],
  inputFields: [
    { label: "Name on Wallet", type: "text" },
    { label: "Select Colour", type: "select", options: sharedDescriptions.colouroptions },
    { label: "Select Symbol", type: "select", options: sharedDescriptions.charmoptions }
  ],
  images: [
    "/photos/Croc2.jpg",
    "/photos/Croc6.webp",
    "/photos/Croc4.jpg",
    "/photos/Croc.jpg",
    "/photos/Croc2.jpg",
    ...sharedDescriptions.images
  ],
  longDescription: {
    tittle: ["Overview", "Inner View", "Beautiful Colours", "Stylish Charm List"],
    descriptions: [
      "Step up your accessory game with the Croc Men's Wallet – featuring a bold crocodile-textured design and a secure zip compartment. Made from premium vegan leather, this wallet is ideal for men who value both style and functionality.",
      "The wallet includes spacious cash compartments, multiple card slots, and a secure zip section for coins or important items. The croc-textured finish gives it a premium look while maintaining a durable and rugged structure. Personalize it with your name and lucky charm – perfect for personal use or gifting.",
      sharedDescriptions.colour,
      sharedDescriptions.charm
    ]
  }
}
,
{
  id: 12,
  name: "Wallet Keychain Pen Combo",
  description: "Premium personalized combo including wallet, keychain, and pen – engraved with your name and charm, perfect for gifting.",
  price: "999",
  discount: "50% OFF",
  marketPrice: "₹1499",
  rating: 4.9,
  details: [
    "Original Vegan Leather Men’s Wallet with custom name engraving",
    "Durable metal keychain with personalized charm",
    "Elegant metal ball pen with smooth writing and name customization",
    "Wallet Dimensions: 12 x 8.6 x 1.5 cm (when closed)",
    "Combo designed for style, utility, and premium gifting appeal"
  ],
  inputFields: [
    { label: "Name on Wallet", type: "text" },
    { label: "Select Colour", type: "select", options: sharedDescriptions.colouroptions },
    { label: "Select Symbol", type: "select", options: sharedDescriptions.charmoptions }
  ],
  images: [
    "/photos/wpk1.jpg",
    "/photos/Wallet2.jpg",
    "/photos/Wallet3.jpg",
    "/photos/Wallet1.jpg",
    "/photos/wpk1.jpg",
    ...sharedDescriptions.images
  ],
  longDescription: {
    tittle: ["Overview", "Inner View", "Beautiful Colours", "Stylish Charm List"],
    descriptions: [
      "The Wallet Keychain Pen Combo is the perfect blend of function and personal touch. Featuring a custom-engraved men’s wallet, metallic keychain with charm, and a sleek personalized pen – this set is ideal for those who appreciate style and thoughtful gifting.",
      "The wallet offers spacious cash slots, multiple card holders, and premium vegan leather texture. The pen features smooth ink flow and name engraving, while the keychain adds a finishing touch with charm personalization. Packaged beautifully, this combo is perfect for birthdays, corporate gifting, or festive celebrations.",
      sharedDescriptions.colour,
      sharedDescriptions.charm
    ]
  }
},

],


WomenCollections:[
  {
  id: 5,
  name: "Ladies 3 Fold Clutch",
  description: "Elegant and stylish 3-fold ladies clutch made from premium PU leather.",
  price: "699",
  discount: "25% OFF",
  marketPrice: "₹1000",
  rating: 4.7,
  details: [
    "Premium Quality PU Leather with Elegant Finish",
    "Spacious 3-Fold Design with Multiple Compartments",
    "Dedicated Card Slots, Cash Pockets & Zip Pocket",
    "Compact Yet Stylish – Easy to Carry in Hand or Bag",
    "Perfect Gifting Option for Women with Customization"
  ],
  images: [
    "/photos/LadiesClutch2.jpg",
    "/photos/LadiesClutch4.jpg",
    "/photos/LadiesClutch5.png",
    "/photos/LadiesClutch2.jpg",
    "/photos/LadiesClutch1.jpg",
    ...sharedDescriptions.images
  ],
  longDescription: {
    tittle: ["Overview", "Inner View", "Beautiful Colours", "Stylish Charm List"],
    descriptions: [
      "This elegant Ladies 3 Fold Clutch is designed to complement every outfit. Crafted from premium PU leather, it balances fashion and functionality with its spacious compartments, card holders, and a secure zipper pocket.",
      "Inside, the clutch offers multiple card slots, dual cash compartments, and a secure zip pocket for coins or essentials. Its 3-fold compact structure ensures convenience while maintaining a chic look, making it an ideal accessory or thoughtful gift for women.",
      sharedDescriptions.colour,
      sharedDescriptions.charm
    ]
  }
},
{
  id: 6,
  name: "Men Wallet & Women Clutch Combo",
  description: "Perfect as a gifting option for couples or special occasions.",
  price: "999",
  discount: "33% OFF",
  marketPrice: "₹1500",
  rating: 4.8,
  details: [
    "Men’s Wallet crafted from premium quality leather, customizable with name & charm",
    "Women’s 2 Fold Clutch made with stylish PU leather and multiple compartments",
    "Wallet includes card slots, cash compartments & photo slot",
    "Clutch includes cash pockets, card holders, and secure zipper pocket",
    "Perfect gifting combo for birthdays, anniversaries & festive occasions"
  ],
  images: [
    "/photos/MenLadiesClutch1.jpg",
    "/photos/LadiesClutch4.jpg",
    "/photos/MenLadiesClutch5.jpg",
    "/photos/MenLadiesClutch4.jpg",
    "/photos/MenLadiesClutch3.jpg",
    ...sharedDescriptions.images
  ],
  longDescription: {
    tittle: ["Overview", "Inner View", "Beautiful Colours", "Stylish Charm List"],
    descriptions: [
      "This Customized Men’s Wallet & Women’s 2 Fold Clutch Combo is designed as the perfect couple’s gift. The men’s wallet is sleek, durable, and customizable with your name and charm. The women’s clutch offers elegance and practicality with multiple slots and compartments.",
      "The wallet has multiple card slots, two cash compartments, and a photo slot to keep essentials organized. The women’s 2-fold clutch provides dedicated card slots, spacious cash sections, and a zipper pocket for coins or keys. Together, they make an ideal combination of utility and elegance.",
      sharedDescriptions.colour,
      sharedDescriptions.charm
    ]
  }
},
{
  id: 7,
  name: "Women Sling Bag",
  description: "Trendy and stylish sling bag designed for everyday outings and special occasions.",
  price: "899",
  discount: "50% OFF",
  marketPrice: "₹1799",
  rating: 4.6,
  details: [
    "Crafted from high-quality PU leather with a smooth finish and premium durability",
    "Compact yet spacious design with multiple compartments for essentials",
    "Adjustable shoulder strap for comfortable crossbody or shoulder use",
    "Magnetic closure for easy access with added zipper safety inside",
    "Perfect accessory for casual wear, parties, or gifting"
  ],
  images: [
    "/photos/SlingBag1.jpg",
    "/photos/SlingBag6.jpg",
    "/photos/SlingBag2.jpg",
    "/photos/SlingBag3.jpg",
    "/photos/SlingBag5.jpg",
    ...sharedDescriptions.images
  ],
  longDescription: {
    tittle: ["Overview", "Inner View", "Beautiful Colours", "Stylish Charm List"],
    descriptions: [
      "This Women Sling Bag blends elegance with practicality, making it a must-have fashion accessory. Its modern design, premium PU leather, and functional compartments make it suitable for both casual and festive occasions.",
      "The sling bag features multiple inner pockets to organize your essentials like phone, cash, cards, and keys. The adjustable strap allows flexible styling, while the secure magnetic and zipper closures ensure safety and ease of use.",
      sharedDescriptions.colour,
      sharedDescriptions.charm
    ]
  }
},
{
  id: 8,
  name: "Women 4 Set Combo",
  description: "A premium 4-in-1 combo including 3-Fold Clutch, Keychain, Passport Cover, and Sunglass Cover – perfect for everyday use or gifting.",
  price: "1300",
  discount: "40% OFF",
  marketPrice: "₹2200",
  rating: 4.9,
  details: [
    "Elegant 3-Fold Clutch made with premium PU leather, featuring multiple compartments and card slots",
    "Stylish keychain with durable metal ring, customizable with name or charm",
    "Travel-friendly passport cover designed for safety, style, and personalization",
    "Protective sunglass cover with soft inner lining to safeguard lenses from scratches",
    "Perfect for personal use or as a thoughtful gift set for birthdays, anniversaries, and festive occasions"
  ],
  images: [
    "/photos/women4setcombo1.jpg",
    "/photos/LadiesClutch3.jpg",
    "/photos/LadiesClutch5.png",
    "/photos/women4setcombo4.jpg",
    "/photos/women4setcombo5.jpg",
    ...sharedDescriptions.images
  ],
  longDescription: {
    tittle: ["Overview", "Inner View", "Beautiful Colours", "Stylish Charm List"],
    descriptions: [
      "This Women’s 4 Set Combo is designed for elegance, utility, and gifting. The set includes a 3-fold clutch with spacious compartments, a stylish keychain, a travel-friendly passport cover, and a protective sunglass cover – all crafted with high-quality PU leather.",
      "The 3-fold clutch offers multiple slots for cards and cash, while the keychain adds a touch of personalization with charm options. The passport cover ensures your travel essentials are safe and stylish, and the sunglass cover provides complete protection with a smooth lining. Together, this combo delivers both style and functionality.",
      sharedDescriptions.colour,
      sharedDescriptions.charm
    ]
  }
}],

Hamper:[
   {
  id: 13,
  name: "Men’s Premium Gift Hamper",
  description: "A classy and thoughtful premium gift hamper for men with customization options.",
  price: "1990",
  discount: "23% OFF",
  marketPrice: "₹2600",
  rating: 4.8,
  details: [
    "Premium Faux Leather Wallet with Name Customization",
    "Stylish Hook Keychain with Color Options",
    "Sleek Personalized Pen",
    "LED Temperature Display Flask – Custom Name Option",
    "Durable Steel Cup with Personalization",
    "Fogg Deo – Long-Lasting Fragrance",
    "Heart Shaped Chocolate for a Sweet Surprise",
    "All Items Packed in a Premium Gift Box – Ready to Gift"
  ],
  inputFields: [
    { label: "Name on Wallet", type: "text" },
    { label: "Name on Keychain", type: "text" },
    { label: "Name on Cup", type: "text" },
    { label: "Name on Pen", type: "text" },
    { label: "Name on Flask", type: "text" },
    { label: "Wallet Colour", type: "select", options: sharedDescriptions.colouroptions },
    { label: "Keychain Colour", type: "select", options: sharedDescriptions.colouroptions },
    { label: "Select Charm", type: "select", options: sharedDescriptions.charmoptions }
  ],
  images: [
    "/photos/Hamper1A.jpg",
    "/photos/Hamper1B.jpg",
    "/photos/Wallet3.jpg",
    "/photos/Wallet1.jpg",
    "/photos/Hamper1A.jpg",
    ...sharedDescriptions.images
  ],
  longDescription: {
    tittle: ["Overview", "Hamper Contents", "Beautiful Colours", "Stylish Charm List"],
    descriptions: [
      "This Men’s Premium Gift Hamper is the perfect blend of style, utility, and thoughtful customization. It’s ideal for birthdays, anniversaries, or special celebrations where you want to gift something unique and memorable.",
      "The hamper includes a faux leather wallet, hook keychain, pen, LED flask, steel cup, Fogg deodorant, and a heart chocolate – all packed in an elegant gift box.",
      sharedDescriptions.colour,
      sharedDescriptions.charm
    ]
  }
   },
  {
  id: 14,
  name: "Men’s Luxury Gift Hamper",
  description: "Premium lifestyle hamper for men with personalized accessories, luxury perfume, and more — beautifully packed and perfect for gifting.",
  price: "2310",
  discount: "34% OFF",
  marketPrice: "₹3499",
  rating: 4.9,
  details: [
    "Premium Faux Leather Wallet with Name Customization",
    "Sunglasses Cover – Personalized with Name",
    "Metal Keychain – Choose Color and Add Name",
    "Elegant Personalized Pen",
    "LED Temperature Flask – Custom Name Option",
    "Stainless Steel Cup with Customization",
    "Vellavita Luxury Perfume",
    "Chocolate & Decorative Flower",
    "Custom Photo Greeting Card Included",
    "Packed in a Premium Gifting Box"
  ],
  inputFields: [
    { label: "Name on Wallet", type: "text" },
    { label: "Name on Sunglasses Cover", type: "text" },
    { label: "Name on Keychain", type: "text" },
    { label: "Name on Cup", type: "text" },
    { label: "Name on Pen", type: "text" },
    { label: "Name on Bottle", type: "text" },
    { label: "Wallet Colour", type: "select", options: sharedDescriptions.colouroptions },
    { label: "Keychain Colour", type: "select", options: sharedDescriptions.colouroptions },
    { label: "Select Charm", type: "select", options: sharedDescriptions.charmoptions }
  ],
  images: [
    "/photos/Hamper2A.jpg",
     "/photos/TemBottle.jpg",
    "/photos/Wallet3.jpg",
    "/photos/Wallet1.jpg",
    "/photos/Hamper2A.jpg",
    ...sharedDescriptions.images
  ],
  longDescription: {
    tittle: ["Overview", "Hamper Contents", "Beautiful Colours", "Stylish Charm List"],
    descriptions: [
      "Give him the ultimate gift experience with this all-in-one Men’s Luxury Gift Hamper. Each item is handpicked for style and utility, making it the perfect choice for birthdays, anniversaries, or special milestones.",
      "Inside the premium gift box, you’ll find a personalized wallet, metal keychain, pen, sunglasses cover, LED flask, steel cup, chocolate, Vellavita perfume, decorative flower, and a photo greeting card — all customizable.",
      sharedDescriptions.colour,
      sharedDescriptions.charm
    ]
  }
},
{
  id: 15,
  name: "Men’s Ultimate Gift Hamper",
  description: "A luxurious and personalized gift hamper for men featuring fashion, fragrance, accessories, and more — perfect for all special occasions.",
  price: "2710",
  discount: "31% OFF",
  marketPrice: "₹3899",
  rating: 4.9,
  details: [
    "Premium Faux Leather Wallet with Name Customization",
    "Stylish Sunglass 🕶️ for Everyday Use",
    "Premium Quality Shirt – All Sizes & Colors Available",
    "Vellavita Luxury Perfume",
    "LED Temperature Display Bottle with Custom Name",
    "Steel Cup with Name Customization",
    "Elegant Premium Watch",
    "Classic Belt – One Size Fits Most",
    "Chocolate & Decorative Flower",
    "Greeting Card Included for Personal Touch",
    "All Items Neatly Packed in a Premium Gift Box"
  ],
  inputFields: [
    { label: "Name on Wallet", type: "text" },
    { label: "Name on Keychain", type: "text" },
    { label: "Name on Cup", type: "text" },
    { label: "Name on Bottle", type: "text" },
    { label: "Wallet Colour", type: "select", options: sharedDescriptions.colouroptions },
    { label: "Shirt Size", type: "select", options: ["S", "M", "L", "XL", "XXL"] },
    { label: "Shirt Colour", type: "text", placeholder: "Enter preferred colour" },
    { label: "Select Charm", type: "select", options: sharedDescriptions.charmoptions }
  ],
  images: [
    "/photos/Hamper3A.jpg",
    "/photos/TemBottle.jpg",
    "/photos/shirtcolor.jpg",
    "/photos/Wallet3.jpg",
    "/photos/Hamper3A.jpg",
    ...sharedDescriptions.images
  ],
  longDescription: {
    tittle: ["Overview", "Hamper Contents", "Shirt Colours", "Stylish Charm List"],
    descriptions: [
      "Introducing the Men’s Ultimate Gift Hamper – the finest mix of premium fashion, grooming, and personalized accessories, curated for the modern man. A perfect gift for birthdays, anniversaries, or festive occasions.",
      "This hamper includes a shirt (customizable size and color), a premium wallet, sunglasses, LED bottle, cup, belt, watch, perfume, and more — all packed in a deluxe box ready for gifting.",
      sharedDescriptions.colour,
      sharedDescriptions.charm
    ]
  }
},{
  id: 16,
  name: "Men’s Hamper",
  description: "A premium and customizable gift hamper for men featuring essentials like fashion, fragrance, and personalized accessories — perfect for special occasions.",
  price: "2710",
  discount: "31% OFF",
  marketPrice: "₹3899",
  rating: 4.8,
  details: [
    "Premium Faux Leather Wallet",
    "Premium Quality Shirt – All Sizes & Colors Available",
    "Vellavita Luxury Perfume",
    "LED Temperature Display Bottle with Custom Name",
    "Steel Cup with Name Customization",
    "Elegant Premium Watch",
    "Sketch Photo Keychain",
    "Chocolate Treat",
    "Golden Decorative Rose",
    "Greeting Card Included for Personal Touch",
    "All Items Neatly Packed in a Premium Gift Box"
  ],
  inputFields: [
    { label: "Name on Wallet", type: "text" },
    { label: "Name on Cup", type: "text" },
    { label: "Name on Bottle", type: "text" },
    { label: "Wallet Colour", type: "select", options: sharedDescriptions.colouroptions },
    { label: "Shirt Size", type: "select", options: ["S", "M", "L", "XL", "XXL"] },
    { label: "Shirt Colour", type: "text", placeholder: "Enter preferred colour" },
    { label: "Select Charm", type: "select", options: sharedDescriptions.charmoptions }
  ],
  images: [
    "/photos/Hamper4A.jpg",
    "/photos/TemBottle.jpg",
    "/photos/shirtcolor.jpg",
    "/photos/Wallet3.jpg",
    "/photos/Hamper4A.jpg",
    ...sharedDescriptions.images
  ],
  longDescription: {
    tittle: ["Overview", "Hamper Contents", "Shirt Colours", "Stylish Charm List"],
    descriptions: [
      "Discover the Men’s Hamper – a thoughtfully curated collection of personalized and luxury items for him. Perfect for birthdays, anniversaries, or any day you want to make special.",
      "This hamper includes a shirt (customizable in size and color), a premium wallet, LED bottle, cup, perfume, sketch photo keychain, watch, and more — all packed in a ready-to-gift box.",
      sharedDescriptions.colour,
      sharedDescriptions.charm
    ]
  }
}
,


]





    
  
};

export default ProductStorage;
